import React from 'react';
import "./ShowCourses.css"

const ShowCourses = (props) => {
    const { name,access,lessons, instructor, img, duration, price,totalStudent } = props.course;

    return (
        <div className="col-md-4 mx-auto">
           
            <div className="course mt-5">
                
                <div className="image " >
                    <img className="img-fluid " src={img} alt="" />
                    <div className="bottomright p-2 rounded-start"><span>Price:${price}</span> </div>
                </div>
                <div className="text-start fw-bold mt-3">
                    <h5>Course Name:{name}</h5>
                    <p>Instructor:{instructor}</p>
                    <p>Access:{access}</p>
                    <p>Duration:{duration}</p>
                    <div className="d-flex justify-content-between mt-4">
                    <p>Lessons:{lessons}</p>
                    <p>Enrolled:{totalStudent}</p>
                    </div>
                    <div className=" mx-auto  text-center ">                   
                     <button className="btn btn-warning" >Details</button>
                     </div>

                    

                </div>
            </div>
        </div>
    );
};

export default ShowCourses;