import React from 'react'
import './recipe.modules.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className="recipe">
            <h1 className="title">{title}</h1>
            <img className="image" src={image} alt="" />
            <p>calories: {calories}</p>
            <ol className="ingredient">
                <p>Ingredients :</p>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
            
        </div>
    );
}

export default Recipe;