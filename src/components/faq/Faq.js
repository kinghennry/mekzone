import { useState } from 'react';
import "./faq.css"
// BsQuestionCircle
import data from "../../data/faqs"
import Accordion from "../accordion/Accordion"
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
export default function Faq() {
    const [questions, setQuestions] = useState(data);
    
    return (
        <section className="faqs">
            <div className="container">
                <div className="faq">
                    <div className="faq__header">
                        <h4>FAQ</h4>
                        <h1>Most Common Questions about our services.</h1>
                        <button>View All</button>
                    </div>
                    <div className="faq__detais">
                        {questions.map(question => {
                    return  <Accordion key={question.id} {...question} />
                        })}
                    </div>
                </div>
              
            </div>
        </section>
    )
}
