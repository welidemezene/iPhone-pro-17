import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Bionic Ultra.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium Ultra Edge.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 17 Pro has the",
      "most advanced camera system",
      "ever. LightRay AI Zoom.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new SecurePort.", "The future of connectivity."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 17 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 17 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 17 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 17 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

// New iPhone 17 Pro specific data
export const iphone17Features = [
  {
    title: "A17 Bionic Ultra Chip",
    description: "The most powerful chip ever in a smartphone with 40% faster performance",
    icon: "🚀",
    specs: {
      cpu: "3.2 GHz 8-core",
      gpu: "8-core",
      neural: "16-core",
      improvement: "+40%"
    }
  },
  {
    title: "240Hz ProMotion Display",
    description: "Ultra-smooth 240Hz refresh rate for gaming and content creation",
    icon: "📱",
    specs: {
      size: "6.1\"",
      resolution: "2556 x 1179",
      refresh: "240Hz",
      brightness: "2000 nits"
    }
  },
  {
    title: "LightRay AI Zoom",
    description: "Revolutionary AI-powered zoom technology with crystal clear quality",
    icon: "🔍",
    specs: {
      main: "64MP",
      ultra: "20MP",
      tele: "12MP 5x",
      ai: "LightRay"
    }
  },
  {
    title: "Titanium Ultra Edge",
    description: "Aerospace-grade titanium with ultra-thin bezels for maximum screen",
    icon: "💎",
    specs: {
      material: "Titanium",
      bezels: "0.5mm",
      weight: "185g",
      durability: "Military grade"
    }
  },
  {
    title: "SecurePort USB-C",
    description: "Next-generation USB-C with enhanced security and fast transfer",
    icon: "⚡",
    specs: {
      speed: "40Gbps",
      power: "45W",
      security: "Hardware encrypted",
      compatibility: "Universal"
    }
  }
];

export const comparisonData = {
  iphone15: {
    name: "iPhone 15 Pro",
    chip: "A17 Pro",
    display: "120Hz",
    camera: "48MP",
    battery: "23 hours",
    storage: "1TB max",
    price: "$999"
  },
  iphone17: {
    name: "iPhone 17 Pro",
    chip: "A17 Bionic Ultra",
    display: "240Hz",
    camera: "64MP",
    battery: "32 hours",
    storage: "2TB max",
    price: "$1,199"
  }
};

export const techSpecs = {
  performance: {
    chip: "A17 Bionic Ultra",
    cpu: "3.2 GHz 8-core",
    gpu: "8-core",
    neural: "16-core Neural Engine",
    ram: "8GB LPDDR5"
  },
  display: {
    size: "6.1\"",
    type: "Super Retina XDR OLED",
    resolution: "2556 x 1179",
    refresh: "240Hz ProMotion",
    brightness: "2000 nits peak"
  },
  camera: {
    main: "64MP f/1.6",
    ultra: "20MP f/2.2",
    tele: "12MP f/2.8 5x optical",
    front: "24MP f/1.9",
    features: ["LightRay AI Zoom", "Cinematic mode", "ProRAW"]
  },
  battery: {
    capacity: "4500mAh",
    life: "Up to 32 hours",
    charging: "45W wired, 15W wireless",
    magsafe: "15W"
  },
  connectivity: {
    port: "SecurePort USB-C",
    speed: "40Gbps",
    wifi: "Wi-Fi 7",
    cellular: "5G Advanced",
    bluetooth: "5.4"
  }
};