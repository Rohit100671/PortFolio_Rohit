// Enter all your detials in this file
// Logo images
import logo from "./assets/logo.png";
// Profile Image
import profile from "./assets/profile.JPG";
import backprofile from "./assets/backprofile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.webp";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import python from "./assets/techstack/python.png";
import django from "./assets/techstack/django.png";
import ml from "./assets/techstack/ml.jpg";
import ds from "./assets/techstack/ds.jpg";
import ai from "./assets/techstack/ai.jpeg";
import numpy from "./assets/techstack/numpy.jpg";
import matplotLib from "./assets/techstack/matplotLib.png";
import Panda from "./assets/techstack/panda.png";
import sciPy from "./assets/techstack/sciPy.webp";
import api from "./assets/techstack/api.png";
import mongodb from "./assets/techstack/mongoDB.png";
import sql from "./assets/techstack/sql.jpg";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.avif";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpeg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.webp";
import projectImage6 from "./assets/projects/project6.jpg";
import projectImage7 from "./assets/projects/project7.jpg";

// Logos
export const logos = {
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Rohit Jagdish Tighare",
  tagline: "I build robust web solutions using Python and React | Interested in Machine Learning, Data Science & AI",
  img: profile,
  img2: backprofile,
  about: `I'm a passionate Full Stack Python Web Developer specializing in building dynamic, scalable, and user-centric web applications. With strong expertise in Python, Django, React, and RESTful APIs, I bring full-cycle development experience — from backend architecture to seamless frontend integration.Currently, I’m contributing to the Houzza Real Estate platform at Geobull Innovations, where I play a key role in developing robust APIs, optimizing UI performance, and ensuring responsive cross-platform user experiences.Beyond web development, I have a growing passion for Machine Learning, Data Science, and Artificial Intelligence, and I'm continuously expanding my skills to build intelligent and impactful digital solutions.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/rohit-tighare-42961632a",
  github: "https://github.com/Rohit100671",
  twitter: "https://x.com/RohitTighare153",
  instagram: "https://www.instagram.com/rohit__tighare/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Python Full Stack Web Developer",
    Company: "Geobull Innovations",
    Location: "Balewadi, Pune",
    Type: "Full Time",
    Duration: "Feb 2024 – July 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Secondary School Certificate (SSC)",
    Company: "Dr. Babasaheb Ambedkar Vidyalaya",
    Location: "Lakhandur, Bhandara",
    Type: "Full Time",
    Duration: "Mar 2018",
  },
  {
    Position: "Higher Secondary Certificate (HSC)",
    Company: "Najaji Joshi Jr. College",
    Location: "Shahapur, Bhandara",
    Type: "Full Time",
    Duration: "Apr 2020",
  },
  {
    Position: "Bachelor of Computer Application (BCA)",
    Company: "Nagpur University",
    Location: "Nagpur, Maharashtra, India",
    Type: "Full Time",
    Duration: "Aug 2021 - Apr 2024",
  },
  {
    Position: "Python Full Stack Web Development | Data Science | Machine Learning",
    Company: "The Kiran Academy",
    Location: "Karve Nagar, Pune",
    Type: "Training and Certification",
    Duration: "May 2024 - Dec 2024",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  python: python,
  django: django,
  api: api,
  numpy: numpy,
  matplotLib: matplotLib,
  sciPy: sciPy,
  panda: Panda,
  ml: ml,
  ds: ds,
  ai: ai,
  mongodb: mongodb,
  sql: sql,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Houzza - Real Estate Platform",
    image: projectImage1,
    description: `A feature-rich real estate web app for buying, selling, and managing properties. Includes property/project posting, user dashboards, and full backend/frontend integration.`,
    techstack: "Python, Django REST, React, JavaScript, SQL",
    previewLink: "http://customer.houzza.in",
    githubLink: "",
  },
  {
    title: "Online EducationExam",
    image: projectImage2,
    description: `An MCQ-based online examination system with two user roles: admin and student. Admin manages questions (add, update, delete) and sets exam durations. Students log in to attend timed exams.`,
    techstack: "Python, Django, MySQL, HTML5, CSS, JavaScript",
    previewLink: "",
    githubLink: "https://github.com/Rohit100671/EducationExam",
  },
  {
    title: "Student Management System",
    image: projectImage3,
    description: `A full-stack college management platform. Staff (admin) manages student data and admissions. Students can register and manage their profiles. Includes authentication and role-based access.`,
    techstack: "Python, Django REST Framework, SQL, HTML5, CSS, JavaScript",
    previewLink: "",
    githubLink: "https://github.com/Rohit100671/StudentManagement",
  },
  {
    title: "MyOnlineMeal",
    image: projectImage3,
    description: `A static frontend website built using HTML5 and CSS. Demonstrates UI layout for a food delivery platform with responsive design and clean presentation.`,
    techstack: "HTML5, CSS",
    previewLink: "",
    githubLink: "https://github.com/Rohit100671/MyOnlineMeal",
  },
  {
    title: "TigerGym Fitness Web Page",
    image: projectImage5,
    description: `A responsive fitness gym landing page project built with only HTML5 and CSS. Designed for showcasing gym services, plans, and contact details with clean visual aesthetics.`,
    techstack: "HTML5, CSS",
    previewLink: "",
    githubLink: "https://github.com/Rohit100671/GymFitnees",
  },
  {
    title: "Web Service Project - Housing Services Platform",
    image: projectImage6,
    description: `A service-oriented housing platform that allows users to book household services such as plumbing, electrical work, cleaning, and more. Built using Django REST API with React and MongoDB, the platform supports user registration, service provider roles, and real-time service management.`,
    techstack: "Python, Django REST, React, MongoDB",
    previewLink: "",
    githubLink: "https://github.com/Rohit100671/Web_Service_Project",
  },
  {
    title: "Tic-Tac-Toe Game",
    image: projectImage7,
    description: `A browser-based Tic-Tac-Toe game built using core web technologies. Players alternate turns to mark X and O on a 3x3 grid. Includes logic for win detection, draw handling, and a reset option.`,
    techstack: "HTML, CSS, JavaScript",
    previewLink: "",
    githubLink: "https://github.com/Rohit100671/Tic-Tac-Toe-Game",
  },

];
// Enter your Contact Details here
export const contactDetails = {
  email: "rohittighare2003@gmail.com",
  phone: "+91 9689104900",
};
