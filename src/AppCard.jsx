import { useState } from 'react'
import star from "../public/Images/star.png"

function AppCard(props){
    let text
    if (props.spots ===0 ){
        text = "SOLD OUT"
    }
    else{
        text = "Hurry Up!!"
    }
    return (
        <div className='head'>
        <div className="card">
            <div className="imgbox">
                <img className="pic" src={props.img} alt="Person 1"></img>
                <div className="spl">
                    {text}
                </div>
            </div>
            <div className="rating">
                <img className="star" src={star} alt="star"></img>
                <span>({props.rating})</span>
                <span>{props.reviewCount}</span>
                <span>&#183;</span>
                <span>{props.location}</span>
            </div>
            <p className="summ">{props.title}</p>
            <p className="price"><strong>From Rs.{props.price}</strong>/ person</p>
        </div>
        </div>
    )
}

export default AppCard