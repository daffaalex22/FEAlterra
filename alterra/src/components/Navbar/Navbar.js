import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaMinus, FaBars } from 'react-icons/fa';

const Navbar = ({ component, tab, openNav, closeNav, navIsOpen, pageStyle }) => {
    return (
        <div className="navbar align-items-start">
            <div className="d-flex align-items-start ">
                {navIsOpen &&
                    <div className="sidebar">
                        <button className="btn close-btn position-fixed" onClick={closeNav}>
                            <FaMinus className="close-icon position-fixed justify-content-end" />
                        </button>
                        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                            <Link className={`btn btn-outline-primary ${tab}-btn nav-link ${tab == 'home' ? 'active' : ''}`}
                                id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button"
                                role="tab" aria-controls="v-pills-home" to="/">Home</Link>
                            <Link className={`btn btn-outline-primary ${tab}-btn nav-link ${tab == 'about-app' ? 'active' : ''}`}
                                id="v-pills-about-app-tab" data-bs-toggle="pill" data-bs-target="#v-pills-about-app" type="button"
                                role="tab" aria-controls="v-pills-about-app" to="/about-app">About App</Link>
                            <Link className={`btn btn-outline-primary ${tab}-btn nav-link ${tab == 'about-author' ? 'active' : ''}`}
                                id="v-pills-about-author-tab" data-bs-toggle="pill" data-bs-target="#v-pills-about-author" type="button"
                                role="tab" aria-controls="v-pills-about-author" to="/about-author">About Author</Link>
                        </div>
                    </div>
                }
                <div className={`tab-content tab-content-${tab}`} id="v-pills-tabContent" style={pageStyle}>
                    <div className=" tab-pane fade show active" id="v-pills-home"
                        role="tabpanel" aria-labelledby="v-pills-home-tab">
                        {!navIsOpen &&
                            <button className="btn bar-btn position-fixed" onClick={openNav}>
                                <FaBars className="bar-icon position-fixed justify-content-end" />
                            </button>
                        }
                        {component}</div>
                    <div className="tab-pane fade" id="v-pills-about-app"
                        role="tabpanel" aria-labelledby="v-pills-about-app-tab">{component}</div>
                    <div className="tab-pane fade" id="v-pills-about-author"
                        role="tabpanel" aria-labelledby="v-pills-about-author-tab">{component}</div>
                </div>
            </div>
        </div >
    );
}

export default Navbar;