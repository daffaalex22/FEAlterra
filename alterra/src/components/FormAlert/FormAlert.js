import Alert from "../Alert/Alert";

const FormAlert = ({ alertList }) => {
    return (
        <div className="form-alert">
            {alertList.map((alert) => {
                { console.log("Masuk form-alert") }
                <Alert msg={alert.msg} type={alert.type} />
            })}
        </div>
    );
}

export default FormAlert;