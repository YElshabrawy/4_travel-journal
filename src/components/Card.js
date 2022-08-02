import React from 'react';

function Card() {
    return (
        <div className="container">
            <img
                src="https://source.unsplash.com/WLxQvbMyfas"
                alt=""
                className="card--img"
            />
            <div className="data">
                <div className="info-row">
                    <img src="assets/spot.png" alt="" />
                    <h4>JAPAN</h4>
                    <a href="/">View on Google Maps</a>
                </div>
                <h1>Mount Fuji</h1>
                <h5>12 Jan, 2021 - 24 Jan, 2021</h5>
                <p>
                    Mount Fuji is the tallest mountain in Japan, standing at
                    3,776 meters (12,380 feet). Mount Fuji is the single most
                    popular tourist site in Japan, for both Japanese and foreign
                    tourists.
                </p>
            </div>
        </div>
    );
}

export default Card;
