import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div key={props.key} className="card col-3 p-2" style={{ width: "18rem" }}>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    Contient : {props.contient} 
                </p>
                <Link  className="btn btn-primary">
                    Regarde Plus
                </Link>
            </div>
        </div>
    );
};

export default Card;
