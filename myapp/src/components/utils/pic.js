import React from 'react';

const Pic = (props) => {
    return (
        <div >
             <img style={{border:"2px solid black"}} className="img-responsive img-rounded" src={props.image} alt={props.text} width="200px" height="200px"/> 
        </div>
    );
};

export default Pic;