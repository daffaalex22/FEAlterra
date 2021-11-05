import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = ({ component }) => {
    return (
        <div className="navbar align-items-start position-fixed">
            <div class="d-flex align-items-start ">
                <div class="nav flex-column position-sticky nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <Link class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" to="/">Home</Link>
                    <Link class="nav-link" id="v-pills-about-app-tab" data-bs-toggle="pill" data-bs-target="#v-pills-about-app" type="button" role="tab" aria-controls="v-pills-about-app" aria-selected="false" to="/about-app">About App</Link>
                    <Link class="nav-link" id="v-pills-about-author-tab" data-bs-toggle="pill" data-bs-target="#v-pills-about-author" type="button" role="tab" aria-controls="v-pills-about-author" aria-selected="false" to="/about-author">About Author</Link>
                </div>
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">{component}</div>
                    <div class="tab-pane fade" id="v-pills-about-app" role="tabpanel" aria-labelledby="v-pills-about-app-tab">{component}</div>
                    <div class="tab-pane fade" id="v-pills-about-author" role="tabpanel" aria-labelledby="v-pills-about-author-tab">{component}</div>
                </div>
            </div>
        </div >
    );
}

export default Navbar;