import React from 'react';

const FormRow = (props) => {
    return (
        <div className="formrow" key={props.j}>

            <label className="name" style={{ color: "black", family: "Aeonik" }}>{props.name}</label> : <p className="value">{props.value}</p>

        </div>
    );
};

export default FormRow;