import { useEffect, useState } from 'react'
import './Demo.css'


export default function Demo() {

    const[animals, setAnimals] = useState<string[]>([])
    const [isDogs, setIsDogs] = useState<boolean>(true)




    function selectChange() {
        console.log('selectChange')
        setIsDogs(!isDogs)
    }
 

    function getDogs() {
        return [ 'Lucky', 'Buddy', 'Max' ]
    }

    function getCats() {
        return [ 'Whiskers', 'Fluffy', 'Mittens' ]
    }

    useEffect(() => {
        setAnimals(isDogs ? getDogs() : getCats())
    }, [isDogs])
    return (
        <div className="Demo">
           <select onChange={selectChange}>
            <option value="dogs">dogs</option>
            <option value="cats">cats</option>
           </select>
           <ul> 
            {animals.map((animal) => (
                <li key={animal}>{animal}</li>
            ))}
           </ul>
        </div>
    )
}