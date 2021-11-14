
import myAva from '../../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';
import './Home.css';

import Header from '../../components/Header/Header';
import { useState, useEffect } from 'react';

const Home = () => {
    // const today = new Date();
    // const [date, setDate] = useState(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds())
    const [time, setTime] = useState(null)
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [])



    return (
        <div className="home">
            <Header />
            <div className="mt-5 bg-image rounded-top" id="BG">
                <div className="d-inline-block align-middle" id="PART">
                    <img className="img-fluid rounded-circle" src={myAva} alt="#"
                        style={{ width: 30 + 'vw' }} />
                </div>

                <div className="d-inline-block ps-5 align-middle pt-5" id="PART">
                    <div>
                        <p>{time}</p>
                        <h5>Hi, my name is</h5>
                        <h1>Anne Sulivan</h1>
                        <h3>I build things for the web</h3>
                        <button type="button" className="btn btn-primary btn-lg rounded-pill" id="GIT">Get In Touch</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;