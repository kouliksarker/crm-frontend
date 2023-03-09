
import { useNavigate } from "react-router-dom";
import not from '../Assets/error-403.jpg'
import React from "react";
const Unauthorized = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    return (
        <section className="bg-light vh-100 d-flex justify-content-center align-items-center text-center">
            <div>
                <h1>Not Found</h1>
                <img src={not} alt="Unauthorized" width={"400px"} />
                <br />
                <p>You do not have access to the required page.</p>
                <div className="flexGrow">
                    <button className="btn btn-primary" onClick={goBack}>Go Back</button>
                </div>
            </div>
        </section>
    )
}
export default Unauthorized