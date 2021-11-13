import './ContactUs.css'
import logoAlta from '../../img/logo-ALTA-v2@2x.png'
import workingPeople from '../../img/charles-rRWiVQzLm7k-unsplash.jpg'
import darkBlue from '../../img/birutua.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

const ContactUs = () => {

    const history = useHistory();

    const [noErr, setNoErr] = useState(false)
    const [noError, setNoError] = useState({
        fullname: true,
        email: true,
        phone: true
    })

    const handleFocus = (e) => {
        setNoError((prevState) => ({
            ...prevState,
            [e.target.name]: true
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        var forms = e.target
        Array.prototype.slice.call(forms)
            .forEach((form) => {
                if (!form.value) {
                    if (form.name === "fullname" || form.name === "email" || form.name === "phone") {
                        setNoError((prevState) => ({
                            ...prevState,
                            [form.name]: false
                        }))
                        setNoErr(false)
                    }
                } else {
                    if (form.name === "fullname" || form.name === "email" || form.name === "phone") {
                        setNoError((prevState) => ({
                            ...prevState,
                            [form.name]: true
                        }))
                        if (noError.fullname && noError.email && noError.phone) {
                            setNoErr(noError.fullname && noError.email && noError.phone)
                        }
                    }
                }
            })

        console.log(noError)
        console.log(noErr)
        if (noErr) {
            history.push('/review-message')
        }
    }

    return (
        <div className="contact-us">
            <div className="d-inline-block align-middle" id="IMG">
                <img className="d-inline-block img-fluid align-middle position-absolute" id="BT" src={darkBlue} alt="Dark Blue" />
                <img className="d-inline-block img-fluid align-middle" src={workingPeople} alt="Working People" />
                <img className="d-inline-block img-fluid align-middle position-absolute" id="ALTA" src={logoAlta}
                    alt="Logo ALTA" />
            </div>
            <div className="d-inline-block align-top" id="FORM">
                <h3>Contact Us</h3>
                <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="FullName">Full Name<span className="text-danger">*</span></label>
                        <input type="text" className={`form-control error-${!noError.fullname}`} onFocus={handleFocus} id="FullName" name="fullname"
                            placeholder="Your Full Name Here..." />
                        {!noError.fullname &&
                            <div className="error-message ">
                                Full name cannot be empty
                            </div>
                        }
                    </div><br />
                    <div className="form-group">
                        <label htmlFor="Email">Email Address<span className="text-danger">*</span></label>
                        <input type="email" className={`form-control error-${!noError.email}`} onFocus={handleFocus} id="Email" name="email" placeholder="example@domain.com"
                        />
                        {!noError.email &&
                            <div className="error-message ">
                                Email address cannot be empty
                            </div>
                        }
                    </div><br />
                    <div className="form-group">
                        <label htmlFor="Phone">Phone Number<span className="text-danger">*</span></label>
                        <input type="text" className={`form-control error-${!noError.phone}`} onFocus={handleFocus} id="Phone" name="phone" placeholder="08573890xxxxx" />
                        {!noError.phone &&
                            <div className="error-message ">
                                Phone Number cannot be empty
                            </div>
                        }
                    </div><br />
                    <div>
                        <label htmlFor="nationality">Nationality</label>
                        <select className="form-select" aria-label="Default select example" id="nationality" name="nationality" defaultValue="Indonesian">
                            <option value="Chinese">Chinese</option>
                            <option value="Indonesian">Indonesian</option>
                            <option value="Russian">Russian</option>
                        </select>
                    </div><br />
                    <div>
                        <label htmlFor="msg">Message</label> <br />
                        <textarea name="message" id="msg" cols="65" rows="5" placeholder="Enter Message Here..."></textarea>
                    </div><br />
                    <button
                        type="submit"
                        className="btn btn-primary btn-md rounded-pill"
                        id="SUB"
                        value="Submit"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </div >
    );
}

export default ContactUs;