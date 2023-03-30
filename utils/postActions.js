import axios from "axios";
import baseUrl from "./baseUrl";
import catchErrors from "./catchErrors";
import cookie from "js-cookie";

export const Axios = axios.create({
  baseURL: `${baseUrl}/api`,
  headers: { Authorization: cookie.get("token") }
});



export const submitProduct = async (
  products

) => {
  try {
   await Axios.post("/shop", products);

  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};
export const submitdr = async (
  products

) => {
  try {
 
   await Axios.post("/appointment", products);

  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};
export const submitBook = async (
  book,
  setSlot
) => {
  try {

  const res =  await Axios.post("/appointment/book", book);

   setSlot(res.data.filter(time =>time.aval=== true&&time.user==null));
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const editBook = async (
  book
) => {
  try {
  
    const res =  await Axios.post("/appointment/admin", book);
  
     
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};
export const editProduct = async (
  products

) => {
  try {

   await Axios.post("/profile/postsedit", products);

  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};
export const deletePost = async (postId, setPosts, setShowToastr) => {
  try {
    await Axios.delete(`/${postId}`);
    setPosts(prev => prev.filter(post => post._id !== postId));
    setShowToastr(true);
  } catch (error) {
    alert(catchErrors(error));
  }
};

export const likePost = async (postId, productId,userId, setLikes, like = true) => {
  try {
    if (like) {
      
      await Axios.post(`/shop/like/${postId}`,{productId});
      setLikes(prev => [...prev, { user: userId }]);
    }
    //
    else if (!like) {
      await Axios.put(`/shop/unlike/${postId}`,{productId});
      setLikes(prev => prev.filter(like => like.user !== userId));
    }
  } catch (error) {
    alert(catchErrors(error));
  }
};



export const cartMaiDaalo = async (
postId
) => {
  try {

  const res =  await Axios.post(`/addtocart/${postId}`);

  
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};