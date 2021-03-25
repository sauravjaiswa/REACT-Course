import React from 'react'
import Person from './Person'

function NameList() {
    const persons=[
        {
            id:1,
            name:'A',
            age:20,
            skill:'JS'
        },
        {
            id:2,
            name:'B',
            age:28,
            skill:'JAVA'
        },
        {
            id:3,
            name:'C',
            age:40,
            skill:'CSS'
        }
    ]
    const personList=persons.map((person,index) => <Person key={person.id} person={person}/>)
    return (
        <div>{personList}</div>
    )
}

export default NameList
