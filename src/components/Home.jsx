// import { Link } from "react-router-dom" 
// import Navbar from "../components/navbar"

function Home() {
    return ( 
        <>
        <div className="homepage">
        <div className="homepage-title">
            <h2>This is the homepage</h2>
        </div>
        <div className="homepage-content">
            <h3 className="homepage-description">This is an online ecommerce webpage</h3>
            <img src="../media/ecom.webp" alt="ecommerce stock photo" className="homepage-photo"/>
        </div>
        </div>
        </>
    )
}

export default Home