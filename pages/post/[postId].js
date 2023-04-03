import axios from "axios";

import ProductSlider from "../../components/Tools/Productslider";
import baseUrl from "../../utils/baseUrl";

function PostPage({ post, product }) {

  return (
    <>
     

      <div className="flex w-full ">
        <div className="w-1/2 p-6">
        
       
          <ProductSlider product={product.images} />
          <div className="p-1 flex justify-center   ">
          {Object.keys(post).map((posts) => (
          
           <> {post[posts].m &&<>
              {post[posts].m.stocks > 0 && (
                <a className="p-2 mx-2 border w-28 h-28 rounded-full  ">
                  <img
                    src={post[posts].m.images}
                    className="hover:cursor-pointer w-full h-full rounded-full  border border-solid border-black"
                  />
                </a>
              )}</>}
            {post[posts].s &&<>
              {post[posts].s.stocks > 0 && (
                <a className="p-2 mx-2 border w-28 h-28 rounded-full  ">
                  <img
                    src={post[posts].s.images}
                    className="hover:cursor-pointer w-full rounded-full h-full border border-solid border-black"
                  />
                </a>
              )}</>}</>
          
          ))}
          </div>
          <h1 className="text-xl">
              Size :
             </h1>
          <div className="p-1 flex   m-5  ">
       
         
          {Object.keys(post[product.color]).map((posts) => (
  
          <>     
          {post[product.color][posts].stocks>0 &&<>
          
               <a className="p-2 mx-2 border w-28 h-28   ">
               <h1 className=" p-1  font-extrabold text-xl">{post[product.color][posts].size}</h1>
               <h1 className=" p-1 font-semibold text-xl">
               {post[product.color][posts].price}/-</h1>
               </a>
             </>}
          </>
         
         ))}
      

          </div>
            

        </div>
        <div className="w-1/2 p-6">
          <div className="font-normal text-3xl text-black">
           {product.title}
          </div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />

          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <hr />
          <div className="flex  w-36 text-red-500 text-2xl font-thin">
           {product.discount}
            <span
              className="font-bold text-black>
    "
            >
             {product.price}
            </span>
          </div>

          <div className="text-gray-500 text-xs">
            MRP <strike>1000</strike>
          </div>
          <div className="text-gray-600 text-base">Inclusive of all taxes</div>
          <hr />


          <div className="border  p-2">
            <div className="font-semibold text-black text-3xl">500/-</div>
            <div className="text-sky-800 font-semibold">
              Free Delivery{" "}
              <span className="text-black">Thursday,24 September</span>
              <span className="font-normal text-black">
                {" "}
                on your first order in this category
              </span>{" "}
              Details
            </div>

            <div className="text-black">
              Or fastest Delivery{" "}
              <span className=" text-black text-lg font-semibold">
                Wednesday, September 7
              </span>
              <br></br>Order within 7 hrs{" "}
              <span className="font-semibold text-sky-800 ">Details</span>
            </div>

            <ul className="flex p-2 justify-around w-40">
              <li>
                <img src="/location2.png"></img>
              </li>
              <li className="text-xs font-semibold text-black">
                {" "}
                select delivery location
              </li>
            </ul>

            <div className="text-xl text-green-600 font-medium ">In Stock</div>
            <div className="text-black font-normal text-sm">
              Sold by{" "}
              <a className="text-sky-800 font-semibold" href="/a">
                {" "}
                Cocoblu Retail
              </a>{" "}
              and{" "}
              <a className="text-sky-800 font-semibold" href="/a">
                {" "}
                Fulfilled by Amazon
              </a>
            </div>

            <label for="quantity" className="p-1">
              Quantity:
            </label>
            <select className="border border-solid">
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="opel">3</option>
              <option value="audi">4</option>
              <option value="volvo">5</option>
              <option value="saab">6</option>
              <option value="opel">7</option>
              <option value="audi">8</option>
            </select>

            <div className=" ">
              <div className="p-1">
                <button className=" bg-yellow-300 hover:bg-yellow-400 h-7 text-black rounded-lg w-full">
                  Add to Cart
                </button>
              </div>
              <div className="p-1">
                <button className=" bg-orange-400 hover:bg-orange-500 h-7 text-black rounded-lg w-full">
                  Buy Now
                </button>
              </div>
            </div>

            <ul className="flex p-1">
              <li className="p-1">
                <img src="/lock.png"></img>
              </li>
              <li className="text-sm p-1">
                <a className="text-sky-800 font-semibold" href="/">
                  Secure Transaction 
                </a>
              </li>
            </ul>

            <div className="">
              <label class="container p-1 text-sm">Add gift options</label>
              <input className="p-2" type="checkbox" />
            </div>

            <div className="p-1">
              <button className="border border-solid border-gray-700 bg-slate-200 w-full h-10 text-base rounded-lg">
                Add to Wish List  
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    const { postId } = ctx.query;

    const res = await axios.get(`${baseUrl}/api/clothes/${postId}`);
  
    return { props: { post: res.data.varients, product: res.data.product } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};

export default PostPage;
