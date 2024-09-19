import React from 'react';
import coursesData from '../Data/courses.json'; 
import CourseCard from '../Components/CourseCard';
import '../Styles/Courses.css';

const Courses = () => {
  return (
    <section className="course-page" style={{marginTop:'5rem'}}>
      <div className="course-container">
        {coursesData.courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
