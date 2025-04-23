import firstPortfolio from "./assets/first-portfolio.png"
import hashnodeImg from "./assets/hashnode.png";
import devto from "./assets/devto.png";
import contactcard from "./assets/contact-card.png";
export const UtilsProjects = [
    {
        title: 'Distraction Blocker - Chrome extension',
        description: "Distraction Blocker is a Chrome extension designed to help you stay focused. It replaces YouTube thumbnails and video titles with a simple black image and a reminder to focus, allowing you to regain control of your browsing experience.",
        liveLink: "",
        github: "https://github.com/blossom-babs/Distraction-Blocker",
        stack: "HTML, CSS, Javascript"
    },
    {
        title: 'js-ord NPM package',
        description: "A lightweight utility library for performing common character operations in JavaScript with cleaner, more readable syntax. It simplifies working with ASCII codes and alphanumeric characters.",
        liveLink: "https://www.npmjs.com/package/js-ord",
        github: "https://github.com/blossom-babs/js-ord",
        stack: "Javascript",
        imgRef: "https://i.imgur.com/LMfOeZ0.png"
    },
   
    {
        title: "Tsavar's portfolio",
        description: "The site serves as a digital portfolio for a product designer, helping them showcase their work, values, present case studies, highlight key projects, and express their design philosophy",
        liveLink: "https://www.shatermt.com/",
        github: "https://github.com/blossom-babs/shater-port",
        stack: "Next.js, Typescript, Vercel",
        imgRef: "https://i.imgur.com/a3jIFO1.png"
    },
    {
        title: 'csv-to-json API',
        description: "A simple API that allows users to convert CSV files into clean, structured JSON format. Streamlines data transformation.",
        liveLink: "",
        github: "https://github.com/blossom-babs/exercise-csv-to-json",
        stack: "HTML, CSS, Javascript",
        imgRef: "https://i.imgur.com/xvDbcUe.png"
    },
    {
        title: 'rubix API',
        description: "An API for resizing image to thumbanil sized",
        liveLink: "",
        github: "https://github.com/blossom-babs/exercise-rubix",
        stack: "Typescript, Node/Express",
        imgRef: "https://i.imgur.com/sVYny73.png"
    },
    {
        title: 'Landing Page',
        description: "This is a responsive clone of the Stutern landing page, built with pure HTML and CSS. The project replicates the design and structure of the original website focusing on layout, responsiveness, and visual design.",
        liveLink: "https://blossom-babs.github.io/stutern-lp-clone/",
        github: "https://github.com/blossom-babs/stutern-lp-clone",
        stack: "Javascript, HTML, SCSS",
        imgRef: "https://i.imgur.com/AHpE9Io.png"
    },
    {
        title: 'Task tracker',
        description: "A classic react-based to-do list to Keep track of your daily tasks, activities and goals",
        liveLink: "https://blossom-keep-note.netlify.app/",
        github: "https://github.com/blossom-babs/Task-Tracker",
        stack: "React, Javascript",
        imgRef: "https://i.imgur.com/8VgHsnS.png"
    },
    {
        title: 'GitHack',
        description: "Built using GitHub API integration, GitHack allows users to search for summarized details on any GitHub user.",
        liveLink: "https://githack.netlify.app/",
        github: "https://github.com/blossom-babs/Git-Hack",
        stack: "Typescript, HTML, SCSS",
        imgRef: "https://i.imgur.com/7x9TKhZ.png"
    },
]

export const books = {
    2025: [
      {
        title: "",
        rating: ""
      }
    ],
    "All Time": [
      {
        title: "",
        rating: ""
      }
    ]
  };

  export const UtilsArchive  = [
      {
          img: hashnodeImg,
          title: 'Hashnode blog',
          content: "I wrote here for nearly 4 years—79 drafts, 20 published posts. At the time, it felt like my forever corner of the web. But if you're reading this now, it means things change. I did too.",
          link: 'https://blossom.hashnode.dev/'
      },
      {
          img: devto,
          title: 'Dev.to blog',
          content: "The first public home for my thoughts. It's quieter now, but every post still tells a story of what I was learning and unlearning.",
          link: "https://dev.to/blossom"
      },
      {
          img: firstPortfolio,
          title: 'My first ever portfolio',
          content: "It's rough around the edges, and I am not but proud of it, but it somehow landed me my first internship at Voip55. Proof that you don't need perfection, just progress.",
          link: "https://blossom-babs.github.io/portfolio-two/"
      },
      {
          img: contactcard,
          title: 'A contact card I found when I googled my name',
          content: "I no longer have access to this page, so some info are outdated. Still, it's a curious relic of my earlier web presence.",
          link: "https://linktr.ee/BlossomBabalola"
      },
  ]
  
/*
useEffect; when, where, how and why to use it
Accessibility 101 - buttons, tab, semantics
Great engineer !== Great interviewer. Interviewing has its own set of skills
-- clean up API calls
*/