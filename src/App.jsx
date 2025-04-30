import { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { About, Header } from "./components";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import AnalyticsPage from "./admin/page/AnalyticsPage";
import AddService from "./admin/components/services/AddService";
import ViewServices from "./admin/components/services/ViewServices";
import EditService from "./admin/components/services/EditService";
import AddCategory from "./admin/components/category/AddCategory";
import ViewCategory from "./admin/components/category/ViewCategory";
import EditCategory from "./admin/components/category/EditCategory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/:service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<AnalyticsPage />} />
        {/* Admin Routes */}
        <Route path="/dashboard" element={<AnalyticsPage />} />
        <Route path="/dashboard/add-service" element={<AddService />} />
        <Route path="/dashboard/view-service" element={<ViewServices />} />
        <Route path="/dashboard/edit-service/:id" element={<EditService />} />
        <Route path="/dashboard/add-category" element={<AddCategory />} />
        <Route path="/dashboard/view-category" element={<ViewCategory />} />
        <Route path="/dashboard/edit-category/:id" element={<EditCategory />} />
      </Routes>
    </>
  );
}

export default App;
