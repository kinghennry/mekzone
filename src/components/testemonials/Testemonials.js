import "./testemonials.css"
import Carousel from 'react-elastic-carousel';
import Item from "../Item"
export default function Testemonials() {

    const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    <Item className="div">One</Item>
                    <Item className="div">Two</Item>
                    <Item className="div">Three</Item>
                    <Item className="div">Four</Item>
                    <Item className="div">Five</Item>
                    <Item className="div">Six</Item>
                    <Item className="div">Seven</Item>
                    <Item className="div">Eight</Item>
                </Carousel>
            </div>
        </div>
    )
}
