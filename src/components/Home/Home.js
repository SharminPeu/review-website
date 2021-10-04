import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import ShowHomeCourse from '../ShowHomeCourse/ShowHomeCourse';
// import Header from '../Header/Header';

const Home = () => {
    const[showCourses,setShowCourses]=useState([]);
    useEffect(()=>{
        fetch('./courseData.JSON')
        .then(res=>res.json())
        .then(data=>setShowCourses(data))
    },[])
    return (
        <div>
            {/* <MenuBar></MenuBar> */}
            <div className="text-center mt-5">
            <h2>e-Cademy Learning's Popular Courses</h2>
            <p>Explore all of our courses and pick your suitable ones to enroll and start learning with<br/> us! We ensure that you will never regret it!</p>
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
            <Footer></Footer>
        </div>
    );
};

export default Home;