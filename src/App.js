import React, { useState } from 'react'
import Persons from './components/persons'
import {memo} from 'react'
import PersonForm from './components/personform'
import Filter from './components/filter'

const App = ({phonebook}) => {

  console.log('App Component');

  const [ persons, setPersons ] = useState(phonebook)

  const [ newFilter, setNewFilter ] = useState('')

  const [ filteredData, setFilteredData ] = useState(phonebook)

  const handleFilter = value => {
    
    let exp = new RegExp(value,'i')
    setFilteredData(persons.filter( value => exp.test(value.name)))

  }

  const handleFilterChange = event => {

    setNewFilter(event.target.value)

    handleFilter(event.target.value)

  }


  return (
    <div style={{margin : '24px auto', display : 'block', width : '50%', background : 'lightgrey',padding:'24px'}} >
      <h1 style={{color:'yellow'}}>Phonebook</h1>
      <Filter handleFilterChange={handleFilterChange} newFilter={newFilter} />
      <br/>
      <PersonForm persons={persons} setPersons={setPersons} setFilteredData={setFilteredData} filteredData={filteredData}/>
      <h2>Numbers</h2>
      <Persons persons={filteredData} />
    </div>
  )
}

export default memo(App)