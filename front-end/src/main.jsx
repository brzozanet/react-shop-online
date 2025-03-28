import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage";
import { Favourites } from "./views/Favourites/Favourites";
import { Cart } from "./views/Cart/Cart";
import { ProductsList } from "./views/ProductsList/ProductsList";
import "./styles/globals.css";
import "./styles/theme.css";

const router = createBrowserRouter([
  {
    element: <MainPage />,
    path: "/",
  },
  {
    element: <Favourites />,
    path: "/ulubione",
  },
  {
    element: <Cart />,
    path: "/koszyk",
  },
  {
    element: <ProductsList />,
    path: "produkty",
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
