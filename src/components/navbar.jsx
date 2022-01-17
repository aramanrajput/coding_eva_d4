
import { Link } from "react-router-dom"

const Navbar =()=>{
return(
    <>
    <div>
        <Link to="/">home</Link>
        <Link to = "/login">login</Link>
        <Link to ="/jobs">jobs</Link>

    </div>
    </>
)
   
   

}

export default Navbar