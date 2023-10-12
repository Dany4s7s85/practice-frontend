import { Link } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion";
import { NavbarPage } from "../../Animation/Animation";
import CloseIcon from '@mui/icons-material/Close';
import "./NavBar.css"
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function NavBar(){
    const [animation, setanimation] = useState("");
    const [screenWidth, setscreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", function() {
      setscreenWidth(document.body.clientWidth)
  })
  if(screenWidth > 800){
    return(
      <div>
        <div className='MainDiv'>
          <div className="NavLogoDiv">
            <Link to='/' className="LogoLink">
              <h2 className="NavLogo"><span>S</span>ome<span>I</span>nformati</h2>
            </Link>
          </div>
          <div className="NavLinksDiv">
            <Link to='/' className="NavLink">Link1</Link>
            <Link to='/' className="NavLink">Link2</Link>
            <Link to='/' className="NavLink">Link3</Link>
            <Link to='/' className="NavLink">Link4</Link>
            <Link to='/' className="NavLink">Link5</Link>
          </div>
          <div className="NavLoginDiv">
            <Link to='/' className="NavLoginButon">Login</Link>
            <Link to='/' className="NavLoginButon">Register</Link>
          </div>
        </div>
      </div>
      
  )
  }else{
    return(
        <div>
        <div className="NavMenuDiv">
            <MenuIcon className='MenuIcon' onClick={()=>{setanimation("end")}}/>
        </div>
          <motion.div 
            className="animatedMenuPage"
            variants={NavbarPage}
            initial="start"
            animate={animation}
            >
              <div className='closeIconDiv'>
                <CloseIcon className="closeIcon" onClick={()=>{setanimation("exit")}}/>
              </div>
            <div className="NavLogoDiv">
              <Link to='/' className="LogoLink">
                <h2 className="NavLogo"><span>S</span>ome<span>I</span>nformati</h2>
              </Link>
            </div>
            <div className="NavLinksDiv">
              <Link to='/' className="NavLink"><spam className="spamErrowIcon"><ArrowForwardIcon sx={{my:-0.9}} className="errowIcon"/></spam>Link1</Link>
              <Link to='/' className="NavLink"><spam className="spamErrowIcon"><ArrowForwardIcon sx={{my:-0.9}} className="errowIcon"/></spam>Link2</Link>
              <Link to='/' className="NavLink"><spam className="spamErrowIcon"><ArrowForwardIcon sx={{my:-0.9}} className="errowIcon"/></spam>Link3</Link>
              <Link to='/' className="NavLink"><spam className="spamErrowIcon"><ArrowForwardIcon sx={{my:-0.9}} className="errowIcon"/></spam>Link4</Link>
              <Link to='/' className="NavLink"><spam className="spamErrowIcon"><ArrowForwardIcon sx={{my:-0.9}} className="errowIcon"/></spam>Link5</Link>
            </div>
            <div className="NavLoginDiv">
              <Link to='/' className="NavLoginButon"><spam className="spamErrowIcon"><ArrowForwardIcon sx={{my:-0.9}} className="errowIcon"/></spam>Login</Link>
              <Link to='/' className="NavLoginButon"><spam className="spamErrowIcon"><ArrowForwardIcon sx={{my:-0.9}} className="errowIcon"/></spam>Register</Link>
            </div>
          </motion.div>
        </div>
        
    )
  }
}

export default NavBar