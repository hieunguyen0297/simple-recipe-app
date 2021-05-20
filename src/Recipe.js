import React, {useState} from 'react'
import Ingredients from './Ingredients.js'
export default function Recipe({title, calories, image, url, ingredients}) {
    const [show, setShow] = useState(false)

    const click = () => {
        // if(show == true){
        //     setShow(false)
        // }else{
        //     setShow(true)
        // }
        setShow(!show)
    }
    return (
        <div className='recipe-div'>
            <h1>{title}</h1>
            <p>{Math.floor(calories)} Calories</p>
            <img src={image} alt='images'></img>
            <div>
                <button className='btn-details'><a href={url} target='_blank' rel="noreferrer">See Details</a></button>
            </div>
            <button className='btn-details' onClick={click}>Ingredients</button>
            {show !== false && (
                <div>          
                    <Ingredients ingredients={ingredients}/>
                </div>
            
            )}
            
            
        </div>
    )
}
