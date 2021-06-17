import scs from "../../images/Screenshot (406).png"
import "./error.css"
import {Link} from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
export default function Error() {
    return (
        <>
        <Navbar/>
        <section className="error">
            <center className="error__text">
                <h1>SORRY PAGE WAS NOT FOUND!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sunt officia quasi aliquid repudiandae rem at, quas necessitatibus est dolor placeat pariatur nemo.</p>
                <Link to="/">Back To Home</Link>
            </center>
        </section>
        <Footer/>
        </>
    )
}
