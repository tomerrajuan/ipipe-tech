export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`
}

export const company = {
  name: "iPIPE Ltd",
  tagline: "Inspect water pipes from the inside",
  email: "ipipe.tech@gmail.com",
  location: "Israel",
  linkedin: "https://www.linkedin.com/company/ipipe-ltd/",
  youtube: "https://www.youtube.com/watch?v=ShJvjNNYe0k",
  youtubeEmbed: "https://www.youtube.com/embed/ShJvjNNYe0k",
}

export const nav = [
  { to: "/", label: "Home" },
  { to: "/technology", label: "Technology" },
  { to: "/products", label: "Products" },
  { to: "/news", label: "News" },
  { to: "/about", label: "About" },
]

export const stats = [
  { value: "4-30\"", label: "Pipe diameter" },
  { value: "50 bar", label: "Operating pressure" },
  { value: "10 km", label: "Inspection range" },
  { value: "Live", label: "Networks stay in service" },
]

export const pillars = [
  {
    n: "01",
    title: "Advanced leak detection",
    body: "Real-time monitoring of water distribution networks so leaks and corrosion are found early, before they become failures, outages, or emergency replacements.",
  },
  {
    n: "02",
    title: "Corrosion monitoring",
    body: "Continuous condition data lets utilities plan maintenance instead of guessing. Safer networks, fewer surprises, lower lifetime cost.",
  },
  {
    n: "03",
    title: "Efficient water management",
    body: "Diagnostics that tell you which pipes actually need work. Stop blindly renewing old pipes and put the budget where it changes outcomes.",
  },
]

export const capabilities = [
  {
    title: "Navigation",
    body: "Locate the device and respond to obstacles inside pressurized water networks, including tight bends and unmapped segments.",
  },
  {
    title: "Inspection",
    body: "Carry visual, acoustic, pressure, temperature, flow, and other sensors. A platform for the measurements the network actually needs.",
  },
  {
    title: "Communication",
    body: "Transfer signals through water pipes so operators stay connected while the sub is inside a live, pressurized system.",
  },
]

export const detects = [
  "Leaks",
  "Corrosion",
  "Faulty welds",
  "Blockages",
  "Unauthorized connections",
  "Unmapped network segments",
]

export const products = [
  {
    slug: "neptune",
    name: "Neptune",
    role: "Tight networks",
    diameter: "4\"-8\"",
    diameterCm: "10-20 cm",
    pressure: "Up to 50 bar",
    distance: "Up to 1 km",
    rangeKm: 1,
    image: "images/neptune.jpg",
    summary:
      "Built for smaller-diameter potable lines where space is tight and inspection still has to happen while the network is in use.",
  },
  {
    slug: "koi",
    name: "Koi",
    role: "Mid-range mains",
    diameter: "8\"-12\"",
    diameterCm: "20-30 cm",
    pressure: "Up to 50 bar",
    distance: "Up to 3 km",
    rangeKm: 3,
    image: "images/koi.jpg",
    summary:
      "The workhorse for typical urban distribution diameters. Enough range and payload for routine condition surveys.",
  },
  {
    slug: "dolphin",
    name: "Dolphin",
    role: "Long-haul mains",
    diameter: "12\"-30\"",
    diameterCm: "30-75 cm",
    pressure: "Up to 50 bar",
    distance: "Up to 10 km",
    rangeKm: 10,
    image: "images/dolphin.jpg",
    summary:
      "Long-distance inspection for larger mains. The laboratory video shows Dolphin traveling inside a pipe under test.",
  },
]

export const team = [
  {
    name: "Dr. Menashe Rajuan",
    role: "CEO and Founder",
    photo: "images/menashe.jpg",
    bio: "A technology entrepreneur with a strong background in physics, mathematics, chemistry, and software. Over 30 years in research and development and senior management.",
  },
  {
    name: "Baruch Alfia, LL.M.",
    role: "Legal & risk",
    photo: "images/baruch.jpg",
    bio: "Former SVP at ICC-Israel credit cards, with expertise in risk management and compliance. Recanati Business School for senior management. Advisor to Visa EU and Visa International; entrepreneur in payments.",
  },
  {
    name: "Prof. Daniel Weise",
    role: "Robotics",
    photo: "images/daniel.jpg",
    bio: "A leading expert in robotics. Former Head of the Robotics Institute at the Technion and a member of the Israel Academy of Sciences.",
  },
  {
    name: "Dr. Shimon Mizrahi, Ph.D.",
    role: "Sensing & imaging",
    photo: "images/shimon.png",
    bio: "Expert in ultra-low-power systems, 3D imaging, and image fusion. Holds numerous patents. More than two decades in development and management roles.",
  },
]

export const news = [
  {
    year: "2025",
    title: "KGAP+ program in Japan",
    body: "iPIPE is participating in the KGAP+ program in Japan.",
  },
  {
    year: "2025",
    title: "Follow-up GIN program, Vienna",
    body: "Participating in a follow-up Global Incubator Network program in Vienna.",
  },
  {
    year: "2025",
    title: "First pilot in Sicily, Italy",
    body: "First European field pilot in Sicily.",
  },
  {
    year: "2023-2025",
    title: "Ministry of Energy grant: magnetic propulsion and acoustics",
    body: "Fourth grant for the development of magnetic propulsion and acoustic communication, funded by the Ministry of Energy of Israel.",
  },
  {
    year: "2023",
    title: "GIN program, Vienna",
    body: "Participating in the Global Incubator Network program in Vienna.",
  },
  {
    year: "2023",
    title: "Second pilot with Hagihon, Jerusalem",
    body: "Second pilot with Hagihon, the water company of Jerusalem, Israel.",
  },
  {
    year: "2023",
    title: "Kineret Conference",
    body: "Presenting iPIPE's innovations at the Kineret Conference.",
  },
  {
    year: "2023",
    title: "Ministry of Energy grant: communications",
    body: "Grant for communication development funded by the Ministry of Energy of Israel.",
  },
  {
    year: "2022",
    title: "Ministry of Defense grant",
    body: "Third grant, funded by the Ministry of Defense of Israel.",
  },
  {
    year: "2020-2021",
    title: "Ministry of Science and Technology: second pilot grant",
    body: "Second grant for a pilot, funded by the Ministry of Science and Technology of Israel.",
  },
  {
    year: "2018-2019",
    title: "Ministry of Science and Technology: first grant",
    body: "First grant for a pilot, funded by the Ministry of Science and Technology of Israel.",
  },
]

export const faqs = [
  {
    q: "What is iPIPE's main focus?",
    a: "iPIPE Ltd builds inspection and diagnostics for potable water distribution networks, so utilities can keep systems safe and efficient without taking them offline.",
  },
  {
    q: "How do the devices work?",
    a: "Neptune, Koi, and Dolphin are mini wireless devices that operate inside pressurized pipes. They detect leaks, corrosion, and other issues in real time while the system stays in service.",
  },
  {
    q: "What can a survey find?",
    a: "Leaks, corrosion, faulty welds, blockages, unauthorized connections, and unmapped network segments, plus location and integrity data for the inspected run.",
  },
  {
    q: "What partnerships has iPIPE established?",
    a: "iPIPE has formed partnerships with major water corporations, including pilots with Hagihon in Jerusalem, and is expanding through programs in Europe and Japan.",
  },
  {
    q: "What grants has iPIPE received?",
    a: "Multiple Israeli government grants supporting the technology, including from the Ministry of Science and Technology, the Ministry of Defense, and the Ministry of Energy.",
  },
  {
    q: "What are the benefits of using iPIPE's subs?",
    a: "Real-time monitoring and detection, higher network safety, less water loss, and lower operational cost, because you repair what is actually failing instead of replacing blindly.",
  },
]

export const aboutValues = [
  {
    title: "Innovative tech",
    body: "Devices that detect leaks and corrosion in real time, so potable water systems keep their integrity.",
  },
  {
    title: "Efficiency",
    body: "Advanced inspection that reduces downtime and maintenance cost across the distribution network.",
  },
  {
    title: "Sustainability",
    body: "Solutions that protect water resources and support responsible management of existing infrastructure.",
  },
]
