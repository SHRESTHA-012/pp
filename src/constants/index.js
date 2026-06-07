import { yonderai } from "../assets/images";
import { gssoc } from "../assets/images";
import { ssoc } from "../assets/images";
import { agriculture } from "../assets/images";
import { cv } from "../assets/images";
import { sales } from "../assets/images";
import { agent } from "../assets/images";
import { 
    car,
    contact,
    css,
    git,
    github,
    html,
    javascript,
    java,
    mysql,
    pandas,
    python,
    numpy,
    linkedin,
    react,
    tailwindcss,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: pandas,
        name: "Pandas",
        type: "Python Library",
    },
    {
        imageUrl: numpy,
        name: "Numpy",
        type: "Pyhton Library",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }

];

export const experiences = [
    {
        title: "AI Intern",
        company_name: "Yonder AI",
        icon: yonderai,
        iconBg: "#accbe1",
        date: "October 2025 - January 2026",
        points: [
            "Worked with Liquid Neural Networks to model time-dependent behavior and improve adaptive learning in dynamic systems.",
            "Performed data analysis and preprocessing to extract meaningful patterns and support model training and evaluation.",
            "Conducted data cleaning, feature extraction, and exploratory data analysis (EDA) to enhance model accuracy.",
        ],
    },
    {
        title: "Open Source Contributor",
        company_name: "GirScript Summer of Code",
        icon: gssoc,
        iconBg: "#accbe1",
        date: "May 2026 - August 2026",
        points: [
            "Chosen as a Contributor for GirlScript Summer of Code 2026, one of  India's leading open source initiatives.",
            "Collaborating with maintainers on real-world repositories using professional Git and GitHub workflows.",
            "Actively contributing to open source projects by resolving issues, submitting pull requests.",
        ],

    },
        {
        title: "Open Source Contributor",
        company_name: "Social Summer of Code",
        icon: ssoc,
        iconBg: "#accbe1",
        date: "June 2026 - August 2026",
        points: [
            "Contributed to open-source projects as part of GirlScript Summer of Code (GSSoC) 2026, collaborating with maintainers and developers to implement features, fix bugs, and improve project functionality.",
            "Applied software development best practices, including version control with Git/GitHub, code reviews, and issue tracking in a collaborative open-source environment.",
            "Enhanced project quality by contributing code, documentation, and optimizations while gaining hands-on experience in real-world development workflows and community-driven software development.",
        ],

    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/SHRESTHA-012',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {   
        iconUrl: agriculture,
        theme: 'btn-back-green',
        name: 'Kisan Sarthi',
        description: 'Developed a Telegram bot that provides farmers with AI-powered agricultural advice, crop disease diagnosis, and real-time farming recommendations through simple conversational queries.',
        link: 'https://github.com/SHRESTHA-012/Kisan-sarthi-agri-advisor',
    },
    {   
        iconUrl: cv,
        theme: 'btn-back-blue',
        name: 'Object Detection and Counting',
        description: 'Developed a real-time object detection and tracking system using YOLOv8, Supervision, and OpenCV that counts people crossing a defined line in video streams for crowd analysis, surveillance, and retail analytics.',
        link: 'https://github.com/SHRESTHA-012/Object-Detection-and-Counting',
    },
    {   
        iconUrl: sales,
        theme: 'btn-back-yellow',
        name: 'Sales Forecasting and Data Enrichment',
        description: 'Developed a sales forecasting model using CatBoost and Upgini that predicts 3 months of product sales across 10 stores, achieving a 90% improvement in accuracy through automated feature enrichment.',
        link: 'https://github.com/SHRESTHA-012/Sales-forecasting-and-data-enrichment',
    },
    {   
        iconUrl: agent,
        theme: 'btn-back-red',
        name: 'Personal Screen Agent',
        description: 'Developed a Python-based Media Playback Auto-Switcher that seamlessly manages audio between Spotify and YouTube by automatically pausing one when the other plays, ensuring a distraction-free, hands-free listening experience.',
        link: 'https://github.com/SHRESTHA-012/Personal-SA',
    },

   
];
