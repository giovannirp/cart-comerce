import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Cart } from "./pages/Cart";
import { Confere } from "./pages/Confere";
import { DateProduct } from "./pages/date-product";
import { Main } from './pages/Main/Main'
import { NotFound } from "./pages/NotFound";
import { Registration } from "./pages/Registration/Registration";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confere" element={<Confere />} />
        <Route path="/date-product" element={<DateProduct />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}