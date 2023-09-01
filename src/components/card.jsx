import React from "react";
import '../index.css';

function Card({ name, title, description, url, imageURL, publishDate}) {

    return (
        <div className="card-div">
            <div className="image-div">
                <img src={imageURL === null ? "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e49c95300b9b7152b085c5e586411172.jpg" : imageURL} className="images" alt="Card" />
            </div>
            <div className="information-div">
                <h5 className="card-title"> Title : {title === null ? "The Best Labor Day Sales on MacBooks, AirPods and Apple Watches" : title}...</h5>
                <p className="card-desc"> Description : {description === null ? "As Labor Day approaches, if you’re in need of large appliances or tech products—including TVs—it’s a good time to buy as many companies slash prices leading up to the holiday. You can even find deals on Apple products right now—here are some of the best.Read …" : description}...</p>
                <cite className="date">Published at : {publishDate === null ? "2023-08-31T18:30:00Z" : publishDate}</cite><br />
                <cite className="name">Published from : {name === null ? "Lifehacker.com" : name}</cite>
                <div className="learnBtn-div">
                    <a href={url} className="card-btn" target="_blank" rel="noopener noreferrer">Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default Card;