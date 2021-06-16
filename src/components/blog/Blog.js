import "./blog.css"
import {IoPersonOutline} from "react-icons/io5"
import {AiOutlineCalendar} from "react-icons/ai"
import {blogs} from "../../data/blog"
export default function Blog() {
    return (
        <section className="blogs">
            <div className="container">
                <center className="blogs__title">
                    <h1>POPULAR NEWS</h1>
                    <h2>Latest From our Blog</h2>
                </center> 
                <div className="blog__grid">    
                 {blogs.map((blog) => {
                    const {id,name,image,date,title,text,author}= blog
                        return (
                        <div className="blog" key={id}>
                            <div className="blog__img">
                                    <img src={image} alt={title} />
                            </div>
                            <div className="blog__details">
                                <h4 className="blog__name">{name}</h4>
                                    <div className="blog__detail">
                                        <AiOutlineCalendar className="blog__detailIcon"/>
                                        {date} /  
                                        <IoPersonOutline className="blog__detailIcon"/>
                                        By {author}
                                    </div>
                                <h3 className="blog__text">{text}</h3>
                            </div>
                        </div>
                    )   
                 })}
                </div>
            </div>
        </section>
    )
}
