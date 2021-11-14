import logoAlta from '../../img/logo-ALTA.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <header className="position-fixed w-100 top-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-white pb-0">
                    <div className="container-fluid shadow-sm ps-4 pb-3">
                        {/* <a className="navbar-brand ms-5" href="#"> */}
                        <Link className="navbar-brand ms-5" to="/">
                            <img src={logoAlta} alt="logo-ALTA" />
                        </Link>
                        {/* </a> */}
                        <ul className="navbar-nav justify-content-end">
                            <li className="nav-item ms-2">
                                <Link className="nav-link active" aria-current="page" id="HOME" to="/">HOME</Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link className="nav-link text-dark">ABOUT</Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link className="nav-link text-dark" to="/news">NEWS</Link>
                            </li>
                            <li className="nav-item ms-2 me-5">
                                <Link className="nav-link text-dark" to="/contact-us">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;