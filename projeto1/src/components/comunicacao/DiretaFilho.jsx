import React from 'react'

export default props => {
    let nerd;

    if(props.nerd){
        nerd = "Verdadeiro"
    }else {
        nerd ="False"
    }



    return (
        <div>
            <span>{props.nome} </span>
            <span><strong>{props.idade}</strong> </span>
            <span>{nerd}!</span>
        </div>
    )
}