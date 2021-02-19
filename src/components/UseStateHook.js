import React, { useState } from 'react';
import Person from '../Person/Person';

const LearnUseStateHook = () => {
    const [personState, setPersonsState] = useState({
      persons: [
        {name: 'Tushar', age:29},
        {name: 'Anshdeep', age:28},
      ]
    });

    const [courseState, setCourseState] = useState({
        courses: [
          {name: 'React', year:2021},
          {name: 'Javascript', year:2021},
        ]
      });

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {name: 'Tushar Jagtap', age:29},
                {name: 'Anshdeep Chawla', age:28},
              ]
        });
    }

    return (
      <div className="App">
        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person name={personState.persons[1].name} age={personState.persons[1].age} />
        <button onClick={switchNameHandler}>Switch bio</button>
      </div>
    );
}

export default LearnUseStateHook;
