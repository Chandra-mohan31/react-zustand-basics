import React from 'react';
import useCourseStore from '../app/courseStore';
import "../App.css";
const CourseList = () => {
    const {courses,removeCourse,toggleCourseStatus} = useCourseStore(
        (state)=>({
            courses: state.courses,
            removeCourse: state.removeCourse,
            toggleCourseStatus: state.toggleCourseStatus
        })
    )
  return (
    <>
    <ul>
        {courses.map((course,i)=>(
            <React.Fragment key={i}>
                <li className={`course-item`} style={{
                    backgroundColor: course.completed ? "green" : "black"
                }}>
                    <span className="course-item-col-1">
                        <input checked={course.completed} onChange={(e)=>{
                            toggleCourseStatus(course.id)
                        }} type="checkbox" />
                    </span>
                    <span>
                        {course?.title}
                    </span>
                    <button onClick={()=>{
                        removeCourse(course.id)
                    }} className='delete-btn'>
                        Delete
                    </button>
                </li>
            </React.Fragment>
        ))}
    </ul>

    </>
  )
}

export default CourseList