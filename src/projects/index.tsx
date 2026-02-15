import '../index.css';
import ProjectItem from './ProjectItem';
import type { Project } from './ProjectItem';

const projects: Project[] = [
    {
        name: "The Starshop Discord Bot", iconURL: "https://i.imgur.com/0GfSyrD.jpeg", role: "Sole Developer",
        description: "A Discord Chat Bot with more than 40 commands with various purposes: Discord server moderation and management, entertainment, and user profiling. The Starshop bot features a text-based economy and levelling system as well as a text-based RPG game complete with combat and equipment mechanics.",
        keywords: "Text-based RPG; Discord Server Management; Moderation; Currency; Entertainment and Fun",
        techs: ["javascript", "nodejs", "mongodb-nosql", "discord-api", "mongoose", "git"], github: true, githubURL: "https://github.com/daland4ni/dcbot-starshop",
        featured: false, featureURL: "/projects/starshop-bot"
    },
    {
        name: "Pet Connect", iconURL: "https://i.imgur.com/D3xk7Wk.png", role: "Backend Developer",
        description: "Pet Connect is an academic project made to connect pet shelters and soon-to-be pet owners together. This project features an automatic matching system that matches a prospect user to the pets in the database based on their preferences. It also has an automatic evaluation system that deems if an applicant is eligible to adopt a pet based on the shelters' criteria.",
        keywords: "Community-driven project; Automation; CRUD Functionalities",
        techs: ["php", "mysql", "bootstrap", "git"], github: true, githubURL: "https://github.com/daland4ni/wms-pcc",
        featured: false, featureURL: "/projects/pet-connect"
    },
    {
        name: "My Portfolio", iconURL: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/513479784_23922163184079636_6673064603539929512_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=foM_8Au5fAMQ7kNvwFwGQtk&_nc_oc=AdkMeL9TYRsyl-dfTQvSu1CvzsGFrAqDd3Npyuv6lKgq4XIhaDMk3WLQFI7D7GVz48SwivDlZPtbWsu2w2s951KS&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=QBBQw5RKOQYinRgwxGJvTA&oh=00_AfsG4dEy79c7Qf1_nbqeU4FCxm0NS6Li9FSA2r_Mwaio2g&oe=699789B1",
        role: "Sole Developer",
        description: "A project made to feature previous projects. A good exercise to recall skills and projects that honed programming. Studied hero-style driven design that sells the person behind the projects.",
        keywords: "Responsive Design", 
        techs: ["typescript", "reactjs", "tailwind","html", "git"], github: true, githubURL: "https://github.com/daland4ni/portfolio",
        featured: false, featureURL: "#"
    },
    {
        name: "PUP Map and Locator", iconURL: "https://www.pngkey.com/png/full/52-528919_the-pup-logo-polytechnic-university-of-the-philippines.png",
        role: "Sole Developer",
        description: "Not affiliated by PUP. An academic project used to locate specific buildings and locations in PUP. The web app features a 'hover on map for more info' tooltip and a location highlighter that makes a building on the map glow depending on which button you pressed on the side panel. This project focuses on polygons and scripting.",
        keywords: "Shape and Polygon Manipulation; Image Manipulation", 
        techs: ["javascript", "bootstrap","html"], github: false, githubURL: "#",
        featured: false, featureURL: "#"
    },
    {
        name: "Techbuzzer Inventory System", iconURL: "https://imgur.com/hMsOkFI.jpeg",
        role: "Backend Developer",
        description: "An academic project made to log an inventory of a store, in this case, a tech shop. This is one of the first projects I've made with CRUD functionality. This project is mostly add, edit, and delete in functionality.",
        keywords: "CRUD Functionality", 
        techs: ["java","apache-netbeans", "mysql", "bootstrap"], github: false, githubURL: "#",
        featured: false, featureURL: "#"
    }
]
function Projects() {
    return (
        <div className=''>
            {/* PROJECT CARD */}
            <ProjectItem projects={projects} />
        </div>
    )
}

export default Projects;