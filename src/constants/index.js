import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    cp,
    dev,
    cplogo,
    blogs,
    spotify,
    portfolio,
    threejs,
    cpp,
    python,
    abhay,
    mamthur,
    amitesh,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Skills",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Competitive Programmer",
      icon: mobile,
    },
    {
      title: "Website Developer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Problem Solving",
      company_name: "CP",
      icon: cp,
      iconBg: "#0c0b0e",
      date: "Started in 2022",
      
      points: [
        "Participated in ICPC 2022 and 2023",
      ],

      link: [
        `https://leetcode.com/rahul_siddhu/`,
        `https://codeforces.com/profile/rahul_siddhu`,
        `https://www.codechef.com/users/rahul_siddhu`,
      ]
    },
    {
      title: "Web Related",
      company_name: "Languages and Frameworks",
      icon: dev,
      iconBg: "#0c0b0e",
      date: "Started in 2023",
      points: [
        "Html",
        "Css",
        "JavaScript",
        "ReactJs",
        "NodeJs",
        "ThreeJs",
        "Tailwind",
      ],
      link:[

      ]
    },
    {
      title: "Other",
      company_name: "",
      icon: cpp,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Languages - C++, Python, Fortran",
        "Basics of MySql and Git",
      ],
      link:[

      ]
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Love this",
      name: "Abhay Tiwari",
      designation: "Student",
      company: "IIT Goa",
      image: abhay,
    },
    {
      testimonial:
        "I've never seen a Portfolio website like this one. Amazing!!!",
      name: "Amitesh",
      designation: "Content Creator",
      company: "Youtube",
      image: amitesh,
    },
    {
      testimonial:
        "Great Work!!!",
      name: "Vaibhav",
      designation: "Ex-Intern",
      company: "Oxyeocin",
      image: mamthur,
    },
  ];
  
  const projects = [
    {
      name: "Spotify Clone",
      description:
        "Web-based platform that allows users to listen to their favourite songs.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: spotify,
      source_code_link: "https://github.com/rahul-siddhu/Spotify-Clone",
    },
    {
      name: "Portfolio Website",
      description:
        "My portfolio website that showcases my professional experience and skills, highlighting my projects and achievements in an organized and visually appealing way.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/rahul-siddhu/Portfolio-Website",
    },
    {
      name: "Evergreen Blogs",
      description:
        "A blogging site where one can read write and add Blogs!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: blogs,
      source_code_link: "https://github.com/rahul-siddhu/Evergreen-Blogs",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };