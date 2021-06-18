import {useState} from 'react'
import contacts from '../../data/contact';

export default function ContactDetail() {
const [contact, setContact] = useState(contacts)
const [value, setValue] = useState(0)
const {id,index,btn,title,desc,tab,img,imgTwo,
    imgThree}=contacts[value]

    return (
        <section className='contact'>
            <div className="container contact__feed">
                <div className="contact__text">
                    <h1>Need Help?</h1>
                    <p>Reach out to the world's most reliable IT services.</p>
                    <div className="contact__input">
                        <input placeholder="Name" />
                    </div>
                    <div className="contact__input">
                        <input placeholder="Email*" type="email" />
                    </div>
                    <div className="contact__input">
                        <input type="number" placeholder="Number" />   
                    </div>
                    <div className="contact__input">
                        <textarea name="" id="" cols="10" rows="7" placeholder="Please describe what you need."></textarea>
                    </div>
                    <button type="button">Submit</button>
                </div>
                <div className="contact__details">
                    {contacts.map((item, index) => {
                        return (
                            <>                    
                                <button className={`contact__btn ${index === value && 'contact__btn-active'}`}  key={item.id} onClick={() => setValue(index)}>{item.btn}</button>
                            </>)})
                    }
                    <div className="contact__detailItem">
                        {tab}
                    </div>
                </div>
            </div>
        </section>
    )
}
