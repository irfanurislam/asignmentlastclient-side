import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
  FaPlusCircle,
  FaUserCog,
  FaCog,
  FaChalkboardTeacher,
  FaCreditCard,
  FaGraduationCap,
  FaUserTie,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "../hooks/useAxiosSecure";


const Dashboard = () => {
  const {user} = useContext(AuthContext)
  const isAdmin = useAdmin()
  const isInstructor = useInstructor();
  console.log(isAdmin,isInstructor);
  // admin

const [usersdata ,setUsersData] = useState([])
useEffect(() =>{
  fetch(`https://side-of-server.vercel.app/users`)
  .then(res => res.json())
  .then(data =>{
    setUsersData(data)
  })
},[])
console.log('shihab',usersdata)

const activeUserEmail = user?.email
const findUser = usersdata?.find(user => user?.email === activeUserEmail)
// console.log("shihab",findUser.role)
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          
          {findUser?.role === "admin" &&  (
    <>
      <li>
        <NavLink to="/dashboard/adminhome">
          <FaHome></FaHome> Admin Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manageuser">
          <FaUserCog></FaUserCog> Manage User
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manageclass">
          <FaCog></FaCog> Manage Class
        </NavLink>
      </li>
    </>
  )}
  
  {findUser?.role === "instructor" &&  (
    <>
     
      <li>
        <NavLink to="/dashboard/addclass">
          <FaPlusCircle></FaPlusCircle> Add Class
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/myclass">
          <FaPlusCircle></FaPlusCircle> My Class
        </NavLink>
      </li>
    </>
  )}
  
  {!findUser?.role && (
    <>
      <li>
        <NavLink to="/dashboard/payment">
          <FaCreditCard></FaCreditCard> Payment
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/myenrolled">
          <FaCreditCard></FaCreditCard> myenrolled
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/paymenthistory">
          <FaCreditCard></FaCreditCard> history
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/mycart">
          <FaShoppingCart></FaShoppingCart> My Cart
        </NavLink>
      </li>
    </>
  )}
  
      





          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/classespage">
              <FaGraduationCap></FaGraduationCap> Our Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructors">
              <FaUserTie></FaUserTie> Our Instructors
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
