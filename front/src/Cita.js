
import { useState } from 'react';
import './cita.css';
import { useHistory } from "react-router-dom";

function Cita(props) {
    const history = useHistory();

    const handleClick = (event) => {
        fetch("http://localhost:3000/api/cita", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cita),
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                //meter enlace cuando das al handleClick
                history.push("/salud");

            });
    }


    const [cita, setCita] = useState({
        descripcion: '',
        fecha: '',
        precio: ''
    });

    const changeInputValueInState = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        // Con esto modifico el objecto cita del useState, [name] es para que dinamicamente coja la propiedad
        // a modificar (descripcion, fecha o precio)
        setCita({ ...cita, [name]: value });
    }


    return (
        <div className="w3-main">
            <div className="w3-container">
                <div className="form">
                    <h5>En la próxima cita</h5>
                    <input type="text" placeholder="descripcion" name="descripcion" onChange={changeInputValueInState} value={cita.descripcion}></input>
                    <input type="datetime-local" placeholder="fecha" name="fecha" onChange={changeInputValueInState} value={cita.fecha}></input>
                    <input type="text" placeholder="precio" name="precio" onChange={changeInputValueInState} value={cita.precio}></input>
                    <button onClick={handleClick}>Añadir</button>
                </div>
            </div>
        </div>
    );
}

export default Cita;