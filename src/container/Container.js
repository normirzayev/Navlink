import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./container.css";
import Home from "../components/home/Home";
import More from "../components/more/More";
import Erorr from "../components/erorr/Erorr";
import Contact from "../components/contact/Contact";
import Register from "../components/register/Register";
import Statis from "../components/statis/Statis";
export default function Container(){
   const [menu, setMenu] = useState(false);
   function menuToggle(){
      setMenu(!menu)
   }
   return(
      <div className="contayner">
         <Router>
            <nav>
               <div className="menu-item">
                  <div>
                        <Link to="/"> <h1>Lo<span>Go</span></h1> </Link>
                  </div>
                  <div className="hamburger" onClick={menuToggle}>
                        <span className="span"></span>
                        <span className="span"></span>
                        <span className="span"></span>
                  </div>
               </div>
               <div className={menu ? "menu-link active" : "menu-link"}>
                  <ul>
                     <li>
                        <Link to="/"> bosh menu </Link>
                     </li>
                     <li>
                        <Link to="/contact"> contact </Link>
                     </li>
                     <li>
                        <Link to="/more"> more </Link> 
                     </li>
                     <li>
                        <Link to="/register"> register </Link> 
                     </li>
                     <li>
                        <Link to="/statistika"> statis </Link> 
                     </li>
                  </ul>
               </div>
            </nav>
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/more" element={<More />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/statistika" element={<Statis />} />
                  <Route path="*" element={<Erorr />} />
            </Routes>
         </Router>
      </div>
   )
}