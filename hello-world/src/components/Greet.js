import React from 'react'

// function Greet(){
//     return <h1>Hello Bob</h1>
// }

/**Ways for destructuring-
 * const Greet=(props)=>{
    const {name,heroName}=props
    return (
    <div>
        <h1>
            Hello {name} aka {heroName}
        </h1>
        {props.children}
    </div>
    );
}     //In named export

const Greet=({name,heroName})=>{
    return (
    <div>
        <h1>
            Hello {name} aka {heroName}
        </h1>
        {props.children}
    </div>
    );
}     //In named export
*/

const Greet=({name,heroName})=>{
    // console.log(props)
    return (
    <div>
        <h1>
            Hello {name} aka {heroName}
        </h1>
        {/* {props.children} */}
    </div>
    );
}     //In named export

export default Greet     //Default export