import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Emna",
  lastName: "Jbeli",
  name: `Emna Jbeli`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpeg", // replace public/images/avatar.jpg with your own photo
  email: "amna.jebali@polytechnicien.tn",
  location: "Africa/Tunis", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Arabic", "French", "English", "German"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on my projects and engineering notes</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/emnajebali2024",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/emna-jbeli-b304a5279",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Software Engineer Portfolio`,
  description: `Portfolio of ${person.name}, fifth-year Software Engineering student seeking a PFE 2027 internship in full-stack development, DevOps and AI.`,
  headline: <>I build full-stack products and the pipelines that ship them</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Open to PFE 2027</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          See the AWS CI/CD project
        </Text>
      </Row>
    ),
    href: "/work/containerized-ci-cd-pipeline-on-aws",
  },
  subline: (
    <>
      I'm {person.firstName}, a fifth-year software engineering student at École Polytechnique de
      Sousse. I'm looking for a final-year internship where I can work on web platforms, DevOps
      automation and AI-powered features.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, software engineering student from Sousse, Tunisia`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a fifth-year Software Engineering student at École Polytechnique de Sousse. Through
        six internships and a series of academic projects, I've built full-stack applications,
        set up CI/CD pipelines and integrated AI features such as a chatbot assistant and a
        prediction model. I enjoy data processing, predictive modeling and automation, and I like
        solving concrete problems with intelligent solutions. I'm looking for a Final-Year
        Graduation Internship (PFE 2027).
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Oxymed Plus",
        timeframe: "Aug 2026 - Sep 2026",
        role: "Full-Stack Web Development Intern",
        achievements: [
          <>Developed the company website of OxymedPlus with the MERN stack.</>,
          <>Built REST APIs and implemented JWT-based authentication.</>,
          <>Integrated an AI chatbot assistant using the Groq API.</>,
        ],
        images: [],
      },
      {
        company: "Bee Coders",
        timeframe: "Jul 2026 - Aug 2026",
        role: "DevOps Intern",
        achievements: [
          <>
            Developed a full-stack e-commerce application with MongoDB, Express.js, Angular and
            Node.js, using REST APIs and JWT authentication.
          </>,
          <>
            Designed a complete CI/CD pipeline with Docker, Jenkins, Kubernetes, GitHub Actions,
            Terraform and Linux.
          </>,
        ],
        images: [],
      },
      {
        company: "Oxymed Plus",
        timeframe: "Jul 2025 - Sep 2025",
        role: "Full-Stack Web Development Intern",
        achievements: [
          <>
            Developed a web solution for the sales and rental of medical equipment and the
            management of related services, using Django, HTML, CSS and Bootstrap.
          </>,
        ],
        images: [],
      },
      {
        company: "Bee Coders",
        timeframe: "Jun 2025 - Jul 2025",
        role: "Full-Stack Web Development Intern",
        achievements: [<>Built a full-stack application with Spring Boot and Angular.</>],
        images: [],
      },
      {
        company: "Timelapse",
        timeframe: "Feb 2025 - Jun 2025",
        role: "Full-Stack Web Development Intern (End-of-Studies Project)",
        achievements: [
          <>
            Designed and developed a customized e-learning platform on Odoo 16 with Python, XML,
            HTML, CSS and JavaScript.
          </>,
          <>Tools: Odoo, PostgreSQL, StarUML, FileZilla and Docker.</>,
        ],
        images: [],
      },
      {
        company: "CloudiaSys",
        timeframe: "Jun 2023 - Jul 2023",
        role: "Full-Stack Web Development Intern",
        achievements: [
          <>
            Developed a digital recruitment and training platform with HTML, CSS, JavaScript,
            Angular and Spring Boot.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "École Polytechnique de Sousse",
        description: <>Engineering degree in Software Engineering, 2024 - present (5th year).</>,
      },
      {
        name: "École Supérieure des Sciences et de la Technologie de Hammam Sousse (ESSTHS)",
        description: <>Bachelor's degree in Software Engineering and Information Systems, 2021 - 2024.</>,
      },
      {
        name: "Lycée El Mida, Nabeul",
        description: <>Baccalauréat in Computer Science, 2021.</>,
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      { name: "IBM AI Certification", issuer: "IBM SkillsBuild" },
      { name: "IBM Introduction to Cloud Computing", issuer: "IBM" },
      { name: "Cisco DevNet Associate 1.0", issuer: "Cisco" },
      {
        name: "Red Hat OpenShift Development I: Introduction to Containers with Podman (DO188)",
        issuer: "Red Hat",
      },
      { name: "AWS Cloud Technology and Services Concepts", issuer: "DataCamp" },
      { name: "Introduction to Kubernetes", issuer: "DataCamp" },
      { name: "Building AI Agents with Google ADK", issuer: "DataCamp" },
      { name: "Python 1 and 2", issuer: "Cisco" },
      { name: "JavaScript 1 and 2", issuer: "Cisco" },
      { name: "Data Science", issuer: "Cisco" },
      { name: "Cybersecurity", issuer: "Cisco" },
    ],
  },
  community: {
    display: true,
    title: "Community",
    items: [
      {
        name: "Ambassador, IEEE TSYP 14 (2026)",
        description: <>Represented the IEEE EPS Student Branch at the congress in Hammamet.</>,
      },
      {
        name: "Webmaster, IEEE EPS Student Branch, Sousse",
        description: (
          <>
            Created graphics for online and offline media, edited videos, took photographs and
            managed content and website updates.
          </>
        ),
      },
      {
        name: "Media Team Volunteer, TCPC (Tunisian Collegiate Programming Contest)",
        description: <>Handled design, photography, video coverage and social media content.</>,
      },
      {
        name: "Organizer, IEEE TSYP 11 (2023)",
        description: <>Contributed to media and design tasks.</>,
      },
      {
        name: "Media and Design Officer, IEEE ESSTHS Student Branch (2023 - 2024)",
        description: (
          <>
            Created visuals, edited videos, took photographs and managed content and social media
            engagement.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Full-stack development",
        description: (
          <>
            Web platforms from database to interface: MERN and MEAN stacks, Spring Boot, Django,
            Symfony and Jakarta EE, with REST APIs and JWT authentication.
          </>
        ),
        tags: [
          { name: "React.js", icon: "react" },
          { name: "Angular", icon: "angular" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Spring Boot", icon: "springboot" },
          { name: "Django", icon: "django" },
          { name: "MongoDB", icon: "mongodb" },
        ],
        images: [],
      },
      {
        title: "DevOps and cloud",
        description: (
          <>
            Containerizing applications, automating build and deployment pipelines, scanning
            images and deploying to the cloud.
          </>
        ),
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "Jenkins", icon: "jenkins" },
          { name: "GitHub Actions", icon: "githubactions" },
          { name: "Terraform", icon: "terraform" },
          { name: "AWS", icon: "aws" },
        ],
        images: [],
      },
      {
        title: "AI, machine learning and big data",
        description: (
          <>
            Predictive models with scikit-learn and XGBoost, LLM integration through the Groq API,
            and distributed processing with Hadoop and Spark.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "scikit-learn", icon: "scikitlearn" },
          { name: "Apache Spark", icon: "spark" },
          { name: "Hadoop", icon: "hadoop" },
        ],
        images: [],
      },
      {
        title: "Mobile development",
        description: <>Native Android applications in Kotlin and cross-platform apps with Flutter.</>,
        tags: [
          { name: "Kotlin", icon: "kotlin" },
          { name: "Android", icon: "android" },
          { name: "Flutter", icon: "flutter" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes on engineering",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Software, DevOps and AI projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
