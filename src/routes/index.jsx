import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ShopPage from "../pages/ShopPage";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";
import WishPage from "../pages/WishPage";
import MyOrder from "../pages/MyOrder";
import RootLayout from "../layouts/RootLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/shop/product-details/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/login",
        element: <LogInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/wishlist",
        element: <WishPage />,
      },
      {
        path: "/my-order",
        element: <MyOrder />,
      },
    ],
  },
]);
