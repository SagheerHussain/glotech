import { useEffect, useState } from "react";
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
import ServiceContentPage from "./pages/ServiceContentPage";
import ViewColor from "./admin/components/color/ViewColor";
import AddColor from "./admin/components/color/AddColor";
import EditColor from "./admin/components/color/EditColor";
import AddAbout from "./admin/components/about/AddAbout";
import ViewAbout from "./admin/components/about/ViewAbout";
import EditAbout from "./admin/components/about/EditAbout";
import AddStats from "./admin/components/stats/AddStats";
import ViewStats from "./admin/components/stats/ViewStats";
import EditStats from "./admin/components/stats/EditStats";
import ViewOverallStats from "./admin/components/overall stats/ViewOverallStats";
import EditOverallStats from "./admin/components/overall stats/EditOverallStats";
import AddTeam from "./admin/components/team/AddTeam";
import ViewTeam from "./admin/components/team/ViewTeam";
import EditTeam from "./admin/components/team/EditTeam";
import AddTestimonial from "./admin/components/testimonials/AddTestimonial";
import ViewTestimonial from "./admin/components/testimonials/ViewTestimonial";
import EditTestimonial from "./admin/components/testimonials/EditTestimonial";
import Logo from "./admin/components/header/Logo";
import EditLogo from "./admin/components/header/EditLogo";
import Contact from "./admin/components/contact/Contact";
import EditContact from "./admin/components/contact/EditContact";
import { getColors } from "./services/colors";
import SignUp from "../app/(auth)/SignUp";
import SignIn from "../app/(auth)/SignIn";
import Authentication from "./auth/Authentication";
import ComingSoon from "./ComingSoon";

function App() {
  useEffect(() => {
    // Fetch colors from the API when the component mounts
    const fetchColors = async () => {
      try {
        const { data } = await getColors(); // Replace with your API URL
        const colors = data[0]; // Assuming there's only one color object

        // Update the CSS variables with the new color values
        const root = document.documentElement;
        root.style.setProperty("--primary", colors.primary);
        root.style.setProperty("--secondary", colors.secondary);

        console.log("Theme colors updated successfully!");
      } catch (error) {
        console.error("Error fetching colors:", error);
      }
    };

    fetchColors();
  }, []);

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<ComingSoon />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/services/:service" element={<ServicePage />} />
        <Route path="/services" element={<ServiceContentPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}

        {/* Auth Routes */}
        {/* <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} /> */}

        {/* Admin Routes */}
        {/* <Route element={<Authentication />}>
          <Route path="/dashboard" element={<AnalyticsPage />} />
          <Route path="/dashboard/add-service" element={<AddService />} />
          <Route path="/dashboard/view-service" element={<ViewServices />} />
          <Route path="/dashboard/edit-service/:id" element={<EditService />} />
          <Route path="/dashboard/add-category" element={<AddCategory />} />
          <Route path="/dashboard/view-category" element={<ViewCategory />} />
          <Route
            path="/dashboard/edit-category/:id"
            element={<EditCategory />}
          />
          <Route path="/dashboard/add-color" element={<AddColor />} />
          <Route path="/dashboard/view-color" element={<ViewColor />} />
          <Route path="/dashboard/edit-color/:id" element={<EditColor />} />
          <Route path="/dashboard/add-about" element={<AddAbout />} />
          <Route path="/dashboard/view-about" element={<ViewAbout />} />
          <Route path="/dashboard/edit-about/:id" element={<EditAbout />} />
          <Route path="/dashboard/add-stats" element={<AddStats />} />
          <Route path="/dashboard/view-stats" element={<ViewStats />} />
          <Route path="/dashboard/edit-stats/:id" element={<EditStats />} />
          <Route
            path="/dashboard/view-overall-stats"
            element={<ViewOverallStats />}
          />
          <Route
            path="/dashboard/edit-overall-stats/:id"
            element={<EditOverallStats />}
          />
          <Route path="/dashboard/add-team" element={<AddTeam />} />
          <Route path="/dashboard/view-team" element={<ViewTeam />} />
          <Route path="/dashboard/edit-team/:id" element={<EditTeam />} />
          <Route
            path="/dashboard/add-testimonial"
            element={<AddTestimonial />}
          />
          <Route
            path="/dashboard/view-testimonial"
            element={<ViewTestimonial />}
          />
          <Route
            path="/dashboard/edit-testimonial/:id"
            element={<EditTestimonial />}
          />
          <Route path="/dashboard/view-logo" element={<Logo />} />
          <Route path="/dashboard/edit-logo/:id" element={<EditLogo />} />
          <Route path="/dashboard/view-contact" element={<Contact />} />
          <Route path="/dashboard/edit-contact/:id" element={<EditContact />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
