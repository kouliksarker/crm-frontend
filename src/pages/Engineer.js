import Sidebar from "../Components/Sidebar"
import React from "react"
function Engineer() {
    return (
        <div className="bg-light">
            <div className="col-1"><Sidebar home='/' /></div>
            <div className="container vh-100">
                <h3 className="text-primary text-center">Welcome { localStorage.name}</h3>
                <p className="text-muted text-centre">Take a look at your dashboard</p>
            </div>
        </div>
    )
}

export default Engineer