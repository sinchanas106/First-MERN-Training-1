import{ Link } from "react-router-dom"
function Navbar(){
    return(
        <nav className="navbar">
            <h2>Campus Connect</h2>
            <div className="nav-Links">
                <Link to="/">Home</Link>
                <Link to="/events">Events</Link>
                <Link to="/about">About</Link>
            </div>
            
           
        </nav>
    );
}
export default Navbar;