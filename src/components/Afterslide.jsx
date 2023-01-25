import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AfterSlide() {
    const imgArr = [

        {
            src: "https://f.nooncdn.com/mpcms/EN0001/assets/13942ed4-e2d6-4779-bb32-0fbfe3c56866.png",
            description: "clearance room",
        },
        {
            src: "https://f.nooncdn.com/mpcms/EN0001/assets/35f88437-db79-4ba3-b20e-8591c5488703.png",
            description: "noon Gift Cards",
        },
        {
            src: "https://f.nooncdn.com/mpcms/EN0001/assets/e450930b-3039-462a-a6fc-7cdff4512b27.png",
            description: "Deals",
        },
        {
            src: "https://f.nooncdn.com/mpcms/EN0001/assets/2f9e12c8-ab72-4599-a99d-8d25e79ca098.png",
            description: "Toys & Games",
        },
        {
            src: "https://f.nooncdn.com/mpcms/EN0001/assets/81ca103b-d17e-44a4-bc9d-9cbe8c545e66.png",
            description: "Mobiles",
        },
        {
            src: "https://f.nooncdn.com/mpcms/EN0001/assets/a7d3e97e-5430-4608-af13-e1d5620e2124.png",
            description: "Beauty",
        },
        {
            src: "https://f.nooncdn.com/mpcms/EN0001/assets/75feb083-340c-46e6-a1b3-fc4d5841187e.png",
            description: "Men's Fashion",
        },
        {
            src: "https://f.nooncdn.com/mpcms/EN0001/assets/710f1434-ae38-450e-ba87-42b01f053488.png",
            description: "Women's Fashion",
        },
        {
            src: "https://f.nooncdn.com/mpcms/EN0001/assets/3232fad2-3823-48e8-aba2-6d62a13645b7.png",
            description: "Home & Kitchen",
        },
        {
            src: "https://f.nooncdn.com/mpcms/EN0001/assets/91b6146b-7ff8-42a2-af12-597a8dcdb76d.png",
            description: "Baby Essentials",
        },
        {
            src: "https://f.nooncdn.com/mpcms/EN0001/assets/0f3cced4-a84c-48fe-a8d5-34dd192a9d48.png",
            description: "Appliances",
        },
        {
            src: "https://f.nooncdn.com/mpcms/EN0001/assets/84190c78-020d-421b-8b39-336d4770db3d.png",
            description: "Laptops & Accessories",
        },

    ]
    return (
        <div className="afterslide">
            {/* <Container> */}
                <Row>
                    <Col>
                    <div >
                        {imgArr.map((item,index)=>{
                            return (
                                
                                <img key={index} className="imgarr" src={item.src} />
                            )
                        })}
                    </div>
                    </Col>
                </Row>
            {/* </Container> */}
        </div>
    )
}

export default AfterSlide