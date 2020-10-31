import React from 'react'
import './recipe.css'
function Recipe(props) {
    return (
        <div className="recipe">
            <h1>{props.title}</h1>
            <p>Calories: {props.calories}</p>
            <ul>
                {props.ingredients.map(ing => (
                    <li>{ing.text}</li>
                ))}
            </ul>
            <img src={props.img} alt=""/>


        </div>
    )
}

export default Recipe
