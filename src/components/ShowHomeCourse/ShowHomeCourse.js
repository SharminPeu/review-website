import React from 'react';
import "./ShowHomeCourse.css"
// show courses for home section 
const ShowHomeCourse = (props) => {
    const { name, access, instructor, img, lessons, totalStudent, duration, price } = props.showCourse;

    return (
        <div className="mx-auto col-md-6 my-5">
            <div className="course card ">
                <div className="image" >
                    <img className="img-fluid " src={img} alt="" />
                    <div className="bottomright p-2 rounded-start"><span>Price:${price}</span> </div>

                </div>
                <div className="text-start  mt-3">
                    <h5 className="fw-bold">Course Name:{name}</h5>
                    <p> <span className="text-secondary fw-bold ">Instructor: </span><span className="fw-bold text-primary">{instructor}</span> </p>

                    <p> <span className="text-secondary fw-bold ">Access:</span> <span className="text-primary fw-bold">{access}</span></p>
                    <p><span className="text-secondary fw-bold ">Duration: </span><span className="text-primary fw-bold">{duration}</span></p>
                    <div className="d-flex justify-content-between mt-5">
                        <p><span className="text-secondary fw-bold ">Lessons:</span><span className="text-secondary fw-bold">{lessons}</span></p>
                        <p><span className="text-secondary fw-bold ">Enrolled:</span><span className="text-secondary fw-bold">{totalStudent}</span></p>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-warning ">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowHomeCourse;