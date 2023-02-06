import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import baseUrl from "../utils/baseUrl";
import { redirectUser } from "../utils/authUser";
import "semantic-ui-css/semantic.min.css";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
        <Component {...pageProps} />
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { token } = parseCookies(ctx);
  
  let pageProps = {};

  const protectedRoutes =
    ctx.pathname === "/" ||
    ctx.pathname === "/mugs" ||
    ctx.pathname === "/hoodies" ||
    ctx.pathname === "/Grocery-Store" ||
    ctx.pathname === "/post/[postId]" ||
    ctx.pathname === "/product/[userId]" ||
    ctx.pathname === "/profile" ||
    ctx.pathname === "/shops/[category]" ||
    ctx.pathname === "/dr/[userId]" ||
    ctx.pathname === "/user" ||
    ctx.pathname === "/form"|| 
    ctx.pathname==="/shopProfile"||
    ctx.pathname === "/userProfile"


  if (!token) {

    protectedRoutes && redirectUser(ctx, "/login");
  }
  //
  else {
    try {
    

      const res = await axios.get(`${baseUrl}/api/auth`, {
        headers: { Authorization: token },
     
      });

      const { user } = res.data;

      if (user) !protectedRoutes && redirectUser(ctx, "/");

      pageProps.user = user;
      
   
     
    } catch (error) {
      destroyCookie(ctx, "token");
      redirectUser(ctx, "/login");
    }
  }

  return { pageProps };
};

export default MyApp;


