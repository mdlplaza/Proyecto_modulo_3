import { Link } from "react-router-dom";

function Menu(props) {
    return (
        <div>
            <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" id="mySidebar"><br></br>
               <hr />
                <div className="w3-container">
                    <h5>Dashboard</h5>
                </div>
                <div className="w3-bar-block">
                    <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" title="close menu"><i className="fa fa-remove fa-fw"></i>Close Menu</a>
                    <Link className="w3-bar-item w3-button w3-padding" to="/salud"><i className="fa fa-users fa-fw"></i>Salud</Link>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw"></i>Alimentación</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-cog fa-fw"></i> Incidencias</a><br /><br />
                </div>
            </nav>
        </div>
    );
}

export default Menu;