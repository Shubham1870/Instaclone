import { Link } from "react-router-dom"
import "./header.css"
const Header=()=>{
    return(
        <>
        <div>
       <section className="header">
        <section id="image1">
            <img src={require("../../Images/images.png")} alt="clone"/>
        </section>
        <section id="image-2">
        <Link to={"/Postcard"}>
        <div id="image-22" >
            <img src={require("../../Images/camera.jpg")} alt="camera"/>
            </div>
            </Link>
        </section>
       </section>
  
       </div>
        </>
    )
    }
export default Header