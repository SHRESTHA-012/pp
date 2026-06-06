import { yonderai } from "../assets/images";
import { gssoc } from "../assets/images";
import { ssoc } from "../assets/images";
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {   //just a sample project is here; TODO: Will include my own projects instead of these
        // iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
   
];
