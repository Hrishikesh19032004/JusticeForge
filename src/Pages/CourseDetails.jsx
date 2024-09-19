import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import coursesData from "../Data/courses.json";
import "../Styles/CourseDetails.css";
import BgImage from "../Images/CoursesBg.jpg";

const CourseDetails = () => {
  const { id } = useParams();
  const course = coursesData.courses.find(
    (course) => course.id === parseInt(id)
  );

  if (!course) {
    return <div>Error: Course not found</div>;
  }

  useEffect(() => {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach((header) => {
      header.addEventListener("click", () => {
        const currentlyActiveHeader = document.querySelector(
          ".accordion-header.active"
        );
        if (currentlyActiveHeader && currentlyActiveHeader !== header) {
          currentlyActiveHeader.classList.remove("active");
          currentlyActiveHeader.nextElementSibling.style.display = "none";
        }

        header.classList.toggle("active");
        const content = header.nextElementSibling;
        if (header.classList.contains("active")) {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });
    });

    return () => {
      headers.forEach((header) => {
        header.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="course-details-container" style={{marginTop:'3rem'}}>
      <div className="course-header">
        <img src={BgImage} alt={course.courseName} className="course-image" />
        <h1
          className="course-title"
          style={{ fontSize: "4rem", fontWeight: "100" }}
        >
          {course.courseName}
        </h1>
        <p
          className="course-rating"
          style={{ fontSize: "2rem", fontWeight: "100" }}
        >
          Rating: {course.rating} ★
        </p>
        <p
          className="course-description"
          style={{ fontSize: "1.5rem", fontWeight: "100" }}
        >
          {course.description}
        </p>
        <div className="course-details-summary">
          <h3 style={{ fontSize: "1.5rem", fontWeight: "100" }}>
            {`Learn ${course.courseName} within a Month`}
          </h3>
          <p style={{ fontSize: "1.5rem", fontWeight: "100" }}>
            {`Master the fundamentals of ${course.courseName} with our
            hands-on course. `}
          </p>
          <p style={{ fontSize: "1.5rem", fontWeight: "100" }}>
            {`Gain practical knowledge of market analysis through
            our online tutorials. Prepare for a future in ${course.courseName}
            .`}
          </p>
          <p style={{ fontSize: "1rem", fontWeight: "100" }}>
            (25263 reviews) | 10 lessons | Beginner level | 148.3k Learners
          </p>
        </div>

        <NavLink
          to="/Payments"
          className="enroll"
          style={{ marginRight: "10px" }}
        >
          Enroll Now
        </NavLink>
        <NavLink to="/courses" className="back-button">
          Back to Courses
        </NavLink>
      </div>

      <div className="course-overview">
        <h2 style={{ fontSize: "4rem", fontWeight: "100" }}>
          Course Overview
        </h2>
        <p>{course.overview}</p>
      </div>

      <div className="accordion">
        {course.subtopics.map((subtopic, index) => (
          <div key={index} className="accordion-item">
            <button className="accordion-header" style={{ fontSize: "1.4rem", fontWeight: "100" }}>
              {subtopic.name}
              <span className="accordion-icon" style={{ marginLeft: "6px" }}>
                ▼
              </span>
            </button>
            <div className="accordion-content">
              <p style={{ fontSize: "1.4rem", fontWeight: "100" }}>{subtopic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
