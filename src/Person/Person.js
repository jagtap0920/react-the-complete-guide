import React from 'react';

// children: is a reserved keyword
const person = (props) => {
    return (
        <div>
            <p> I'm {props.name} and {props.age} old.</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;