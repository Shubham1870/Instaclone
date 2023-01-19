import { Link } from "react-router-dom"
import "./header.css"
const Header=()=>{
    return(
        <>
        <div>
       <section className="header">
        <section className="image" id="image1">
            <img src={require("../../images/clone.png")} alt="clone"/>
        </section>
        <section >
        <Link to={"/Postcard"}>
        <div className="image" id="image2">
            <img src={require("../../images/camera.jpg")} alt="camera"/>
            </div>
            </Link>
        </section>
       </section>
  
       </div>
        </>
    )
    }
export default Header