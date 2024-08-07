import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../components/LoginSignup/Login";
import Signup from "../components/LoginSignup/Signup";
import JobListing from "../Pages/JobListing";
import JobDetails from "../Pages/JobDetails";
import CompaniesPage from "../Pages/CompaniesPage";
import CompanyDashboard from "../Pages/CompanyDashboard";
import UserProfile from "../Pages/UserProfile";
import JobPosting from "../Pages/JobPosting";
import ApplicantInformation from "../Pages/ApplicantInformation";
import UserOnboaring from "../components/LoginSignup/UserOnboaring";
import CompanyOnboarding from "../components/LoginSignup/CompanyOnboarding";
import NotFound from "../components/NotFound";
import PrivateRoutes from "./PrivateRoutes";
import SavedJobs from "../Pages/SavedJobs";
import UserPublicProfile from "../Pages/UserPublicProfile";
import Interview from "../Pages/Interview";
import Courses from "../Pages/Courses";
import CourseDetails from "../Pages/Courses/CourseDetails";
import RoadMap from "../Pages/RoadMap";
import Sheets from "../Pages/Training/Training";
import Training from "../Pages/Training/Training";
import Resume from "../Pages/Resume";
import MockInterviewPage from "../Pages/MockInterviewPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/jobs" element={<JobListing />} />
      <Route path="/job/:id" element={<JobDetails />} />
      <Route path="/courses" element={<Courses />} />
      <Route path='/courses/:id' element={<CourseDetails/>}></Route>
      <Route path="/companies" element={<CompaniesPage />} />
      <Route path="/user/:id" element={<UserPublicProfile />} />
      <Route path="/roadmap" element={<RoadMap/>} />
      <Route path="/sheets" element={<Training/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/mock-interview" element={<MockInterviewPage/>} />



      <Route
        path="/dashboard/*"
        element={
          <PrivateRoutes>
            <CompanyDashboard />
          </PrivateRoutes>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoutes>
            <UserProfile />
          </PrivateRoutes>
        }
      />
      <Route
        path="/post-new-job"
        element={
          <PrivateRoutes>
            <JobPosting />
          </PrivateRoutes>
        }
      />
      <Route
        path="/applicant"
        element={
          <PrivateRoutes>
            <ApplicantInformation />
          </PrivateRoutes>
        }
      />
      <Route path="/user-onboarding" element={<UserOnboaring />} />
      <Route path="/company-onboarding" element={<CompanyOnboarding />} />
      <Route path="/saved-jobs" element={<SavedJobs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;
