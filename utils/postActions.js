import axios from "axios";
import baseUrl from "./baseUrl";
import catchErrors from "./catchErrors";
import cookie from "js-cookie";

export const Axios = axios.create({
  baseURL: `${baseUrl}/api`,
  headers: { Authorization: cookie.get("token") }
});

export const submitNewPost = async (
  picUrl,
product

) => {
  try {
  
   await Axios.post("/clothes",  {picUrl,product});

  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

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

export const postComment = async (postId, user, text, setComments, setText) => {
  try {
    const res = await Axios.post(`/comment/${postId}`, { text});

    const newComment = {
      _id: res.data,
      user,
      text,
    
      date: Date.now()
    };

    setComments(prev => [newComment, ...prev]);
    setText("");
  } catch (error) {
    alert(catchErrors(error));
  }
};

export const deleteComment = async (postId, commentId, setComments) => {
  try {
    await Axios.delete(`/${postId}/${commentId}`);
    setComments(prev => prev.filter(comment => comment._id !== commentId));
  } catch (error) {
    alert(catchErrors(error));
  }
};

export const postSubPost = async (postId, user, text,  setSubPosts, setText,picUrl) => {
  try {
    const res = await Axios.post(`/subpost/${postId}`, { text,picUrl });

    const newSubPost = {
      _id: res.data,
      user,
      text,
      picUrl,
      date: Date.now()
    };

    setSubPosts(prev => [newSubPost, ...prev]);
    setText("");
  } catch (error) {
    alert(catchErrors(error));
  }
};
