import React from 'react';


const About = () => {
    return (
        <div className="row my-5 container mx-auto ">
            <div className="col-md-5">
<img className="img-fluid" src="https://www.pgc.edu/wp-content/uploads/2021/03/Online-Programming-Courses.jpg" alt="" />
            </div>
        <div className="col-md-7 text-start">
        <p className="mt-5 fs-4 fw-bold text-start">Develop Your Skills, Learn Something New, and Grow <br/> Your Skills From Anywhere in the World!</p>
        <small className="mt-3 ">We understand better that online-based learning can make a significant change to reach students<br/> from all over the world! Giving options to learn better always can offer the best outcomes!</small>
        
        <div className="my-5 text-danger">
            <h2 className="fst-italic">You can get here </h2>
            <ul>
                <li>Expert Instructors</li>
                <li>Lifetime Access</li>
                <li>Remote Learning</li>
                <li>Self Development</li>
            </ul>
    
            </div>
            <button className="text-dark fw-normal btn btn-warning mb-5">View Courses</button>
        </div>
           
        </div>

    );
};

export default About;