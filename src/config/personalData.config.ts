import { PersonalData } from "../types/personalData";

export const RESUME_OS_MAP: Record<string, string> = {
  fedora: "/resumeCons.pdf",
  ubuntu: "/resume.pdf",
  kali: "/resumeSec.pdf",
};

export const PERSONAL_DATA: PersonalData = {
  personalInfo: {
    name: "Muhammad Dhiyaul Atha",
    shortName: "Atha",
    title: "Open Source Enthusiast | DevOps & Backend | Linux | Cloud Native",
    profileImage: "/preload/photo1.jpg",
    fullNameLogo: "/preload/favicon.svg",
    logo: "/preload/favicon.svg",
    email: "",
    website: "mdhiyaulatha.tech",
    uname: "Bangkah",
    aboutMe:
      "I'm Muhammad Dhiyaul Atha, an Informatics Engineering student and open source enthusiast from Nagan Raya, Indonesia.\nI build Linux tools, backend systems, and cloud-native projects.",
    aboutDescription:
      "I'm an Informatics Engineering student interested in Linux, backend development, DevOps, and cloud-native technologies. I enjoy building and maintaining open-source projects, particularly Linux tools, CLI applications, backend systems, and developer utilities. I'm currently learning Linux administration, Docker, REST APIs, CI/CD, automation, backend security, and reliable software systems. Open to internships, freelance opportunities, collaboration, and open-source projects.",
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
        value: "X",
        href: "https://x.com/mdhiyaulatha",
      },
      {
        value: "Instagram",
        href: "https://www.instagram.com/mdhiyaulatha/",
      },
      {
        value: "Website",
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
      href: "https://x.com/mdhiyaulatha",
      value: "X",
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
      href: "https://mdhiyaulatha.tech/",
      value: "Website",
      style: {
        color: "#B48EAD",
        background: "rgba(180, 142, 173, 0.15)",
        border: "1px solid rgba(180,142,173,0.35)",
      },
    },
    {
      href: "", // Will be set dynamically based on theme
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
    data: [],
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
          "Fast, minimal, and reliable Linux CLI utility for displaying network and system information.",
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
        value: "Portfolio Website",
        description:
          "Linux-inspired portfolio website for Muhammad Dhiyaul Atha.",
        href: "https://mdhiyaulatha.tech/",
      },
    ],
  },
  achievements: {
    value: "Key Achievements",
    data: [],
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
        href: "https://www.credly.com/",
      },
      {
        value: "Cilium LB-IPAM & L2",
        description: "Isovalent | Issued June 2026",
        href: "https://www.credly.com/",
      },
      {
        value: "Discovery: Platform Engineer",
        description: "Isovalent",
        href: "https://www.credly.com/",
      },
      {
        value: "Code Generation & Optimization with IBM Granite",
        description: "Hacktiv8 x IBM SkillsBuild Student Development Initiative",
        href: "https://www.ibm.com/granite",
      },
    ],
  },
};
