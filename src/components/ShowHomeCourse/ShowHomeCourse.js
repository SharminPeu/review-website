import React from 'react';
import "./ShowHomeCourse.css"

const ShowHomeCourse = (props) => {
    const { name, access,instructor, img,lessons,totalStudent, duration, price } = props.showCourse;

    return (
        <div className="mx-auto col-md-6">
            <div className="course">
                <div className="image" >
                    <img className="img-fluid " src={img} alt="" />
                    <div className="bottomright p-2 rounded-start"><span>Price:${price}</span> </div>

                </div>
                <div className="text-start  mt-3">
                    <h5 className="fw-bold">Course Name:{name}</h5>
                    <h5>Instructor:{instructor}</h5>
                   
                    <p>Access:{access}</p>
                    <p>Duration:{duration}</p>
                    <div className="d-flex justify-content-between mt-5">
                    <p>Lessons:{lessons}</p>
                    <p>Enrolled:{totalStudent}</p>
                    </div>

                </div>
        </div>
        </div>
    
        
    );
};

export default ShowHomeCourse;