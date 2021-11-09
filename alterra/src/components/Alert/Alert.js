import './Alert.css'

const Alert = ({ msg, type }) => {
    console.log("masuk alert")
    return (
        < div className={`alert alert-${type}`
        } > {msg}</div >
    );
}

export default Alert;