import React from 'react'

function Ingredients({ingredients}) {
    return (
        <div>
            <p>{ingredients.map(ingredient => (
                <ul>
                    <li>{ingredient.text}</li>
                </ul>
            ))}</p>
        </div>
    )
}

export default Ingredients
