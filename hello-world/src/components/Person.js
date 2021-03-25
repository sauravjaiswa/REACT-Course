import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>{person.id+"\t"+person.name+"\t"+person.age+"\t"+person.skill}</h2>
        </div>
    )
}

export default Person
