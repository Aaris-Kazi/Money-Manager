import { Link } from 'react-router';
import { IoIosAddCircleOutline } from "react-icons/io";
import smallIcon from '../icons/smallIcon.png'

import './css/style.css'
const LandingPage = () => {
    return (
        <div className='container index d-flex justify-content-center align-items-center'>
            <div className='row'>
                <div className="col">

                    <img src={smallIcon} alt="icon" className='smallIcon' />
                    <br />
                    <span className='h2'>Welcome to Budget planner</span>
                    <br />
                    <span >Start adding your budget</span>
                    <br />

                    <Link className='link' to={"dashboard"}>
                        <button type="button" className='btn btn-primary'>
                            <IoIosAddCircleOutline className='addIcon' size={32} />
                            Start Adding
                        </button>
                    </Link>
                </div>

                <div className="row fixed-bottom" >
                    <span className="h5">IZAK Web Studio</span>
                </div>
            </div>
        </div>

    )
}

export default LandingPage