import './NotFound.css'
import { UndrawNotFound, UndrawNoData } from 'react-undraw-illustrations'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="not-found container w-50">
            <p className="no-data">
                Page Not Found :(
            </p>
            <UndrawNoData
                primaryColor='#75FA73'
                height='35vh' />

            <Link className='btn btn-outline-primary' to="/">Back to Home</Link>
        </div>
    );
}

export default NotFound;