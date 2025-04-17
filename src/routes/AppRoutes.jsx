import { Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen.jsx";
import CoursDomain from "../screens/CoursDomainPage";
import Activitie from "../screens/Activities";
import Profile from "../screens/Profile";
import SignUp from "../screens/auth/SignUp.jsx";
import SignIn from "../screens/auth/SignIn.jsx";




const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen/>} />
      <Route path="/DomainsCours/:DomainId" element={<CoursDomain/>} />
      <Route path="/DomainsCours/Activities/:CoursId" element={<Activitie/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/SignIn" element={<SignIn/>} />
    </Routes>
  );
};

export default AppRoutes;
