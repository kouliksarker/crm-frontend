import { useNavigate } from 'react-router-dom'
import NOT_FILE_NAME from '../Assets/error-404.jpg'
import React from 'react'

const NotFound = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    return (
        <section className='bg-light vh-100 d-flex justify-content-center align-items-center text-center'>
            <div>
                <h1>Not Found</h1>
                <img src={NOT_FILE_NAME} alt="Not Found" width={"400px"}/>
                <br />
                <p>Page is not available.</p>
                <div className='flexGrow'>
                    <button className='btn btn-primary' onClick={goBack}>Go Back</button>
                </div>
            </div>
        </section>
    )
}

export default NotFound