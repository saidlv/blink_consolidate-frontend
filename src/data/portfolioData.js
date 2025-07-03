// Portfolio data structure based on Flutter constants and data.json
export const portfolioData = {
  personal: {
    name: "Blink Consolidate",
    //fullName: "Muhammad Hamza",
    email: "jobs@mhmz.com",
    subtitle: [
      "Mobile App Development",
      "Web Development",
      "SEO",
      "UI/UX Design",
      "Digital Marketing"
    ],
    welcomeText: "WELCOME TO!",
    aboutCompany: "Blink Consolidate is the one-stop source for acquiring a wide range of IT services with a team of hardworking and skilled professionals to move businesses to the next level.Our value is not just limited to assembling teams, We own and guarantee the successful delivery of your project.Expertise in various business domains allows us to create innovative, and future-proof software solutions of any complexity."
  },
  
  socialLinks: [
    {
      platform: "facebook",
      url: "https://facebook.com/mhmzdev",
      icon: "facebook"
    },
    {
      platform: "instagram", 
      url: "https://instagram.com/mhmzdev",
      icon: "instagram"
    },
    {
      platform: "twitter",
      url: "https://twitter.com/mhmzdev", 
      icon: "twitter"
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/mhmzdev",
      icon: "linkedin"
    },
    {
      platform: "github",
      url: "https://github.com/mhmzdev",
      icon: "github"
    },
    {
      platform: "whatsapp",
      url: "https://wa.me/923460159889",
      icon: "whatsapp"
    }
  ],

  technologies: [
    "Flutter",
    "Dart", 
    "Python",
    "Java",
    "C++",
    "HTML",
    "CSS",
    "Bootstrap"
  ],

  services: [
    {
      id: 1,
      name: "Mobile App Development", 
      description: "Android app development via Flutter\n- Splash Screen\n- Firebase Auth/Cloud\n- REST APIs\n- Maps integration and more...!",
      icon: "/assets/services/mobile.jpg",
      category: "development"
    },
    {
      id: 2,
      name: "Web Development",
      description: "Modern Web Development\n- React & Next.js\n- Flutter Web\n- Responsive Design\n- Progressive Web Apps\n- API Integration and more...!", 
      icon: "/assets/services/web.jpg",
      category: "development"
    },
    {
      id: 3,
      name: "UI/UX Design",
      description:"Modern UI/UX Designing\n- Adobe XD\n- Mobile & Web designs\n- Interactive UI designs\n- Responsiveness\n- Promo Videos and more..!",
      icon: "/assets/services/ux.jpg", 
      category: "design"
    },
    {
      id: 4,
      name: "Digital Marketing",
      description: "Comprehensive Digital Marketing\n- Social Media Marketing\n- Content Marketing\n- Brand Strategy\n- Campaign Management\n- Analytics & Reporting and more...!",
      icon: "/assets/services/Marketing.png",
      category: "marketing"
    },
    {
      id: 5,
      name: "Search Engine Optimization",
      description: "Professional SEO Services\n- Keyword Research\n- On-page Optimization\n- Technical SEO\n- Link Building\n- Performance Analytics and more...!",
      icon: "/assets/services/search.png",
      category: "seo"
    }
  ],

  projects: [
    {
      id: 1,
      title: "HereIam",
      description: "A travel social media app that allows people to share their travel experience with family and friends.",
      technologies: ["Flutter", "Firebase"],
      icon: "/assets/projects/hereiam.png",
      banner: "/assets/projects/hereiamB.png",
      githubUrl: "",
      liveUrl: "",
      featured: true
    },
    {
      id: 2, 
      title: "COIVD 19 - Tracker",
      description: "A live trakcer for COVID19 stats across the Globe and my Home country Pakistan. It uses APIs so the data is live.",
      technologies: ["Flutter", "API Integration"],
      icon: "/assets/projects/covid.png",
      banner: "/assets/projects/covidB.png", 
      githubUrl: "",
      liveUrl: "",
      featured: true
    },
    {
      id: 3,
      title: "Messenger Chat Head UI", 
      description: "Tried to clone the famous Chat Heads by Facebook Messenger using Flutter. Its basically in-app not exactly like the original chat head.",
      technologies: ["Flutter", "UI/UX"],
      icon: "/assets/projects/messenger.png",
      banner: "",
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      id: 4,
      title: "flutter.dev - Flutter Web",
      description: "Flutter Official Site clone using Flutter Web. Try the live site here. For the time being its not responsive fully so there might be responsiveness issues.",
      technologies: ["Flutter Web"], 
      icon: "/assets/projects/flutter.png",
      banner: "",
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      id: 5,
      title: "Earbender",
      description: "A concept of Music App developed using Flutter. Having functionality of playing Audio.",
      technologies: ["Flutter", "Audio"],
      icon: "/assets/projects/earbender.png", 
      banner: "",
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      id: 6,
      title: "File Transfer Protocol", 
      description: "A simple GUI based Java application that sends file from Client to Server but not the other way around.",
      technologies: ["Java", "Networking"],
      icon: "/assets/projects/java.png",
      banner: "",
      githubUrl: "",
      liveUrl: "",
      featured: false
    }
  ],

  contact: {
    phone: "(+92) 346 0159889",
    email: "jobs@mhmz.com", 
    location: "Saman Arcade Gulberg 3 Office#S9 2nd Floor Lahore",
    whatsapp: "https://wa.me/923460159889"
  },
};

export default portfolioData;
