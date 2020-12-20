import Cita from "./Cita.js";
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';

function Salud(props) {


    const [citas, setCitas] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/api/cita")
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                setCitas(datos)
            });
    }, []);


    return (
        <div class="w3-main w3-light-grey">
            <div class="w3-container">
                <h5>Salud</h5>
                <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                    <thead>
                        <th>Descripción</th>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </thead>

                    {
                        citas.map((cita) => {
                            return <tr>
                                <td>{cita.descripcion}</td>
                                <td>{cita.fecha}</td>
                                <td>{cita.precio}</td>
                            </tr>
                        })
                    }

                </table><br />
                <Link to="./Cita"><button class="w3-button w3-dark-grey"  >Añadir cita <i class="fa fa-arrow-right"></i></button></Link>
            </div>
        </div >

    );
}

export default Salud;