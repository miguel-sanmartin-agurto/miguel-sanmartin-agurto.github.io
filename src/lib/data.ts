export const personalInfo = {
  name: "Miguel San Martin Agurto",
  location: "Chile 🇨🇱",
  email: "miguel.sanmartin.agurto@gmail.com",
  github: "https://github.com/miguel-sanmartin-agurto",
  linkedin: "https://linkedin.com/in/miguel-san-martin-agurto",
  profilePicture: "/picture_cv.jpg",
  heroDescription:
    "Electronic Engineer graduated from Universidad Técnica Federico Santa María (6-years program) in 2018, with experience in power systems, focused on energy backup solutions. \n I have worked with UPS systems ranging from 1 to 300 kVA, using both lead-acid and lithium battery technologies.\n I also have experience in photovoltaic systems, both on-grid and off-grid, with installations up to 120 kWp. \n In addition, I have participated in large-scale BESS projects in northern Chile, including 48 MW (264 MWh) and 68 MW (418 MWh) systems, gaining exposure to utility-scale energy storage. \n Alongside my professional work, I actively develop my skills in hardware design, embedded systems, and IoT projects during my free time. I work with microcontrollers and enjoy building practical engineering solutions that combine electronics and software.",
};

export const workExperience = [
  {
    company: "Onduladores de Chile",
    location: "Santiago",
    position: "Applications engineer",
    period: "Mar 2022 - Feb 2025",
        achievements: [
      " Cold and Hot commissioning of BESS systems (68 MW / 48 MW) for Sungrow (as contrator)",
      " Development and management of energy backup projects for critical loads, integrating technical desing and economic evaluation",
      " Analysis of financial and technical KPIs to support management decision-making",
      " Design of basic software and hardware tools for internal use",
    ],
    images: ["/experiencia/AE_1.jpg","/experiencia/AE_2.jpg","/experiencia/AE_3.jpg","/experiencia/AE_4.jpg","/experiencia/AE_5.jpg","/experiencia/AE_6.jpg","/experiencia/AE_7.jpg","/experiencia/AE_8.jpg"]
  },
  {
    company: "Onduladores de Chile",
    location: "Santiago",
    position: "Field service engineer",
    period: "Sep 2019 - Feb 2022",
    achievements: [
      " Responsible for installation, repair, and maintenance of energy backup electrical systems ranging from 1 to 300 kVA",
      " Preparation of calculation reports and technical documetation for clients",
      " Training clients on the use and operation of energy backup systems",
      " On-grid and off-grid solar PV commising (up to 120 kWp) panel installation and wiring",
    ],
    images: ["/experiencia/FS_1.jpg","/experiencia/FS_2.jpg","/experiencia/FS_3.jpg","/experiencia/FS_4.jpg","/experiencia/FS_5.jpg","/experiencia/FS_6.jpg","/experiencia/FS_7.jpg","/experiencia/FS_8.jpg","/experiencia/FS_9.jpg","/experiencia/FS_10.jpg"]
  },
  {
    company: "Centro científico tecnológico de Valparaíso (CCTVal).",
    location: "Valparaíso",
    position: "Intern: Research assistant",
    period: "Dic 2018 - Jul 2019",
    achievements: [
      " Development of an automated station for measuring the radioactivity of sodium-22 isotope, with a specific focus on medical applications",
      " Review, calibration, and soldering of the photon detector circuit",
      " Data collection related to measurements for subsequent analysis",
    ],
    images: ["/experiencia/RA_1.jpg","/experiencia/RA_2.jpg","/experiencia/RA_3.jpg","/experiencia/RA_4.jpg","/experiencia/RA_5.jpg","/experiencia/RA_6.jpg","/experiencia/RA_7.jpg","/experiencia/RA_8.jpg"]
  },
];

export const education = [
  {
    institution: "Universidad Técnica Federico Santa María",
    location: "Valparaíso, Chile 🇨🇱 ",
    degree: "Bachelor of Science in Electronic Engineering (6 years - program)",
    period: "2011 - 2018",
    achievements: [
      "Implementation of a magnetohidrodynamic propulsion system for vessels, October 2018",
    ],
  },
];
export const skills = {
  programmingLanguages: [
    "Python",
    "C / C++",
    "SQL",
    "PLC programming",   
  
  ],
  softwares: [
    "Matlab-Simulink",
    "Plecs",
    "Kicad",
    "Freecad",
    "Microsoft office (Excel, Powerpoint, BI)",
  ],
  embeddedsystems: ["Microcontrollers (AVR, ESP32)", "Protocols (I2C, SPI, UART, LoRaWan)" , ],
  collaborativetools: ["Microsoft Teams", "Jira", "Trello",],
 
  
};

export const projects = [
  {
    title: "Ultra-Low Power BLE Sensor Node (ATtiny1616)",
    github: "https://github.com/miguel-sanmartin-agurto/Low-Power-Sensor-Node",
    description: [
      "A compact, battery-powered IoT sensor node designed for home security and environmental monitoring.",
      "This device measures atmospheric data and transmits it via Bluetooth Low Energy (BLE), utilizing deep sleep modes to maximize battery life on a single LIR2032 coin cell.",
    ],
  },
  {
    title: "BLE-to-Cloud-Gateway (ESP32)",
    github: "https://github.com/miguel-sanmartin-agurto/BLE-to-Cloud-Gateway",
    description: [
      "This project serves as the central hub for the 'Enviro-Display Node' system.",
      "Its primary function is to act as a bridge between the low-power sensor network (BLE) and the Internet (Wi-Fi), pushing environmental data to a cloud platform. ",
    ],
  },
    {
    title: "FireWatch-WL: Autonomous LoRaWAN Wildfire Risk Monitor",
    github: "https://github.com/miguel-sanmartin-agurto/FireWatch-WL",
    description: [
      "This project details the design and implementation of an ultra-low-power, autonomous sensor node built on the STM32WL System-on-Chip (SoC) for early wildfire risk detection. ",
    ],
  },
      {
    title: "USB-C LiPo Charger",
    github: "https://github.com/miguel-sanmartin-agurto/USB-C-LiPo-Charger",
    description: [
      "A minimal, single-cell (1S) LiPo battery charger powered by a USB-C input. This project is designed to be a simple, low-cost, and compact charging solution for hobbyist electronics.",
    ],
  },
];

export const awards = [
  {
    name: "English level B2",
    issuer: "International english language testing system (IELTS)",
    date: "May 2023",
    type: "International",
    position: "6.5 score",
  },
  {
    name: "NFPA-70E: Electrical safety in workplace",
    issuer: "National fire protection association",
    date: "Ago 2024",
    type: "National",
    position: "",
  },
    {
    name: "Dolor Sit Amet Prize",
    issuer: "Ipsum Foundation",
    date: "Feb 2021",
    type: "National",
    position: "Runner-up",
  },
  
];
