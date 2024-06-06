import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Financial App',
        description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 3,
        name: 'IOT Based Android Application',
        description: "My team and I developed an IoT-based Android application focused on smart home management. As a full-stack developer, I contributed to building the app's frontend and backend functionalities. Using Java for Android development, I integrated IoT sensors and devices, enabling users to monitor and control their home environment remotely. We utilized Firebase for backend services, integrating real-time data syncing and authentication. Additionally, I implemented UI/UX design principles to ensure a seamless user experience.",
        tools: ['Java', 'C', 'XML', 'SQLite', 'Arduino', 'Android Studio', 'Firebase', 'IoT Sensors'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
   },
    {
        id: 4,
        name: 'Android POS Application',
        description: "My team and I developed an Android POS (Point of Sale) application tailored for various banks in Ethiopia. As a full-stack developer, I contributed to the development of the application's frontend and backend functionalities. On the frontend, I focused on crafting a user-friendly interface using Java and XML. For backend operations, I utilized technologies such as SQLite for local data storage and integration with bank APIs for transaction processing and authorization.",
        tools: ['Java', 'Android SDK', 'XML', 'SQLite', 'OkHttp', 'Payment Gateway Integration'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
