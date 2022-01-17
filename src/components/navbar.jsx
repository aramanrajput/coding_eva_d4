
import { Link } from "react-router-dom"
import "./navbar.css"
const Navbar =()=>{
return(
    <>
    <div className="box">
        <Link to="/"><p>home</p></Link>
        <Link to = "/login"><p>login</p></Link>
        <Link to ="/jobs"><p>jobs</p></Link>

    </div>
    </>
)
   
   

}

export default Navbar