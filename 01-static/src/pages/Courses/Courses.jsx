import React from "react";
import Layout from "../../layout/Layout";
import './styles/Styles-Courses.css'
import ContainerCourses from "./components/ContainerCourses";

const Courses = () => {
  return (
    <>
      <Layout>
        <div className="content">
        <h1>
            Cursos Disponibles
        </h1>
        <ContainerCourses></ContainerCourses>
        </div>

    
      </Layout>
    </>
  );
};

export default Courses;
