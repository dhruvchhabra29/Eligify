import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Questionnaire from "../pages/Questionnaire";
import Results from "../pages/Results";
import SavedSchemes from "../pages/SavedSchemes";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import SchemeDetails from "../pages/SchemeDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<About />} />
        <Route path="scheme/:id" element={<SchemeDetails />} />

        <Route
          path="questionnaire"
          element={
            <ProtectedRoute>
              <Questionnaire />
            </ProtectedRoute>
          }
        />
        <Route
          path="results"
          element={
            <ProtectedRoute>
              <Results />
            </ProtectedRoute>
          }
        />
        <Route
          path="saved"
          element={
            <ProtectedRoute>
              <SavedSchemes />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
