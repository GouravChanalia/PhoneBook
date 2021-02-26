import React from 'react'
import {memo} from 'react'

const Person = ({name,number}) => <tr><td>{name}</td><td>{number}</td></tr>

export default memo(Person)