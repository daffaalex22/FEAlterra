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
        education: "",
        class: "",
        commitmentLetter: ''
    }

    const commitmentLetter = useRef(null)
    const [data, setData] = useState(baseData)
    const [errorMessage, setErrorMessage] = useState(baseError)
    const [alert, setAlert] = useState({ field: '', msg: '', type: '' })
    const [alertList, setAlertList] = useState([])
    const [hasError, setHasError] = useState(false)
    const [array, setArray] = useState([]);
    const prefArray = useRef()

    useEffect(() => {
        prefArray.current = array;
    }, [array])

    const prefArr = prefArray.current;

    let angka = [1];
    angka.forEach((item) => {
        // setArray(item);
        console.log(item)
    })
    console.log("array state:", array)

    // console.log(alertList)
    // useEffect(() => {
    //     if (alert.msg) {
    //         setAlertList([...alertList, alert])
    //     }
    // }, [alert])

    useEffect(() => {
        if (alertList.length > 0) {
            setHasError(true)
        } else {
            setHasError(false)
        }
    }, [alertList])

    // const showAlert = (field, msg, type) => {
    //     setAlert({
    //         field: field,
    //         msg: msg,
    //         type: type
    //     })
    // }

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setData({
            ...data,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target[0].value)
        var form = e.target;
        // console.log(typeof form);
        // console.log(Object.keys(form));
        // console.log(Object.values(form));
        var elements = Object.values(form);
        // elements.forEach((item) => console.log(item.name));
        // form.forEach((item) => console.log(item));
        // elements.forEach((item) => {
        //     if (item.name == 'name') {
        //         // showAlert(item.name, 'Full Name must be filled!', 'danger')
        //         setAlertList([...alertList, {
        //             field: item.name,
        //             msg: 'Full Name must be filled!',
        //             type: 'danger'
        //         }])
        //         console.log('name empty')
        //     }
        //     else if (item.name == 'email') {
        //         // showAlert(item.name, 'Email must be filled!', 'danger');
        //         setAlertList([...alertList, {
        //             field: item.name,
        //             msg: 'Email must be filled!',
        //             type: 'danger'
        //         }])
        //         console.log('email empty')
        //     }
        //     else if (item.name == 'phoneNumber') {
        //         // showAlert(item.name, 'Phone Number must be filled!', 'danger');
        //         console.log('phone number empty')
        //     }
        // })
    }



    return (
        <div className="container w-50 form">
            <form onSubmit={handleSubmit} noValidate>
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
                {hasError &&
                    <div>Ada Errornya</div>
                    // <FormAlert alertList={alertList} />
                }
                {console.log(alertList)}
                <button type="submit">Submit</button>
                <button type="reset" value="reset">Reset</button>
            </form >
        </div >
    );
}

export default Form;