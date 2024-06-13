import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";

const AppRouts = () => (
  <Routes>
    <Route path="/" element={<Layout>HOMEPAGE</Layout>} />
    <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRouts;
