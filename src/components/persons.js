import React from 'react'
import Person from './person'
import {memo} from 'react'

const Persons = ({persons}) => {

    console.log('Persons Component');

    return (
        <table style={{width : '50%'}}>
        <tbody>
        {
            persons.map( ({id, name, number}) => <Person key={id} name={name} number={number} />)
        }
        </tbody>
      </table>
    )
}

export default memo(Persons)