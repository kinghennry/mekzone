import Blog from "../../components/blog/Blog"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import Faq from "../../components/faq/Faq"
// import Testemonials from "../../components/testemonials/Testemonials"
import Hero from "../../components/hero/Hero"
export default function Home() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Faq />
            {/* <Testemonials/> */}
            <Blog/>
            <Footer/>
        </>
    )
}
