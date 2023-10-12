import NavBar from "../NavBar/NavBar.js"
import Crousel from "./Crousel/Crousel.js";
import Products from "./Products/Products.js";
import Body from "./Body/Body.js";
import Footer from "../Footer/Footer.js";

function Home(){
    
    return(
        <div style={{backgroundColor: "#D9D9D3"}}>
            <NavBar/>
            <Crousel />
            <Products />
            <Body />
            <Footer />
        </div>
    )
}

export default Home;