import { Icons } from "@/components/icons";
import { url } from "inspector";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "ADSLabs",
  initials: "ADSLabs",
  url: "https://adslabs.devxoshakya.xyz",
  location: "Meerut, India",
  locationLink: "https://www.google.com/maps/place/meerut",
  description: "We at ADSLabs are a bunch of developers who aim to encourage the development of technology and innovation in MIET campus (and beyond) by learning, sharing knowledge and solving problems.",
  summary: "ADSLabs or Advanced Development and Software-Engineering Laboratories is a student-run private technical group at MIET Meerut, which aims to encourage the development of technology and innovation in the campus and beyond. We believe in learning and sharing knowledge; collaboration and experimentation; and human interaction that matters the most.",
  avatarUrl: "/ads-labs-icon.svg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "Python",
    "MongoDB",
    "Postgres",
    "Docker",
    "AWS",
    "Git/Github",
    "TailwindCSS",
    "Github Actions",
    "Linux",
    "Java",
    "C",
    "NeoVim/Vim",
    "Express.js",
    "Firebase",
    "SQL",
    "RESTful APIs",
    "GraphQL",
    "Jest",
    "React Testing Library",
    "Cypress",
    "Aceternity-UI",
    "Magic-UI",
    "Figma",
    "Slack",
    "Discord",
    "Jira",
    "Bitbucket",
    "Sublime Text",
    "Visual Studio Code",
    "IntelliJ IDEA",
    "PyCharm",
    "WebStorm",
    "Android Studio",
    "Eclipse",
    "NetBeans",
    "Postman",
    "MongoDB Compass",
    "MySQL Workbench",
    "pgAdmin",
    "AWS Management Console",
    "AWS CLI",
    "AWS SDK",

  ],
  people: [
    
       "/me.jpeg",
       "/yaggy.png",
    
    
       "/ayush.jpeg",
    
    
       "/suryansh.jpeg"

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "devxoshakya@gmail.com",
    tel: "+919457239806",
    social: {
      JoinUs:{
        name: "Join us",
        url: "/blog/join-us",
        icon: Icons.clip,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ads-labs",
        icon: Icons.github,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:devxoshakya@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Github",
      href: "https://github.com/devxoshakya",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/github.png",
      start: "August 2023",
      end: "Present",
      description : "Contributed to multiple public projects and the AMVSTRM API repo, collaborating globally with developers to foster innovation and drive success."

    },
    {
      company: "Hacktoberfest 2023",
      href: "https://hacktoberfest.digitalocean.com",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor / Web Developer",
      logoUrl: "/hacktober.jpeg",
      start : "October 2023",
      end : "November 2023",
      description : "Contributed to GESCOE in Hacktoberfest by enhancing the E-Library with React.js, JavaScript, and CSS. Optimized navigation and login, integrated Firebase and SQL with Express.js, and added 'Contact Us' and 'Terms and Services' sections, showcasing full-stack development skills."
    }
  ],
  education: [
    {
      title: "Meerut Institute of Engineering and Technology",
      dates: "August 2023 - Present",
      location: "Bachelor of Technology in Computer Science Engineering",
      description:
        "Achieved an average grade of 9.14 SGPA ",
      image:
        "/miet.jpeg",
      links: [],
    },
    {
      title: "B. B. S. S. M. Senior Secondary School",
      dates: "April 2022 - May 2023",
      location: "Higher Secondary Certificate",
      description:
        "Achieved a remarkable 9.74 CGPA, securing the rank 1 in school and earning an academic excellence award from Vidya Bharati.",
      image:
        "/school.jpeg",
      links: [],
    }   
  ],
  projects: [
    {
      title: "Anveshna.",
      href: "https://anveshna.xyz",
      dates: "May 2024 - July 2024",
      active: true,
      description: "Anveshna is an anime streaming website that lets you watch your favorite anime 🌸",
      technologies: [
        "React",
        "Typescript",
        "Node.js",
        "Express",
        "Tailwind",
        "Aceternity UI",
        "Anilist API"
      ],
      links : [
        {
          type: "Website",
          href: "https://anveshna.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/devxoshakya/anveshna",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "https://github.com/devxoshakya/portfolio/raw/main/public/videos/anveshna.mp4"

    },
    {
      title: "MIET Results",
      href: "https://miet-results.devxoshakya.xyz",
      dates: "June 2024 - July 2024",
      active: true,
      description: "A web scraper to get AKTU University results of all students of Meerut Institute of Engineering and Technology.",
      technologies: [
        "React",
        "Javascript",
        "Node.js",
        "Express",
        "Tailwind",
        "AWS",
        "Cheerio",
        "Postman"
      ],
      links : [
        {
          type: "Website",
          href: "https://miet-results.devxoshakya.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/devxoshakya/miet-results",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "https://github.com/devxoshakya/portfolio/raw/main/public/videos/miet-result.mp4"

    },
    {
      title: "Watcher.",
      href: "https://watcher-01.vercel.app",
      dates: "March 2024",
      active: true,
      description: "A WebApp to watch movies and organize watch parties together with your friends.",
      technologies: [
        "React",
        "Javascript",
        "Node.js",
        "SCSS",
        "Express",
        "ZegoCloud API",
      ],
      links : [
        {
          type: "Website",
          href: "https://watcher-01.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/devxoshakya/watcher",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "https://github.com/devxoshakya/portfolio/raw/main/public/videos/watcher.mp4"

    },
    {
      title: "Custom Sort",
      href: "https://github.com/devxoshakya/custom-sort",
      dates: "Feburary 2024",
      active: true,
      description: "A python script to sort files in a directory based on their extensions.",
      technologies: [
        "Python"
      ],
      links : [
        {
          type: "Github",
          href: "https://github.com/devxoshakya/custom-sort",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/custom-sort.png",
      video: ""

    },
  ],
  hackathons: [
    {
      title: "Hackfest 1.0",
      dates: "April 22nd, 2024",
      location: "Meerut, Uttar Pradesh",
      description:
        "Developed a Responsive Web Application which allows users to find and book appointments with doctors ",
      image: "/hackfest.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/anshi14a/doctorly"
        }
      ],
    },
    {
      title: "DevGathering",
      dates: "March 30th - 31st, 2024",
      location: "Meerut, Uttar Pradesh",
      description:
        "Developed a Web Application which allows users to share thier screen and do watch parties with others.",
      image: "/devGathering.jpeg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/devxoshakya/watcher"
        },
        {
          title: "Devfolio",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devfolio.co/projects/watcher-6488"
        }
      ],
    }
    
  ],
} as const;
