import React,{useState} from 'react'
import "./Tabs.css"

import items from '../menu';
function Tabs() {
// const [menuItems, setMenuItems] = useState(items)
const [tabs, setTabs] = useState(items)
const [value, setValue] = useState(0)
const {id,index,img,desc,title}=tabs[value]
 return (
        <section className="tabs">
            <div className="container ">
                <div className="tabs__btn fx jc fc ">
                {tabs.map((item, index) => {
            return (
              <button key={item.id} onClick={() => setValue(index)} className={`tabs-btn ${index === value && 'tabs-btn-active'}`}>{item.btn}</button>
            )
                })}
             </div>
                 
                <article className="tabs__flex" key={index}>
                    <div className="tabs__img">
                            <img src={img} alt=""/>
                    </div>
                    <div className="tabs__text">
                        <h1 className="fwb"> {title}</h1>
                        <p className="fww">{desc}</p>
                        <a className="tab__btn">More Info</a>
                         </div>
                 </article> 

                </div>
        </section>
    )
}

export default Tabs
