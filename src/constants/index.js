import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    aws,
    devops,
    java,
    python,
    mysql,
    springboot,
    postgres,
    jira,
    mem,
    fueldetection,
    sjsu,
    mlrit,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "AWS Cloud",
      icon: aws,
    },
    {
      title: "DevOps Engineer",
      icon: devops,
    },
    {
      title: "Java Backend Developer",
      icon: java,
    },
    {
      title: "Python Developer",
      icon: python,
    },
  ];
  
  const technologies = [
    
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Spring Boot",
      icon: springboot,
    },
    {
      name: "PostgreSQL",
      icon: postgres,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "JIRA",
      icon: jira,
    },
  ];
  
  const experiences = [
    {
      title: "AWS Devops Engineer",
      company_name: "CapGemini",
      icon: aws,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Aug 2024",
      points: [
        "Resolved user tickets via Jira, providing solutions for AWS services like EC2, IAM, CloudFormation, and RDS.",
        "Managed CI/CD pipelines using GitLab and Jenkins for automated code deployment and integration.",
        "Monitored infrastructure and application performance with Datadog, responding to incidents to minimize downtime.",
        "Configured IAM policies and roles, ensuring secure access controls and compliance.",
      ],
    },
    {
      title: "AWS Migration -  Java",
      company_name: "CapGemini",
      icon: java,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Sept 2023",
      points: [
        "Migrated on-premises Java applications to AWS Cloud, enhancing scalability and performance.",
        "Integrated AWS SQS with Lambda using Java SDK for efficient message processing.",
        "Consumed and called external SOAP APIs using Spring Boot for seamless service integration.",
        "Deployed Java Spring MVC applications on AWS Lambda using Docker, optimizing resource usage,",
      ],
    },
    {
      title: "Software Intern",
      company_name: "Capgemini",
      icon: springboot,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Apr 2022",
      points: [
        "Trained on Spring Boot, Java, Docker, and Kubernetes.",
        "Developed a backend for a blogging application using Spring Boot and PostgreSQL, enabling users to post, view, and comment on posts.",
        "Utilized SonarQube for code quality inspection and deployed the application on AWS using Docker and Kubernetes",
      ],
    },
  ];
  
  const education = [

    {
      degree: "Master of Science in Computer Science",
      schoolName: "San Jose State University, California",
      yearDuration: "2024 - 2026",
      coursework: "Design & Analysis of Algorithms, Topics in AI, Cloud Computing",
      logo: sjsu,
    },
    {
      degree: "Bachelor of Computer Science",
      schoolName: "MLR Institute of Technology, India",
      yearDuration: "2018 - 2022",
      coursework: "Data Structures and Algorithms, Java, Python, Cloud Computing, Database and Management Systems, Operating Systems, Introduction to AI and ML, Computer Networks",
      logo: mlrit,
    },
    
  ];

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Memories",
      description:
        "Full Stack MERN Web Application. It is a simple social media app that allows users to post interesting events that happened in their lives.",
      tags: [
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "yellow-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "pink-text-gradient",
        },
      ],
      image: mem,
      source_code_link: "https://github.com/rajpranay06/Memories.git",
    },
    {
      name: "Fuel Efficiency Prediction",
      description:
        "Developed an ML model to predict fuel efficiency of cars based on necessary attributes using Multi layer perceptron and Artificial Neural Networks. The learning method involved is feed-forward learning. ",
        tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
      ],
      image: fueldetection,
      source_code_link: "https://github.com/rajpranay06/Fuel-Efficiency-Prediction-.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, education };