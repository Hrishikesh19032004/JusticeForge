import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Styles/CourseCard.css';
import Button from '../Components/magicui/shimmer-button';
import Img from '../Images/Lawyers.jpg';

const CourseCard = ({ course }) => {
  if (!course) {
    console.error("Course data is missing");
    return <h1 style={{fontSize:"5.5rem", fontWeight:"100"}}>Error: Course data is missing</h1>;
  }

  return (
    <div className="course-card">
      <div className="course-card-content">
        <img src={Img} alt={course.courseName} className="course-image" />
        <h2 className="course-title">{course.courseName}</h2>
        <p className="course-description">{course.description}</p>
        <p className="course-professor">Instructor: {course.professor}</p>
        <p className="course-rating">Rating: {course.rating} ★</p>
        
          <Link to={`/Courses/${course.id}`} className="text-white no-underline">
          <Button className="mt-[1.6rem] bg-[#ee9b00] text-white">Go to Course</Button>
          </Link>
        
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.string.isRequired,
    courseName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    detailedInfo: PropTypes.string.isRequired,
    professor: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseCard;
