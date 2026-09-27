import './Demo.css';
export default function Demo() {

    const name = 'John';
    const age = 20;
    const isStudent = true;

    const students = ['Omar', 'Lima', 'Pima'];

    function sayHi (): string {
        return 'Hi';
    }

    function isChild() : boolean {
        return age < 18;
    }

    const animals = [
        {type: 'dog', name: 'Lucky'},
        {type: 'cat', name: 'Whiskers'},
        {type: 'bird', name: 'Tweetie'},
        {type: 'fish', name: 'Goldie'},
        {type: 'rabbit', name: 'Fluffy'},
        {type: 'snake', name: 'Slinky'},
        {type: 'tiger', name: 'Tigger'},
        {type: 'lion', name: 'Simba'},
        {type: 'elephant', name: 'Dumbo'},
        {type: 'giraffe', name: 'Gigi'},
    ]

    return (
        <div className="Demo">
        <p>Hello {name}!</p>
        <p>You are {age} years old.</p>
        <p>You are a student: {isStudent ? 'Yes' : 'No'}.</p>
        <div>Students: 
            <ul>
              {students.map(student => <li key={student}>{student}</li>)}
            </ul>
        </div>
        <p>{sayHi()}</p>
        <p>You are a child: {isChild() ? 'Yes' : 'No'}.</p>
        <div>Animals:
            <ul>
                {animals.map(animal => <li key={animal.name}>{animal.name} is a {animal.type}</li>)}
            </ul>
        </div>
        </div>
    );  
}