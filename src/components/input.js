import React from 'react'
import {memo} from 'react'

const Input = ({handleChange, value, label}) => {

    console.log('Input Component');

        return (
        <tr>
            <td>
            {label}:
            </td>
            <td>
            <input onChange={handleChange} value={value}/>
            </td>
        </tr>
        )
}

export default memo(Input)