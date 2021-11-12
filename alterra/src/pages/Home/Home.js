import logoAlta from '../../img/logo-ALTA.png';
import myAva from '../../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-white pb-0">
                    <div class="container-fluid shadow-sm ps-4 pb-3">
                        {/* <a class="navbar-brand ms-5" href="#"> */}
                        <Link class="navbar-brand ms-5" to="/">
                            <img src={logoAlta} alt="logo-ALTA" />
                        </Link>
                        {/* </a> */}
                        <ul class="navbar-nav justify-content-end">
                            <li class="nav-item ms-2">
                                <Link class="nav-link active" aria-current="page" id="HOME">HOME</Link>
                            </li>
                            <li class="nav-item ms-2">
                                <Link class="nav-link text-dark">ABOUT</Link>
                            </li>
                            <li class="nav-item ms-2">
                                <Link class="nav-link text-dark">NEWS</Link>
                            </li>
                            <li class="nav-item ms-2 me-5">
                                <Link class="nav-link text-dark" to="/contact-us">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div class="bg-image rounded-top" id="BG">
                <div class="d-inline-block align-middle" id="PART">
                    <img class="img-fluid rounded-circle" src={myAva} alt="#"
                        style={{ width: 30 + 'vw' }} />
                </div>

                <div class="d-inline-block ps-5 align-middle pt-5" id="PART">
                    <div>
                        <h5>Hi, my name is</h5>
                        <h1>Anne Sulivan</h1>
                        <h3>I build things for the web</h3>
                        <button type="button" class="btn btn-primary btn-lg rounded-pill" id="GIT">Get In Touch</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;