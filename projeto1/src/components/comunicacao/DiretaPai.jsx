import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Junior" idade={20} nerd={false} />
            <DiretaFilho nome="Gabriel" idade={17} nerd={true} />
        </div>
    )
}