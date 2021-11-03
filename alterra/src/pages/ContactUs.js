import '../ContactUs.css'
import logoAlta from '../img/logo-ALTA-v2@2x.png'
import workingPeople from '../img/charles-rRWiVQzLm7k-unsplash.jpg'
import darkBlue from '../img/birutua.png'

const ContactUs = () => {
    return (
        <div className="contactUs">
            <div class="d-inline-block align-middle" id="IMG">
                <img class="d-inline-block img-fluid align-middle position-absolute" id="BT" src={darkBlue} alt="Dark Blue" />
                <img class="d-inline-block img-fluid align-middle" src={workingPeople} alt="Working People" />
                <img class="d-inline-block img-fluid align-middle position-absolute" id="ALTA" src={logoAlta}
                    alt="Logo ALTA" />
            </div>
            <div class="d-inline-block align-top" id="FORM">
                <h3>Contact Us</h3>
                <form class="needs-validation" novalidate>
                    <div class="form-group">
                        <label for="FullName">Full Name<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="FullName" name="fullname"
                            placeholder="Your Full Name Here..." required />
                        <div class="invalid-feedback">
                            Full name cannot be empty
                        </div>
                    </div><br />
                    <div class="form-group">
                        <label for="Email">Email Address<span class="text-danger">*</span></label>
                        <input type="email" class="form-control" id="Email" name="email" placeholder="example@domain.com"
                            required />
                        <div class="invalid-feedback">
                            Email address cannot be empty
                        </div>
                    </div><br />
                    <div class="form-group">
                        <label for="Phone">Phone Number<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="Phone" name="phone" placeholder="08573890xxxxx" required />
                        <div class="invalid-feedback">
                            Phone Number cannot be empty
                        </div>
                    </div><br />
                    <div>
                        <label for="nationality">Nationality</label>
                        <select class="form-select" aria-label="Default select example" id="nationality" name="nationality">
                            <option selected>Selected</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Indonesian">Indonesian</option>
                            <option value="Russian">Russian</option>
                        </select>
                    </div><br />
                    <div>
                        <label for="msg">Message</label> <br />
                        <textarea name="message" id="msg" cols="65" rows="5" placeholder="Enter Message Here..."></textarea>
                    </div><br />
                    <button type="submit" class="btn btn-primary btn-md rounded-pill" id="SUB" value="Submit"
                        formaction="review_message.html" formtarget="_blank">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;