/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: 'Kaustubh Joshi',
  title: "Hi, I'm Kaustubh",
  subTitle: emoji(
    // 'A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.'
    'An experienced and resourceful full-stack software engineer, I use the tools and resources at my disposal to create system that saves time.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1fVP9_exGbr_AozmAXnjB6sfq6iOfPGSy/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://bit.ly/ElGithub',
  linkedin: 'https://bit.ly/egLinked',
  gmail: 'kaustubh.joshi136@gmail.com',
  // gitlab: 'https://gitlab.com/saadpasta',
  // facebook: 'https://www.facebook.com/saad.pasta7',
  devio: 'https://dev.to/elpidaguy',
  stackoverflow: 'https://bit.ly/ElOverflow',
  codepen: 'https://bit.ly/ElCodepen',
  pexels: 'https://bit.ly/ElPexels',
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      '⚡ Developing highly interactive end to end application for challenging business requirements.'
    ),
    emoji('⚡ Redesinging and upgrading traditional functionality of Operations, giving the power to the user.'),
    emoji(
      '⚡ Integration of third party services such as GCP/DevOps for better security and fast results.'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: 'Angular',
      fontAwesomeClassname: 'fab fa-angular',
    },
    {
      skillName: 'DotNet',
      fontAwesomeClassname: 'fab fa-microsoft',
    },
    {
      skillName: 'Java',
      fontAwesomeClassname: 'fab fa-java',
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: 'MongoDB',
      fontAwesomeClassname: 'fab fa-envira',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'C-DAC: Center For Development of Advanced Computing, India  ',
      logo: require('./assets/images/cdac2.png'),
      subHeader: 'PG-DAC: Diploma in Advanced Computing',
      duration: '2019 - 2020',
      desc: 'Completed the  Program with GRADE A',
      descBullets: [
        'Ranked top 10 in the program',
      ],
    },
    {
      schoolName: 'Pune University',
      logo: require('./assets/images/sppu-logo.jpg'),
      subHeader: 'Bachelor of Engineering in Computer Science',
      duration: '2013 - 2017',
      desc:
        'First Class With Distinction',
      descBullets: ['Interaction with Dr.Mashelkar sir and Dr.Kakodkar sir 2018 '],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '80%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '66%',
    },
    {
      Stack: 'DevOps',
      progressPercentage: '55%',
    },
    {
      Stack: "Leadership", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Lead Engineer',
      company: 'John Deere India Pvt Ltd',
      companylogo: require('./assets/images/jd.png'),
      date: '2023 – Present',
      desc:
        'Responsible for Leading the Web Portfolio for one of the World Wide John Deere Engagements.',
    },
    {
      role: 'Senior Engineer',
      company: 'John Deere India Pvt Ltd',
      companylogo: require('./assets/images/jd.png'),
      date: '2021 - 2023',
      desc:
        'Responsible for developing end to end intelligent solutions which saves time',
    },
    {
      role: 'Analyst - Full Stack Developer',
      company: 'IKS Health',
      companylogo: require('./assets/images/IKSHlogo.jpg'),
      date: '2020 – Present',
      desc:
        'Responsible for developing end to end intelligent solutions for challenging business requirements with the application of various cutting edge technologies.',
      descBullets: [
        'Handling variety of healthcare products with huge data and driving insights out of it to help operations.',
        'Developing solutions across a range of business requirements with latest technologies.',
        'Productionizing and Maintaining solutions for ensuring high availabilty and throughput.',
      ],
    }
    // {
    //   role: 'Full Stack Developer',
    //   company: 'Weoto',
    //   companylogo: require('./assets/images/wlogo.jpg'),
    //   date: '2017 – 2019',
    //   desc:
    //     'Developing an innovative and creative products and services that provides the total communication and information solutions. ',
    //   descBullets: [
    //       'Developing variety of products across various well known domains as per business requirements.',
    //       'Ensuring the User Friendliness, Dynamicity and Stableness of Software/Hardware Applications.',
    //       'Leading Products on both technical and management fronts.',
    //     ],
    // },
    // {
    //   role: 'Software Engineer Intern',
    //   company: 'Solace Infotech Pvt Ltd',
    //   companylogo: require('./assets/images/solace-logo.png'),
    //   date: '2016 - 2017',
    //   descBullets: [
    //     'Group Leader of Academic Project',
    //     'Worked on Android Native, PHP Codeigniter, Jquery, Ajax, MySQL as Full Stack Developer',
    //   ]
    // },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'elpidaguy', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: 'Smart India Hackathon 2017 Winner',
      subtitle:
        'Winner of SIH2017 held at Hubali,Karnataka under Department of Ayush,India',
      image: require('./assets/images/sih17.webp'),
      footerLink: [
        {
          name: "Certification",
          url:
            'https://drive.google.com/file/d/1G2Vxba57U6lfMzrlvIKdhb-VGJcHSUZB/view?usp=sharing'
        },
        // {
        //   name: 'Award Letter',
        //   url:
        //     'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        // },
        // {
        //   name: 'Google Code-in Blog',
        //   url:
        //     'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        // },
      ],
    },
    {
      title: 'Legacy JavaScript Algorithms and Data Structures',
      subtitle:
        'FreeCodeCamp Certificate',
      image: require('./assets/images/fcc.jpg'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://www.freecodecamp.org/certification/elpidaguy/javascript-algorithms-and-data-structures'
        },
        // {
        //   name: 'Award Letter',
        //   url:
        //     'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        // },
        // {
        //   name: 'Google Code-in Blog',
        //   url:
        //     'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        // },
      ],
    },
    {
      title: 'Security Aware',
      subtitle:
        'Secure Code Warrior',
      image: require('./assets/images/scw.png'),
      footerLink: [
        {
          name: 'Profile',
          url:
            'https://portal.securecodewarrior.com/#/stats/63edb997de03d50dc71f3b4a'
        },
        // {
        //   name: 'Award Letter',
        //   url:
        //     'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        // },
        // {
        //   name: 'Google Code-in Blog',
        //   url:
        //     'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        // },
      ],
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url:
        'https://dev.to/elpidaguy/hello-i-m-http-and-these-are-my-request-methods-co',
      title: 'Hello, I\'m HTTP and these are my request methods👋🏻',
      description:
        'This post will provide you all the information you need to understand HTTP a better and a simpler way..',
    },
    {
      url:
        'https://elpidaguy.medium.com/how-to-bulk-upload-csv-file-data-into-mysql-table-very-fast-way-using-load-data-statement-e3685890a568',
      title: 'How to Bulk Upload CSV file data into MySql Table? A very fast way using LOAD DATA.',
      description:
        'LOAD DATA LOCAL provides a simple and fast way to directly upload your csv data into your MySQL table programmatically.',
    },
    {
      url: 'https://elpidaguy.medium.com/creating-a-dot-net-core-3-1-webapi-with-openapi-swagger-ui-using-cli-on-vs-code-76a142505b33',
      title: 'Creating a Dot Net Core 3.1 WebAPI with OpenAPI, Swagger UI using CLI on VS Code',
      description:
        'Do you want to document your DotNet Core 3.1 WebAPIs?',
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+91-9284901709',
  emailAddress: 'kaustubh.joshi136@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
