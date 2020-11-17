const data = {
    "config": {
      "GA": "UA-157376683-1"
    },
    "main": {
      "name":"Matt Wong",
      "occupation":"Backend Developer",
      // header description
      "description":"Backend Developer based in HK",
      // logo displayed in contact section
      "logo": "logo.png",
      // primary profile picture displayed in about section
      "primaryImg":"profilepic-about.svg",
      // secondary profile picture displayed in contact section
      "secondaryImg":"profilepic-contact.png",
      // bio in about
      "bio":"A Backend Developer for Zensis Limited in HK Science Park. Having worked at both frontend and backend positions for 2+ years, I really enjoy using my technical skills and expertise to deliver outstanding software solutions for the clients.",
      "contactmessage":"Here is the contact details so that you can get in contact with me.",
      // display in contact
      "email": "matthew.chohin@gmail.com",
      "phone": "555-555-5555",
      "address":{
        "street":"(Your Street)",
        "city":"Hong Kong",
        "state":"HK SAR",
        "zip": "(Your Zip/Postal Code)"
      },
      "website": "https://mattwong.info",
      "blog": "https://medium.com/@matthew.chohin",
      // social network
      "social":[
        {
          "name":"twitter",
          "url":"http://twitter.com",
          "className":"fa fa-twitter"
        },
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/mattchw/",
          "className":"fa fa-linkedin"
        },
        {
          "name":"github",
          "url":"http://github.com/mattchw",
          "className":"fa fa-github"
        }
      ],
      // in about section
      "characteristics":[
        {
          "name":"Productive",
          "icon": "fa fa-tachometer"
        },
        {
          "name":"Fast Learner",
          "icon": "fa fa-book"
        },
        {
          "name":"Good Team Player",
          "icon": "fa fa-users"
        },
        {
          "name":"Passionate",
          "icon": "fa fa-heart"
        }
      ],
      // in about section
      "skills":[
        {
          "name":"HTML",
          "level": 90,
          "icon": "fa fa-html5"
        },
        {
          "name":"CSS",
          "level": 85,
          "icon": "fab fa-css3-alt"
        },
        {
          "name":"JS",
          "level": 85,
          "icon": "fab fa-js-square"
        },
        {
          "name":"Nodejs",
          "level": 80,
          "icon": "fab fa-node-js"
        },
        {
          "name":"Java",
          "level": 75,
          "icon": "fab fa-java"
        },
        {
          "name":"Python",
          "level": 65,
          "icon": "fab fa-python"
        },
      ],
    },
    "resume":{
      "education":[
        {
          "school":"The Chinese University of Hong Kong",
          "degree":"B.Sc. in Computer Science",
          "graduated":"September 2015 – July 2019",
          "description":[
            "Specialized in networks, cloud, database, web and mobile applications development",
            "Developed two educational applications in final year project with Spring.io, Swift, React Native, Javascript"
            ]
        },
        {
          "school":"Community College of City University",
          "degree":"Associate in Engineering",
          "graduated":"September 2014 – July 2015",
          "description":[
            "Acquired advanced understanding and knowledge in data structure and algorithm with Java/C++"
            ]
        }
      ],
      "work":[
        {
          "company":"Zensis Limited",
          "title":"Backend Developer",
          "years":"June 2020 – Present",
          "description":[
            "Rebuild the real estate and property system with Nodejs, Redis, Oracle Database, ElasticSearch and deploy it on AWS EC2",
            "Performed load testing to improve and increase frequently used APIs’ performance by 50%",
            "Maintained and supported daily issues of SMPP applications",
            ]
        },
        {
          "company":"Robert Bosch Co Ltd.",
          "title":"Graduate Trainee - Software Supplier Quality",
          "years":"June 2019 – March 2020",
          "description":[
            "Developed and maintained quality documents for software supplier evaluation",
            "Supported improvement measures of suppliers' development and testing processes",
            "Assisted quality engineers across Hong Kong, Germany and US in supplier quality strategy"
            ]
        },
        {
          "company":"OneShop.Cloud",
          "title":"Part-time Backend Developer",
          "years":"December 2018 – April 2019",
          "description":[
            "Constructed server-side music albums upload system to various music platforms including Spotify, Apple Music, etc. with Node.js, Docker and AWS",
            "Integrated continuously of the work with frontend developers"
            ]
        },
        {
          "company":"Information Technology Services Centre in CUHK",
          "title":"Part-time Web and Mobile Developer",
          "years":"February 2017 – October 2018",
          "description":[
            "Built and developed web/mobile applications for various departments in the campus with HTML/CSS/JS and Apache Cordova"
            ]
        }
      ],
      "skillmessage":"Here are my favourite library/framework/tools for frontend and backend development",
      "techs":{
        "front":[
          {
            "name": "React.js",
            "img": "react.png",
            "description": "My favourite frontend modern JavaScript library which boosts productivity and facilitates further maintenance."
          },
          {
            "name": "React Native",
            "img": "react-native.png",
            "description": "Convenient Framework to develop for multiple platforms as I can reuse the codebase (or just a part of it) between iOS and Android."
          },
          {
            "name": "Redux",
            "img": "redux.png",
            "description": "Javascript library for application state management. It's perfectly matched with React."
          },
        ],
        "back":[
          {
            "name": "Express.js",
            "img": "expressjs.png",
            "description": "My first web application framework for Node.js. Everything is well-structured and orgranized and gives me a way to define routes of my web app."
          },
          {
            "name": "MongoDB",
            "img": "mongodb.png",
            "description": "Document-oriented database"
          },
          {
            "name": "Firebase",
            "img": "firebase.png",
            "description": "Google's web and mobile platform which offers easy access to data, files, auth, etc."
          },
          {
            "name": "Docker",
            "img": "docker.jpeg",
            "description": "Executable package of software which runs regardless of the environment"
          }
        ]
      }
    },
    "portfolio":{
      "projects": [
        {
          "title":"UKChat",
          "category":"Slack-like React application with Firebase for Hongkongers to talk about UK topics in an organized way",
          "image":"UKChat.png",
          "url":"https://uk-chatroom.web.app/"
        },
        {
          "title":"Killer Queue",
          "category":"MERN stack application for shop/restaurant to organise queueing effectively",
          "image":"KillerQueue.png",
          "url":"https://github.com/mattchw/Killer-Queue"
        },
        {
          "title":"Polipedia",
          "category":"React/Redux web application with Spring Boot server showing political stances and background of celebrities in HK and US",
          "image":"Polipedia.png",
          "url":"https://github.com/mattchw/Polipedia"
        },
        {
          "title":"Buy2Play",
          "category":"Nodejs with Express.js Web app for second-hand game trading",
          "image":"Buy2Play.png",
          "url":"https://github.com/mattchw/buy2play"
        },
        {
          "title":"VeriMarker",
          "category":"Native iOS app tailor-made for teachers to mark students' assignment conveniently",
          "image":"VeriMarker.png",
          "url":"https://github.com/mattchw/VeriMarker"
        },
        {
          "title":"GradeStudio",
          "category":"Standalone web app for teachers to analyze students' performance and assign grades",
          "image":"GradeStudio.png",
          "url":"https://github.com/mattchw/Grade-Studio-Standalone"
        },
        {
          "title":"CUHK Chinese Map",
          "category":"Platform for sharing and reading literatures of various locations in CUHK campus",
          "image":"CUHKcmap.png",
          "url":"http://www.cuhk.edu.hk/chi/chltmap/index.html"
        },
      ]
    }
  };

  module.exports = data;