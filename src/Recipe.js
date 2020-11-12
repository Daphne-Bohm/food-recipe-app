import React from 'react';
import style from './recipe.module.css'; 

function Recipe({title, calories, image, time, carbs, protein, fat, ingredients, url}){
    return (
        <div className={style.recipe}>
            <div>
                <img className={style.img} src={image} alt={title}/>
            </div>
            <h2>{title}</h2>
            <ul className={style.info}>
                <li className={style.infoItem}>KCAL: {calories} </li>
                <li className={style.infoItem}>Time: {time} </li>
                <li className={style.infoItem}>Carbs: {carbs} </li>
                <li className={style.infoItem}>Protein: {protein} </li>
                <li className={style.infoItem}>Fat: {fat} </li>
            </ul>
            <div className={style.ingredients}>
                <h3>Ingredients:</h3>
                <ul>
                    {ingredients.map( (ingredient, i) => (
                        <li key={i+ingredient}>{ingredient.text}</li>
                    ))}
                </ul>
            </div>
            <button className={style.button}><a href={url}>Visit website to see more...</a></button>
        </div>
    )
}

export default Recipe;