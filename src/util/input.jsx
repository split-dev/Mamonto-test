import React from 'react'

function Input({className, placeholder, type, value, SetInput}) {
    return (
        <input className={className} placeholder={placeholder} type={type} value={value} onChange={(event) => {
            SetInput(event.target.value)
        }}/>
    )
}

export default Input;
