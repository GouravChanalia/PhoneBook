import React from 'react'
import {memo} from 'react'

const Filter = ({handleFilterChange, newFilter}) => 
        <table>
            <tbody>
                <tr>
                <td><label>Filter By:</label></td>
                <td><input onChange={handleFilterChange} value={newFilter} /></td>
                </tr>
            </tbody>
        </table>

export default memo(Filter)