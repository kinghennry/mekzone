import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './Detail.css'
import works  from "../../data/works"
export default function Details() {
    return (
        <>
        <Navbar/>
            <section className="details">
                <div className="container">
                    <center className="blogs__title">
                        <h1>PROCESS</h1>
                        <h2>How We Work</h2>
                    </center>
                    <div className="detail__grid">    
                 {works.map((work) => {
                    const {id,desc,img,title}= work
                        return (
                        <div className="detail" key={id}>
                            <div className="detail__img">
                            <img src={img} alt={title} />
                            </div>
                            <div className="detail__info">
                                <h1 className="detail__text">{title}</h1>
                                <h4 className="detail__desc">{desc}</h4>
                            </div>
                        </div>
                    )   
                 })}
                </div>
                </div>
            </section>
        <Footer/>
        </>
    )
}
