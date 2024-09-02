import Logo from './logo/Logo';
import Menu from './menu/Menu';
import Search from './search/Search';

import './Navbar.css'


export const Navbar = () => {
    return (
        <div className="col-xs-12 col-sm-12 px-0">
            <div className="c_navbar">
                <div className="row g-0">
                    <Logo />
                    <Menu/>
                    <Search/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;




