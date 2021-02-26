import React from 'react'
import {memo} from 'react'
import {useState} from 'react'
import Input from './input'

const PersonForm = ({persons, setPersons, setFilteredData}) => {

    console.log('Person Form Component');

    const [ newName, setNewName ] = useState('')

    const [ newNumber, setNewNumber ] = useState('')


    const handleNameChange = event => setNewName(event.target.value)

    const handleNumberChange = event => setNewNumber(event.target.value)

    const handleSubmit = event => {

        event.preventDefault()
    
        const findName = () => persons.find( person => person.name === newName )
    
        const findNumber = () => persons.find( person => person.number === newNumber )
    
        if(newName !== '' && (newNumber !== '' && newNumber.length === 10) && (findName() === undefined && findNumber() === undefined)){

            const newPerson = { name: newName,
                id : persons.length + 1,
                number : newNumber
            }

            setPersons(persons.concat(newPerson))

            setFilteredData(persons.concat(newPerson))
            
            setNewName('')
            setNewNumber('')
        }
        else{
          if(newName === '')
          alert('Add Name')
          else if(newNumber === '')
          alert('Add Number')
          else if(newNumber.length !== 10)
          alert('Number is either higher or lower than Expected')
          else if(findName() !== undefined)
          alert(`${newName} is already added in the Phonebook`)
          else
          alert(`More than one person can't have the same phone number i.e ${newNumber}`)
        }
      } 



    return (
        <form onSubmit={handleSubmit}>
        <table>
          <tbody>
          <Input label='Name' handleChange={handleNameChange} value={newName} />
          <Input label='Number' handleChange={handleNumberChange} value={newNumber} />
          <tr>
            <td>
            <button style={{width : '100%'}}>Add</button>
            </td>
          </tr>
          </tbody>
        </table>
      </form>
    )
}

export default memo(PersonForm)