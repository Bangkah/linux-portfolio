import { PersonalData } from "../types/personalData";

export const RESUME_OS_MAP: Record<string, string> = {
  fedora: "/resumeCons.pdf",
  ubuntu: "/resume.pdf",
  kali: "/resumeSec.pdf",
};

export const PERSONAL_DATA: PersonalData = {
  personalInfo: {
    name: "Muhammad Dhiyaul Atha",
    fullName: "Muhammad Dhiyaul Atha",
    shortName: "Atha",
    title: "Muhammad Dhiyaul Atha\nOpen Source Enthusiast | DevOps & Backend | Linux | Cloud Native",
    profileImage: "/preload/photo1.jpg",
    fullNameLogo: "/preload/favicon.svg",
    logo: "/preload/favicon.svg",
    email: "mdhyaulatha@gmail.com", 
    website: "https://mdhiyaulatha.tech", 
    uname: "Bangkah",
    aboutMe:
      "I'm Muhammad Dhiyaul Atha, an Informatics Engineering student and open-source enthusiast from Aceh, Indonesia.\nI build Linux tools, backend systems, and cloud-native projects.",
    aboutDescription:
      "I’m an Informatics Engineering student interested in Linux, backend development, DevOps, and cloud-native technologies. I enjoy building and maintaining open-source projects, particularly Linux tools, CLI applications, backend systems, and developer utilities. Some of my projects include ATHA, NetInfo, Bangkah Launcher, and Sentinel AI. I’m currently learning more about Linux administration, Docker, REST APIs, CI/CD, automation, backend security, and reliable software systems. Most of what I learn comes from building projects, experimenting, solving problems, and improving things along the way. Currently exploring: DevOps, cloud-native infrastructure, backend development, Linux systems, and open-source software. Open to internships, freelance opportunities, collaboration, and open-source projects.",
    socials: [
      {
        value: "GitHub",
        href: "https://github.com/Bangkah",
      },
      {
        value: "LinkedIn",
        href: "https://www.linkedin.com/in/muhammad-dhyaul-atha/",
      },
      {
        value: "codersRank",
        href: "https://profile.codersrank.io/user/bangkah",
      },
      {
        value: "Instagram",
        href: "https://www.instagram.com/mdhiyaulatha/",
      },
      {
        value: "Blog",
        href: "https://mdhiyaulatha.tech/",
      },
    ],
  },
  quickLinks: [
    {
      href: "https://github.com/Bangkah",
      value: "GitHub",
      style: {
        color: "#99ddcc",
        background: "rgba(136, 192, 208, 0.15)",
        border: "1px solid rgba(136,192,208,0.35)",
      },
    },
    {
      href: "https://www.linkedin.com/in/muhammad-dhyaul-atha/",
      value: "LinkedIn",
      style: {
        color: "#A3BE8C",
        background: "rgba(163, 190, 140, 0.15)",
        border: "1px solid rgba(163,190,140,0.35)",
      },
    },
    {
      href: "https://profile.codersrank.io/user/bangkah",
      value: "codersRank",
      style: {
        color: "#81A1C1",
        background: "rgba(129, 161, 193, 0.15)",
        border: "1px solid rgba(129,161,193,0.35)",
      },
    },
    {
      value: "Instagram",
      href: "https://www.instagram.com/mdhiyaulatha/",
      style: {
        color: "#b268b5ff",
        background: "rgba(244, 74, 230, 0.15)",
        border: "1px solid rgba(129,161,193,0.35)",
      },
    },
    {
      href: "https://dev.to/bangkah",
      value: "Blog",
      style: {
        color: "#B48EAD",
        background: "rgba(180, 142, 173, 0.15)",
        border: "1px solid rgba(180,142,173,0.35)",
      },
    },
    {
      href: "", // Set dinamis berdasarkan tema/OS di logika frontend
      value: "Resume",
      style: {
        color: "#EBCB8B",
        background: "rgba(235, 203, 139, 0.15)",
        border: "1px solid rgba(235,203,139,0.35)",
      },
    },
  ],
  skillsOverview: {
    value: "Technical Skills",
  },
  recommendations: {
    value: "Recommendations",
    data: [
      {
        value: "LinuxLinks Review (Steve Emms)",
        description:
          "\"netinfo is a fast, minimal, and reliable command-line utility to display your network and system information. Designed for troubleshooting, auditing, scripting, or simply checking your connection status, netinfo only shows verifiable and essential data.\"",
        href: "https://www.linuxlinks.com/netinfo-display-network-system-information/",
      },
      {
        value: "CodersRank Leaderboard",
        description:
          "Ranked #20 Developer in Indonesia (Top 1% Globally) on CodersRank, with Top 5 badges in FastAPI, Python, and Shell based on open-source activity.",
        href: "https://profile.codersrank.io/user/bangkah",
      }
    ],
  },
  experience: {
    value: "Experience",
    description:
      "Open Source Maintainer focused on maintainable, secure, and reproducible development workflows across Linux and backend projects.",
    data: [
      {
        href: "https://github.com/Bangkah",
        value: "Open Source Maintainer",
        description:
          "Bangkah | Part-time | 2025 - Present | Indonesia - Remote. Develop and maintain ATHA, Bangkah Launcher, NetInfo, and Sentinel AI. Build Linux utilities, CLI applications, developer tools, backend automation, REST APIs, and Git-based development workflows. Maintain Arch Linux/AUR packages, documentation, releases, issues, and pull requests.",
      },
      {
        href: "https://www.linkedin.com/in/muhammad-dhyaul-atha/",
        value: "Student",
        description:
          "Politeknik Negeri Lhokseumawe | Teknik Informatika | August 2024 - Present.",
      },
    ],
  },
  projects: {
    value: "Projects",
    data: [
      {
        icon: "icons/github-icon.svg",
        value: "ATHA",
        description:
          "Lightweight workflow wrapper for pacman that improves safety, transparency, and auditability without replacing native behavior.",
        href: "https://github.com/Bangkah/Atha",
      },
      {
        icon: "icons/github-icon.svg",
        value: "NetInfo",
        description:
          "Fast, minimal, and reliable Linux CLI utility for displaying network and system information. Featured on LinuxLinks.",
        href: "https://github.com/Bangkah/netinfo",
      },
      {
        icon: "icons/github-icon.svg",
        value: "Bangkah Launcher",
        description:
          "Laravel starter kit scaffold for production-ready projects with Docker, Nginx, authentication, and more.",
        href: "https://github.com/Bangkah/bangkah-launcher",
      },
      {
        icon: "icons/github-icon.svg",
        value: "Sentinel AI",
        description:
          "Open-source cybersecurity CLI tool for Linux.",
        href: "https://github.com/Bangkah",
      },
      {
        icon: "icons/github-icon.svg",
        value: "Muslim Life",
        description:
          "Muslim Life adalah aplikasi web Islami berbasis React.js yang membantu umat Muslim dalam menjalani ibadah harian dengan lebih mudah, cepat, dan praktis.",
        href: "https://muslim-life.vercel.app/",
      },
      {
        icon: "icons/github-icon.svg",
        value: "AegisCrypt Web",
        description:
          "AegisCrypt Web is a military-grade, browser-based encryption tool. It is designed to be Zero-Knowledge, meaning your files and passwords are processed entirely in your browser's RAM via WebAssembly / Web Crypto API and never transmitted to any server.",
        href: "https://github.com/Bangkahdev/AegisCrypt-Web",
      },
      {
        icon: "icons/github-icon.svg",
        value: "Enkripsi App",
        description:
          "Aplikasi EnkripsiApp adalah program sederhana berbasis C# Windows Forms yang dibuat untuk mempelajari dan mengimplementasikan algoritma enkripsi teks. Aplikasi ini memiliki antarmuka grafis sederhana sehingga mudah digunakan untuk proses enkripsi maupun dekripsi.",
        href: "https://github.com/Bangkahdev/EnkripsiApp",
      },
    ],
  },
  achievements: {
    value: "Key Achievements",
    data: [
      {
        value: "Featured on LinuxLinks",
        description:
          "NetInfo was reviewed and featured on LinuxLinks as a recommended free & open-source CLI utility for Linux system and network diagnosis.",
        href: "https://www.linuxlinks.com/netinfo-display-network-system-information/",
      },
      {
        value: "Top 20 Developer in Indonesia (CodersRank)",
        description:
          "Ranked #20 among all developers in Indonesia with a CodersRank Score of 1,713 and Top 1% global standing.",
        href: "https://profile.codersrank.io/leaderboard/developer?country=Indonesia",
      },
    ],
  },
  education: {
    value: "Education",
    data: [
      {
        value: "Politeknik Negeri Lhokseumawe",
        description: "Teknik Informatika | August 2024 - Present",
      },
    ],
  },
  certifications: {
    value: "Certifications",
    data: [
      {
        value: "eBPF Getting Started",
        description: "Isovalent | Issued December 2025",
        href: "https://www.credly.com/badges/ec2001f7-8b28-4187-8a17-e6284ccf5ad8/linked_in_profile",
      },
      {
        value: "Cilium LB-IPAM & L2",
        description: "Isovalent | Issued June 2026",
        href: "https://www.credly.com/badges/9710621c-945f-44a4-a695-bb2b05af26d4/linked_in_profile",
      },
      {
        value: "Discovery: Platform Engineer",
        description: "Isovalent | Issued December 2025",
        href: "https://www.credly.com/badges/b805ecba-1c0b-4afb-a78b-b54495a5c4dd/linked_in_profile",
      },
      {
        value: "Belajar Membuat Aplikasi Web dengan React",
        description: "Dicoding Indonesia | Issued June 2026",
        href: "https://www.dicoding.com/certificates/4EXG1RJ8EPRL",
      },
      {
        value: "Code Generation & Optimization with IBM Granite",
        description: "Hacktiv8 x IBM SkillsBuild Student Development Initiative | Issued August 2025",
        href: "https://www.credly.com/badges/af6c8d8c-da8f-4f19-a213-9e63b2f3bd93/linked_in_profile",
      },
      {
        value: "Belajar Prinsip Pemrograman SOLID",
        description: "Dicoding Indonesia | Issued October 2025",
        href: "https://www.dicoding.com/certificates/N9ZO2M7N6PG5",
      },
      {
        value: "Introduction to Cybersecurity",
        description: "Cisco | Issued April 2026",
        href: "https://www.credly.com/badges/f2705f25-3274-4c1f-ab4c-0395791532c5/linked_in_profile",
      },
      {
        value: "Introduction to Information Security",
        description: "Cyber Academy Indonesia | Issued September 2023",
        href: "https://www.cyberacademy.id/certificate/PKMI1109231611",
      },
      {
        value: "Belajar Penerapan Data Science dengan Microsoft Fabric",
        description: "Dicoding Indonesia | Issued April 2026",
        href: "https://www.dicoding.com/certificates/1OP8R4N6LZQK",
      },
      {
        value: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
        description: "Dicoding Indonesia | Issued April 2026",
        href: "https://www.dicoding.com/certificates/QLZ99V437Z5D",
      },
      {
        value: "Belajar Fundamental Deep Learning",
        description: "Dicoding Indonesia | Issued August 2026",
        href: "https://www.dicoding.com/certificates/1OP8768Y1ZQK",
      },
    ],
  },
};