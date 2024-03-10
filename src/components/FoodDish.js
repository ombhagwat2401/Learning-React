import React from 'react'

function FoodDish({ foodImg, foodName, foodPrice }) {
    return (
        <div className="foodCard">
            <img src={foodImg} alt="" />
            <div className='foodDetails'>
                <p>{foodName}</p>
                <p>Rs. {foodPrice}</p>
            </div>
        </div>
    )
}

export default FoodDish