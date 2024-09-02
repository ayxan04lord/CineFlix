import { NavLink } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return(
        <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7 px-0">
            <div className="menu d-flex justify-content-center align-items-center">
                <ul>
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to="/hollywood">Hollywood Movies</NavLink></li>
                    <li><NavLink to="/korean">Korean</NavLink></li>
                    <li><NavLink to="/chinese">Chinese</NavLink></li>
                    <li><NavLink to="/japanese">Japanese</NavLink></li>
                    <li><NavLink to="/turkish">Turkish</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;
