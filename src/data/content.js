import logoDark from "../assets/LogoDark-L.png";
import logoLight from "../assets/LogoLight-L.png";
import bannerImg from "../assets/h5_banner_img01.png";
import shape01 from "../assets/h5_banner_shape01.png";
import shape02 from "../assets/h5_banner_shape02.png";
import shape04 from "../assets/h5_banner_shape04.png";

// Project Images
import project01 from "../assets/project01.jpg";
import project02 from "../assets/project02.jpg";
import project04 from "../assets/project04.jpg";
import project05 from "../assets/project05.jpg";

// Team Images
import team01 from "../assets/team_img01.jpg";
import team02 from "../assets/team_img02.jpg";
import team03 from "../assets/team_img03.jpg";
import team04 from "../assets/team_img04.jpg";

// Instagram Images
import insta01 from "../assets/footer_insta01.jpg";
import insta02 from "../assets/footer_insta02.jpg";
import insta03 from "../assets/footer_insta03.jpg";
import insta04 from "../assets/footer_insta04.jpg";
import insta05 from "../assets/footer_insta05.jpg";
import insta06 from "../assets/footer_insta06.jpg";

export const navigation = {
  logo: {
    dark: logoDark,
    light: logoLight,
    alt: "MorGab Logo",
  },
  links: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ],
  actionButton: {
    text: "LET'S TALK",
    path: "/contact",
  },
};

export const heroContent = {
  title: "Building the Next Generation of Digital Experiences",
  subtitle:
    "MorGab Technologies transforms ideas and data into high-impact digital solutions. We help businesses innovate faster, scale smarter, and stay ahead in an ever-evolving tech world.",
  button: {
    text: "GET STARTED",
    link: "/contact",
  },
  images: {
    banner: bannerImg,
    shapes: [shape01, shape02, shape04],
  },
  stats: {
    value: "15K",
    label: "Business Growth",
  },
};

export const projectsContent = {
  sectionTitle: "Our Recent Projects",
  projects: [
    {
      id: 1,
      title: "Business Consulting",
      category: "Business Strategy",
      image: project01,
      link: "/project-details",
    },
    {
      id: 2,
      title: "Digital Agency",
      category: "Business Services",
      image: project02,
      link: "/project-details",
    },
    {
      id: 3,
      title: "Business Accounting",
      category: "Financing Management",
      image: project04,
      link: "/project-details",
    },
    {
      id: 4,
      title: "Marketing Idea",
      category: "Modern Strategy",
      image: project05,
      link: "/project-details",
    },
  ],
};

export const servicesContent = {
  sectionSubtitle: "WHAT WE OFFER",
  sectionTitle: "Quality Tech Services Built for Growth",
  sectionDescription:
    "MorGab Technologies provides professional web and software development services designed to help your business stand out and succeed.",
  services: [
    {
      id: 1,
      iconName: "FaCode",
      title: "Web Development",
      description:
        "We design and build fast, responsive, and scalable websites and web applications tailored to your business needs using modern technologies.",
      btnText: "READ MORE",
    },
    {
      id: 2,
      iconName: "FaMobileAlt",
      title: "Software & App Solutions",
      description:
        "We develop reliable software solutions and mobile applications that solve real problems and improve business efficiency.",
      btnText: "READ MORE",
    },
    {
      id: 3,
      iconName: "FaFacebookMessenger",
      title: "Social Media Marketing",
      description:
        "We help businesses build strong online presence and engage with their target audience through strategic social media management and marketing campaigns.",
      btnText: "READ MORE",
    },
    {
      id: 4,
      iconName: "FaBullhorn",
      title: "Branding",
      description:
        "We create compelling brand identities that reflect your business values and resonate with your target audience.",
      btnText: "READ MORE",
    },
    {
      id: 5,
      iconName: "FaPenRuler",
      title: "UI/UX Design",
      description:
        "We create visually stunning and user-friendly interfaces that enhance user experience and drive business results.",
      btnText: "READ MORE",
    },
    {
      id: 6,
      iconName: "FaRocket",
      title: "Graphic Design",
      description:
        "",
      btnText: "READ MORE",
    },
    {
      id: 7,
      iconName: "FaBullhorn",
      title: "Digital Advertising",
      description:
        "Beauis utter enim amet lacus ornare ullamcorper Praesent neque purus rhoncus.",
      btnText: "READ MORE",
    },
    {
      id: 8,
      iconName: "FaDatabase",
      title: "Data Management",
      description:
        "Beauis utter enim amet lacus ornare ullamcorper Praesent neque purus rhoncus.",
      btnText: "READ MORE",
    },
  ],
};

export const teamContent = {
  sectionSubtitle: "Meet Our Team",
  sectionTitle: "Financial Expertise You Can Trust",
  sectionDescription:
    "Our power of choice is untrammelled and when nothing prevents being able to do what we like best every pleasure.",
  members: [
    {
      id: 1,
      name: "Jone Cooper",
      role: "Finance Advisor",
      image: team01,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      name: "Eleanor Pena",
      role: "Business Eng.",
      image: team02,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 3,
      name: "Floyd Miles",
      role: "Marketing",
      image: team03,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 4,
      name: "Ralph Edwards",
      role: "Developer",
      image: team04,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 5,
      name: "Bessie Cooper",
      role: "Designer",
      image: team01,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 6,
      name: "Arlene McCoy",
      role: "Manager",
      image: team02,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 7,
      name: "Theresa Webb",
      role: "HR Expert",
      image: team03,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 8,
      name: "Jerome Bell",
      role: "SEO Expert",
      image: team04,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ],
};

export const contactInfo = {
  email: "morgab001@gmail.com",
  phone: "+234 916 349 7296",
  address: "Port Harcourt, Rivers State Nigeria",
  socials: [
    { name: "Facebook", link: "#", icon: "FaFacebookF" },
    { name: "Twitter", link: "#", icon: "FaTwitter" },
    { name: "Instagram", link: "#", icon: "FaInstagram" },
    { name: "Pinterest", link: "#", icon: "FaPinterestP" },
    { name: "Youtube", link: "#", icon: "FaYoutube" },
  ],
};

export const footerContent = {
  instagramPosts: [
    { id: 1, img: insta01, link: "https://www.instagram.com/p/1" },
    { id: 2, img: insta02, link: "https://www.instagram.com/p/2" },
    { id: 3, img: insta03, link: "https://www.instagram.com/p/3" },
    { id: 4, img: insta04, link: "https://www.instagram.com/p/4" },
    { id: 5, img: insta05, link: "https://www.instagram.com/p/5" },
    { id: 6, img: insta06, link: "https://www.instagram.com/p/6" },
  ],
  infoLinks: [
    { name: "About us", path: "/about" },
    { name: "Meet our team", path: "/team" },
    { name: "Our Services", path: "/services" },
    { name: "Contact us", path: "/contact" },
  ],
  topLinks: [
    { name: "How it's Work", path: "#" },
    { name: "Partners", path: "#" },
    { name: "Testimonials", path: "#" },
  ],
  newsletter: {
    title: "Subscribe Newsletter",
    placeholder: "E-Mail Type . . .",
    buttonText: "Subscribe",
  },
  copyright: `Copyright © ${new Date().getFullYear()} MorGab | All Right Reserved`,
};

export const aboutFeaturesContent = {
  sectionSubtitle: "SPECIAL FEATURES",
  sectionTitle: "Transforming Your Business With Technology",
  features: [
    {
      iconName: "HiOutlinePresentationChartLine",
      title: "Strategic marketing",
      description:
        "Mauris utanim sitamet lacus ornar eary ullamcorper Praesent plaacera treat neque eu purus rhoncu",
    },
    {
      iconName: "HiOutlineDatabase",
      title: "Insights & analytics",
      description:
        "Mauris utanim sitamet lacus ornar eary ullamcorper Praesent plaacera treat neque eu purus rhoncu",
    },
    {
      iconName: "HiOutlineReceiptTax",
      title: "Tax Audit",
      description:
        "Mauris utanim sitamet lacus ornar eary ullamcorper Praesent plaacera treat neque eu purus rhoncu",
    },
  ],
};

export const tickerContent = [
  "Investment",
  "Target",
  "Marketing",
  "Finance Advisor",
  "Business Strategy",
  "Management",
  "Market Research",
];
