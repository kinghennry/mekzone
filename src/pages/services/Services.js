import {useState} from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import CheckIcon from '@material-ui/icons/Check';
import './service.css'
import services from '../../data/services';
import {BiCheck} from "react-icons/bi"
export default function Services() {
const [tabs, setTabs] = useState(services)
const [value, setValue] = useState(0)
const {id,index,btn,title,img,desc,feature,featuretwo,featurethree}=tabs[value]
    return (
        <>
        <Navbar/>
        <section className="service">
            <div className="container">
              <center className="blogs__title">
                  <h1>SERVICES</h1>
                  <h2>What we do</h2>
                </center>
                 <div className="service__btn fx jc fc ">
                {tabs.map((item, index) => {
            return (
                <>
              <button key={item.id} onClick={() => setValue(index)} className={`tabs-btn ${index === value && 'tabs-btn-active'}`}>{item.btn}</button>
                </>
                )
                })}
                </div>
                    <div className="service__details">
                        <div className="service__img">
                            <img src={img} alt="" />
                        </div>
                        <div className="service__info">
                            <h1>{title}</h1>
                            <p>{desc}</p>
                            <h4>
                                <CheckIcon className="service__icon"/>
                                {feature}</h4>
                            <h4>
                                <CheckIcon className="service__icon"/>
                                {featuretwo}</h4>
                            <h4>
                                <CheckIcon className="service__icon"/>
                                {featurethree}</h4>
                            <a href="">START NOW</a>
                        </div>
                    </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}
