import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import ShowCourses from '../ShowCourses/ShowCourses';

const Courses = () => {
const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('./fakeData.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div>
            {/* <MenuBar></MenuBar> */}
           <div className="row mt-5">
               <div className="col-md-12 mt-5">
               <h2>More Course List of <span className="text-primary">e-Cademy Learning</span>... </h2>
                   <div className="row">
                   {
                       courses.map((course)=>(<ShowCourses
                        key={course.key}
                        course={course}

                        
                        ></ShowCourses>
                           

                       ))
                   }
               </div>
               </div>
           </div>
           <Footer></Footer>
        </div>
        
    );
};

export default Courses;