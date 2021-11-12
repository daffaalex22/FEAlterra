import './ContactUs.css'
import logoAlta from '../../img/logo-ALTA-v2@2x.png'
import workingPeople from '../../img/charles-rRWiVQzLm7k-unsplash.jpg'
import darkBlue from '../../img/birutua.png'
import { useState } from 'react'

const ContactUs = () => {

    // var hasError = {}
    const [hasError, setHasError] = useState({
        fullname: false,
        email: false,
        phone: false
    })
    const handleSubmit = (e) => {
        e.preventDefault()

        var forms = e.target
        Array.prototype.slice.call(forms)
            .forEach((form) => {
                if (!form.value) {
                    setHasError((prevState) => ({
                        ...prevState,
                        [form.name]: true
                    }))
                } else {
                    setHasError((prevState) => ({
                        ...prevState,
                        [form.name]: false
                    }))
                }
            })
        console.log(hasError)
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
                        <input type="text" className={`form-control error-${hasError.fullname}`} id="FullName" name="fullname"
                            placeholder="Your Full Name Here..." />
                        {/* <div className="invalid-feedback">
                            Full name cannot be empty
                        </div> */}
                        {hasError.fullname &&
                            <div className="error-message ">
                                Full name cannot be empty
                            </div>
                        }
                    </div><br />
                    <div className="form-group">
                        <label htmlFor="Email">Email Address<span className="text-danger">*</span></label>
                        <input type="email" className={`form-control error-${hasError.email}`} id="Email" name="email" placeholder="example@domain.com"
                        />
                        {/* <div className="invalid-feedback ">
                            Email address cannot be empty
                        </div> */}
                        {hasError.email &&
                            <div className="error-message ">
                                Email address cannot be empty
                            </div>
                        }
                    </div><br />
                    <div className="form-group">
                        <label htmlFor="Phone">Phone Number<span className="text-danger">*</span></label>
                        <input type="text" className={`form-control error-${hasError.phone}`} id="Phone" name="phone" placeholder="08573890xxxxx" />
                        {/* <div className="invalid-feedback">
                            Phone Number cannot be empty
                        </div> */}
                        {hasError.phone &&
                            <div className="error-message ">
                                Phone Number cannot be empty
                            </div>
                        }
                    </div><br />
                    <div>
                        <label htmlFor="nationality">Nationality</label>
                        <select className="form-select" aria-label="Default select example" id="nationality" name="nationality" defaultValue="Indonesian">
                            {/* <option selected>Selected</option> */}
                            <option value="Chinese">Chinese</option>
                            <option value="Indonesian">Indonesian</option>
                            <option value="Russian">Russian</option>
                        </select>
                    </div><br />
                    <div>
                        <label htmlFor="msg">Message</label> <br />
                        <textarea name="message" id="msg" cols="65" rows="5" placeholder="Enter Message Here..."></textarea>
                    </div><br />
                    <button type="submit" className="btn btn-primary btn-md rounded-pill" id="SUB" value="Submit"
                    >Submit</button>
                </form>

            </div>
        </div>
    );
}

export default ContactUs;