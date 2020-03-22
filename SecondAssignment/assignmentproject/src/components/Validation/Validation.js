import React, {useState} from 'react'

const Validation = (props) =>{

    let textLength = props.textLength

    let textInfo = null

    if (textLength < 5){
        textInfo =(
            <div>
                <h2>Text to short</h2>
            </div>
        )
    }

    if (textLength >= 5){
        textInfo =(
            <div>
                <h2>Text long enough</h2>
            </div>
        )
    }

        


    return (
        <div>
            {textInfo}
        </div>
    )
}

export default Validation