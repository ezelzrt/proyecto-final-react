import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayouts";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Login />} />
              <Route
                path="alta-productos"
                element={
                  <ProtectedRoute>
                    <ProductFormContainer />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
