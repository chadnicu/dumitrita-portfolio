import { About, Gallery, Home, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Dumitrița",
  lastName: "Scurtu",
  name: `Dumitrița Scurtu`,
  role: "Visual & Brand Designer",
  avatar: "/images/avatar.jpg",
  email: "",
  location: "Europe/Chisinau", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Română", "English"], // optional: Leave the array empty if you don't want to display languages
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  // TODO: add real links (Behance/Instagram/LinkedIn/Email) when available
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} - Portfolio`,
  description: `Portfolio of ${person.name}, ${person.role}`,
  headline: <>Designing brands, websites and visuals that tell a story</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Velvet Visage</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/website-design",
  },
  subline: (
    <>
      I'm Dumitrița, a designer based in Moldova. I craft brand identities,
      website designs and banner concepts in Figma.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `${person.name} - About`,
  description: `Meet ${person.name}, ${person.role} from Moldova`,
  tableOfContent: {
    display: false,
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
        Dumitrița is a Moldova-based designer focused on brand identities, web
        design and visual concepts crafted in Figma.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Moldova State University",
        description: <>Currently studying.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Projects",
  description: `Design projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `${person.name} - Gallery`,
  description: `A visual collection by ${person.name}`,
  images: [
    {
      src: "/images/projects/banner-hero/hero-marine.webp",
      alt: "Explore the Marine Depths: hero concept",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/website-design/banner-vertical.webp",
      alt: "Velvet Visage: makeup training poster",
      orientation: "vertical",
    },
    {
      src: "/images/projects/banner-hero/hero-botanical.webp",
      alt: "Journey Through Botanical Kingdom: hero concept",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/banner-hero/banner-marine-vertical.webp",
      alt: "Explore the Marine Depths: portrait banner",
      orientation: "vertical",
    },
    {
      src: "/images/projects/banner-hero/banner-aqualife.webp",
      alt: "AquaLife: promotional banner",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/brand-design/wine-mockup.webp",
      alt: "RoyalWine: laptop mockup",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/banner-hero/hero-perfume.webp",
      alt: "Senses with Timeless Elegance: hero concept",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/banner-hero/banner-scandal.webp",
      alt: "Scandal Intense: fragrance banner",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/website-design/banner-horizontal.webp",
      alt: "Velvet Visage: promotional banner",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, work, gallery };
