import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ShowHomeCourse from '../ShowHomeCourse/ShowHomeCourse';
import "./Home.css"

const Home = () => {
    const[showCourses,setShowCourses]=useState([]);
    useEffect(()=>{
        fetch('./courseData.JSON')
        .then(res=>res.json())
        .then(data=>setShowCourses(data))
    },[])
    return (
        <div className="container">
             <div className="mb-5"><Header></Header></div>
            <div className="text-center course-title">
            <h2>e-Cademy Learning's Popular Courses</h2>
            <p className="mb-5">Explore all of our courses and pick your suitable ones to enroll and start learning with<br/> us! We ensure that you will never regret it!</p>
            </div>
            <div className="mx-auto container">
                <div className="mx-auto row">
                    <div className="col-md-12">
                        <div className="row">
                    {
                       showCourses.map((showCourse)=>(<ShowHomeCourse
                        key={showCourse.key}
                        showCourse={showCourse}

                        
                        ></ShowHomeCourse>
                    
                           

                       ))
                   }
                  
                   </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;