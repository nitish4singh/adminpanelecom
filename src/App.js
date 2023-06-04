import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import MainLayout from "./components/MainLayout";
import Forgetpassword from "./pages/Forgetpassword";
import Resetpassword from "./pages/Resetpassword";
import Enquiries from "./pages/Enquiries";
import Bloglist from "./pages/Bloglist";
import Blogcatlist from "./pages/Blogcatlist";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ColorList from "./pages/ColorList";
import Categorylist from "./pages/categorylist";
import Brandlist from "./pages/Brandlist";
import Productlist from "./pages/Productlist";
import { Addblog } from "./pages/Addblog";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<Forgetpassword />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="blog-list" element={<Bloglist />} />
          <Route path="blog" element={<Addblog />} />

          <Route path="blog-category-list" element={<Blogcatlist />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="list-color" element={<ColorList />} />
          <Route path="list-category" element={<Categorylist />} />
          <Route path="list-brand" element={<Brandlist />} />
          <Route path="list-product" element={<Productlist />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
