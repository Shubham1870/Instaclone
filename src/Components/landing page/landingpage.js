import { Link } from "react-router-dom"

import "./landingpage.css"
const Landing = () => {
    return (
        <>
            <div className="landing-container">
                <div className="image-container">
                 <img src={require("../../Images/landing.jpg")} alt="landing" />
                 </div>
                <div className="context">
                 <div className="name">10X TEAM 04</div>
                 <Link to={"/postview"}>
             <div className="button">
             <button>Enter</button>
             </div>
             </Link>
             </div>
                
            </div>
        </>
    )
}
export default Landing