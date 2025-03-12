import React from "react";

export function Card(props) {
    const src = props.src; 
    const body = props.body;
    const title = props.title;

    return (
        <div className="card">
            <div className="card-body">
                <img src={src}/>
            </div>
        </div>
    );

}



