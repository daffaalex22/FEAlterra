import { useState, useRef, useEffect } from "react";
import './Form.css'
import Alert from "../../components/Alert/Alert";
import FormAlert from "../../components/FormAlert/FormAlert";

const Form = () => {
    const baseData = {
        name: "",
        email: "",
        phoneNumber: "",
        education: "",
        class: "",
        hopes: ""
    }

    const baseError = {
        name: "",
        email: "",
        phoneNumber: "",
    }

    const commitmentLetter = useRef('')
    const [data, setData] = useState(baseData)
    const [errorMessage, setErrorMessage] = useState(baseError);
    const regexName = /^[A-Za-z ]*$/
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        if (name === 'name') {
            if (!regexName.test(value)) {
                setErrorMessage({ ...errorMessage, [name]: 'Full Name should contain only letters' })
            } else {
                setErrorMessage({ ...errorMessage, [name]: '' })
            }
        }

        if (name === "email") {
            if (!regexEmail.test(value)) {
                setErrorMessage({ ...errorMessage, [name]: 'Email is Wrong' })
            } else {
                setErrorMessage({ ...errorMessage, [name]: '' })
            }
        }

        if (name === "phoneNumber") {
            if (value.length < 9 || value.length > 14) {
                setErrorMessage({ ...errorMessage, [name]: 'Phone Number is Wrong' })
            } else {
                setErrorMessage({ ...errorMessage, [name]: '' })
            }
        }

        setData({
            ...data,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (errorMessage.name !== '' || errorMessage.email !== '' || errorMessage.phoneNumber !== '') {
            // console.log("HEREEE")
            alert(`Registration Data Error`)
        } else {
            // console.log("HEREE1")
            alert(`Registration of "${data.name}" Has been Received`)
            resetForm()
        }
    }

    const resetForm = () => {
        setData(baseData);
        commitmentLetter.current.value = '';
        setErrorMessage(baseError);
    }



    return (
        <div className="container w-50 form">
            <form onSubmit={handleSubmit}>
                <label>
                    Full Name:
                    <br />
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <br />
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange} />
                </label>
                <br />
                <label>
                    Phone Number:
                    <br />
                    <input
                        type="number"
                        name="phoneNumber"
                        value={data.phoneNumber}
                        onChange={handleChange} />
                </label>
                <br />
                <label>
                    Education Background:
                    <br />
                    <input
                        type="radio"
                        name="education"
                        value='IT'
                        onClick={(e) => setData({ education: e.target.value })} />IT
                    <input
                        type="radio"
                        name="education"
                        value='Non-IT'
                        onClick={(e) => setData({ education: e.target.value })} />Non-IT
                </label>
                <br />
                <label>
                    Choose a Programming Class:
                    <br />
                    <select name="class" id="" onChange={handleChange}>
                        <option value="golang">Coding Backend with Golang</option>
                        <option value="reactjs">Coding Frontend with ReactJS</option>
                        <option value="fullstack">Fullstack Developer</option>
                    </select>
                </label>
                <br />
                <label>
                    Scan of Your Commitment Letter:
                    <br />
                    <input
                        type="file"
                        ref={commitmentLetter} />
                </label>
                <br />
                <label>
                    What do you expect from this Coding Bootcamp?
                    <br />
                    <textarea
                        name="hopes"
                        id=""
                        value={data.hopes}
                        cols="30"
                        rows="10"
                        onChange={handleChange} />
                </label>
                <br />
                <ul>
                    {Object.keys(errorMessage).map(key => {
                        if (errorMessage[key] !== "") {
                            return <li key={key}>{errorMessage[key]}</li>
                        }
                        return null
                    })}
                </ul>
                <br />
                <button type="submit">Submit</button>
                <button type="reset" value="reset">Reset</button>
            </form >
        </div >
    );
}

export default Form;