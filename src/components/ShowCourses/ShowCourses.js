import React from 'react';
import "./ShowCourses.css"
// Show all Courses in Course section
const ShowCourses = (props) => {
    const { name, access, lessons, instructor, img, duration, price, totalStudent } = props.course;

    return (
        <div className="col-md-4 mx-auto">

            <div className="course mt-5">

                <div className="image " >
                    <img className="img-fluid " src={img} alt="" />
                    <div className="bottomright p-2 rounded-start"><span>Price:${price}</span> </div>
                </div>
                <div className="text-start fw-bold">

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
        </div>
    );
};

export default ShowCourses;