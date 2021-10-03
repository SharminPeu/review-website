import React, { useEffect, useState } from 'react';
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
            <MenuBar></MenuBar>
           <div className="row">
               <div className="col-md-12">
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
    );
};

export default Courses;