import dots from '../../img/img-dot@2x.png'
import birumuda2 from '../../img/birumuda_2.png'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import './ReviewMessage.css'

const ReviewMessage = () => {

    const getLocalStorage = () => {
        let data = localStorage.getItem('data');
        if (data) {
            return (data = JSON.parse(localStorage.getItem('data')));
        } else {
            return [];
        }
    };

    const [data, setData] = useState(getLocalStorage())

    return (
        <div className="review-message">
            <div id="BOT" className="">
                <img id="DOTS" className="img-fluid" src={dots} alt="Dots" />
                <img id="FOOTIM" className="img-fluid align-middle" src={birumuda2} alt="Warna Biru Muda" />

            </div>
            <div className="container-fluid bg-light" id="BOX">

                <p className="m-0">Full Name<span id="span1">: </span> {data.fullname}</p>
                <p className="m-0">Email Address<span id="span2">: </span> {data.email}</p>
                <p className="m-0">Phone Number<span id="span3">: </span> {data.phone}</p>
                <p>Nationality<span id="span4">: </span> {data.nationality}</p>

                <p id="MSG">
                    {data.message}
                </p>

                <br /><br /><br />

                <p className="fs-5 m-0">Thanks for contacting us!</p>
                <p className="fs-5">We will be in touch with you shortly.</p>

                <Link to="/">
                    <button
                        type="button"
                        className="btn btn-primary btn-md rounded-pill"
                        id="BUT"
                    >Home
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default ReviewMessage;