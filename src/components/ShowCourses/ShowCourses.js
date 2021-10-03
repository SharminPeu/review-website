import React from 'react';
import "./ShowCourses.css"

const ShowCourses = (props) => {
    const {name,instructor,img,Duration,price}=props.course;

    return (
        <div className="course">
            <div >
                <img className="img-fluid " src={img} alt="" />
            </div>
            <div>
<h2>Course Name:{name}</h2>
<h5>Instructor:{instructor}</h5>
<p>Price:${price}</p>
<p>Duration:{Duration}</p>

            </div>
        </div>
    );
};

export default ShowCourses;