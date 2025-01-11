import React from "react";
import { useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import { ActionDeletePays } from "../Redux/type";
import DetailPaye from "./DetailPaye";

const Card = (props) => {
    const dispatch = useDispatch()
    const handelDelete = (id) => {
        if (window.confirm(`Are You sure delete ${props.name}`)) {
            dispatch(ActionDeletePays(id))
        }
    }
    return (
        <>
            <div key={props.key} className="card col-3 m-2" style={{ width: "18rem" }}>
                <img src={props.image} style={{ height: '10rem' }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">
                        <span className="text-info fw-800"> Contient :</span> {props.contient}
                    </p>
                    <div className="d-flex gap-3">
                        <Link to={`/showPay/${props.id}`}  className="btn btn-primary">
                            Regarde Plus
                        </Link>

                        <button onClick={() => handelDelete(props.id)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
       
        </>
    );
};

export default Card;
