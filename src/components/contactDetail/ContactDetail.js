
export default function ContactDetail() {
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
                        <input placeholder="Email" type="email" />
                    </div>
                    <div className="contact__input">
                        <input type="number" placeholder="Number" />
                        
                    </div>
                    <div className="contact__input">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Please describe what you need."></textarea>
                    </div>
                </div>
                <div className="contact__details">
                    <button>Address</button>
                    <button>Google Maps</button>
                    <div className="contact__detailItem">

                    </div>
                </div>
            </div>
        </section>
    )
}
