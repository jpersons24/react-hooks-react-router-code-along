import {NavLink} from "react-router-dom"

const linkStyles ={
   width: "100px",
   padding: "12px",
   margin: "0 6px 6px",
   background: "blue",
   textDecoration: "none",
   color: "white",
 }
 
 function NavBar() {
   return (
     <div>
       <NavLink 
         to="/"
         exact
         style={linkStyles}
         activeStyle={{
           background: 'darkblue'
         }}
       >
         Home
       </NavLink>
       <NavLink
         to="/login"
         exact
         style={linkStyles}
         activeStyle={{
           background: "darkblue"
         }}
       >
         Login
       </NavLink>
       <NavLink
         to="/signup"
         exact
         style={linkStyles}
         activeStyle={{
           background: "darkblue"
         }}
       >
         Signup
       </NavLink>
       <NavLink
         to="/messages"
         exact
         style={linkStyles}
         activeStyle={{
           background: "darkblue"
         }}
       >
         Messages
       </NavLink>
     </div>
   )
 }

 export default NavBar
 