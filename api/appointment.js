const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
const authMiddleware = require("../middleware/authMiddleware");
const AppointmentModel = require("../models/AppointmentModel");

router.get("/", authMiddleware,async (req, res) => {
  try {
    const { userId } = req;
    const post = await AppointmentModel.findOne({user: userId})
      .populate("user")
   
     
    if (!post) {
      return res.status(404).send("no product found");
    }
   
    return res.json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

router.get("/:userId", authMiddleware,async (req, res) => {
  try {
 
    const post = await AppointmentModel.findOne({user:req.params.userId})
      .populate("user")
   
     
    if (!post) {
      return res.status(404).send("no product found");
    }
   
    return res.json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});


router.post("/",authMiddleware, async (req, res) => {
  try{
   
    const { userId } = req; 
    const   products = req.body;
   let user
 
   user = await AppointmentModel.findOne({user:userId})
   if (!user) {
  
   user = new AppointmentModel({
    user:userId,
    shopimg:products[products.length-1].shopimg,
    address:products[products.length-1].address,
    category:products[products.length-1].category,
    shopname:products[products.length-1].shopname,
   }); }
   let p={persons:[]}

   
   let time1=10
    let time2=00
    let time3=10
   let time4=15
   let strtime1="10:0"
   let strtime2="10:15"
   for (let j = 0; j <24; j++) {
     
        
   
   const newproduct ={
     time1:strtime1,
     
     time2:strtime2,
    
   
   
   
   }
   
   p.persons.push(newproduct); 
         
   time2=time4
   time4=time4+15
   
   if( time2==0){
    
   time1=time1+1
   
   
   }  if( time4==60){
     time3=time3+1
   time4=00
   
   }    
   strtime1=time1.toString()+":"+time2.toString()
   strtime2=time3.toString()+":"+time4.toString()
         
    }
   
    const uniqueIds = [];

 const unique = products.filter(element => {
   const isDuplicate = uniqueIds.includes(element.name);

   if (!isDuplicate) {
     uniqueIds.push(element.name);
 
     return true;
   }
 
   return false;
 });

 for (let i = 0; i <unique.length; i++) {
 
    
     
        const newdr ={
          name:unique[i].name,

          img:unique[i].img,
        
          specialization: unique[i].specialization,
        
         about: unique[i].about,
          
          fees: unique[i].fees,
        
          discount:  unique[i].discount,
        
          persons:p.persons
      
      }
          
        await user.dr.push(newdr);
        
      
      
}
 
   
   
    await user.save();
  
    const user1 = await UserModel.findById(userId)
    user1.category="Doctor"
    await user1.save();
    return res.status(200).send("done");
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });
  
  router.post("/book",authMiddleware, async (req, res) => {
    try{
     
      const { userId } = req; 
      const   book = req.body;


     const results = await AppointmentModel.findOne({
      user:book.userId,
      "dr.name": book.name,
      
    },{dr: {
      $elemMatch: {
        name: book.name,
      
      },
    },}
    );
      

const alreadypresent = results.dr[0].persons.filter((time) => time.user !==null&&time.user.toString() ==userId).length>0;

    console.log(alreadypresent)
    if(alreadypresent){
      return res.status(401).send(`you alread booked`);
     }
   const product = results.dr[0].persons.filter(time =>time.time2=== book.time);

  if(product[0].user!=null){
    return res.status(401).send(`alread booked`);
   }

    product[0].user=userId 
    
    
    await  results.save()

    



   
  const user = await UserModel.findById(userId)
   obj={
    date:results.dr[0].Date,
   
     hospitalname:book.hospitaname,
    time:book.time,
    drname:book.name,
    appointId:product[0]._id
   }

   user.Appointment.push(obj)
    await user.save();

    return res.status(200).json( results.dr[0].persons)

 
      } catch (error) {
        console.error(error);
        return res.status(500).send(`Server error`);
      }
    });


    router.post("/admin",authMiddleware, async (req, res) => {
      try{
       
        const { userId } = req; 
        const   book = req.body;
   
       const results = await AppointmentModel.findOne({
        user:userId,
        "dr.name": book.name,
        
      },{dr: {
        $elemMatch: {
          name: book.name,
        
        },
      },}
      );
      
        
  if(book.aval){
    if(book.Date!==null){ 
    results.dr[0].Date=book.Date
    await  results.save()}
    for(let i=0;i<book.time.length;i++){
      
 
     const product = results.dr[0].persons.filter(time =>time.time2=== book.time[i]);
  
     
     
      product[0].aval=book.aval
      await  results.save()
       }
      
       
       return res.status(200).json( results.dr[0])
}

      if(book.reset){
        
           results.dr[0].Date=null 
          await  results.save()
       
    for (let j = 0; j <results.dr[0].persons.length; j++) {

      results.dr[0].persons[j].user=null
     
      await  results.save()
    }
    for (let j = 0; j <results.dr[0].persons.length; j++) {

      
      results.dr[0].persons[j].aval=false
      await  results.save()
    }


    return res.status(200).json( results.dr[0])
  }
    
        } catch (error) {
          console.error(error);
          return res.status(500).send(`Server error`);
        }
      });
  
module.exports = router;
