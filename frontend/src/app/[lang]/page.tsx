import LangRedirect from "./components/LangRedirect";
import { sectionRenderer } from "./utils/section-renderer";
import { getPageBySlug } from "@/app/[lang]/utils/get-page-by-slug";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Email from "./components/Email";

const testimonials = [
  {
    text: "I'm the founder and creator of Music Discovery.  I came up with this idea while I was watching American Idol and thinking how insane it is that from all the contestants, there is only one winner. I think musicians should be given the tools to become famous based on their talent and not on how big their following is on TikTok. When I'm not building this app, I'm playing my Fender telecast guitar and doing vocals.",
    authorName: "Yoel Popovici",
    picture: {
      data: {
        id: "picture-1",
        attributes: {
          name: "Yoel Popovici",
          alternativeText: "",
          url: "https://firebasestorage.googleapis.com/v0/b/musicdisco-c94e1.appspot.com/o/Screenshot%202024-06-26%20at%205.50.33%20PM.png?alt=media&token=0525fb66-a9bb-4e1b-b7be-7c0bb2ad811c",
        },
      },
    },
  },
  {
    text: "I'm taking my background in running large data startups to show musical artists how to use key data to grow their fan bases. Our goal is to have musicians thrive on our platform and therefore we'll share with you all the metrics required to achieve that goal. Btw, I'm not the best piano player but I love just about every genre of music, minus K-pop.",
    authorName: "Aaron Abram",
    picture: {
      data: {
        id: "picture-2",
        attributes: {
          name: "Aaron Abram",
          alternativeText: "",
          url: "https://firebasestorage.googleapis.com/v0/b/musicdisco-c94e1.appspot.com/o/Screenshot%202024-06-26%20at%205.16.25%20PM.png?alt=media&token=d8514826-d7db-4418-8174-a3c4fb864301",
        },
      },
    },
  },
];

const features = [
  {
    id: "feature-1",
    title: "",
    description:
      "There are over a hundred thousand auditioners for TV music competitions like American Idol, millions more who post on social media channels, and over seven trillion music streams globally on apps like SoundCloud.  Less than 1% of Musical Artists get discovered.  We think this is ridiculous!",
    showLink: false,
    newTab: false,
    url: "",
    text: "",
  },
  {
    id: "feature-2",
    title: "79.7M",
    description: "79.7M people failed to recieve more than 10 YTD streams",
    showLink: false,
    newTab: false,
    url: "",
    text: "",
  },
  {
    id: "feature-3",
    title: "45.6M",
    description: "45.6M tracks had zero streams",
    showLink: false,
    newTab: false,
    url: "",
    text: "",
  },
];

const frequentlyAsked = [
  {
    id: "frequentlyAsked-1",
    title: "How do I participate in music discovery contests?",
    description:
      "To join our contests, simply visit our contest page, follow the submission guidelines, and upload your original music. Stay tuned for updates on upcoming contests and deadlines.",
    showLink: false,
    newTab: false,
    url: "",
    text: "",
  },
  {
    id: "frequentlyAsked-2",
    title: "How frequently can I join music discovery contests?",
    description:
      "Whether you’ve won or lost a previous contest, you can join the next one. We believe that the more practice you get, the better your musical performances will get.",
    showLink: false,
    newTab: false,
    url: "",
    text: "",
  },
  {
    id: "frequentlyAsked-3",
    title: "Can I connect with other musicians on Music Discovery?",
    description:
      "Yes, we make it very easy to meet other musical artists and collaborate on future projects.",
    showLink: false,
    newTab: false,
    url: "",
    text: "",
  },
  {
    id: "frequentlyAsked-4",
    title: "Tell me more about the data you will be sharing with us?",
    description:
      "Our team are experts in using data to help large companies get larger. But also we are friends with music industry executives who will share with artists how to use certain data to expand their audience reach.",
    showLink: false,
    newTab: false,
    url: "",
    text: "",
  },
];

export default async function RootRoute({
  params,
}: {
  params: { lang: string };
}) {
  try {
    // const page = await getPageBySlug('home', params.lang)
    // if (page.error && page.error.status == 401)
    //   throw new Error(
    //     'Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/'
    //   )

    // if (page.data.length == 0 && params.lang !== 'en') return <LangRedirect />
    // if (page.data.length === 0) return null
    // const contentSections = page.data[0].attributes.contentSections
    // const contentSections = []
    // return contentSections.map((section: any, index: number) =>
    //   sectionRenderer(section, index)
    // )

    return (
      <>
        <Hero
          key={1}
          data={{
            id: "1",
            title: "Get Your Music Discovered Without a Following",
            description:
              "Musical artists compete in weekly contests to win prizes and exposure to the platform.  Winners get chosen by other artists and music listeners based on their performance, not their following. You can enter as many contests as you want.",
            buttons: [
              {
                id: "1",
                url: "",
                text: "JOIN THE WAITLIST",
                type: "secondary",
                newTab: false,
              },
            ],
          }}
        />
        ;
        <Features
          key={2}
          data={{
            heading: "By The Numbers",
            description: "",
            feature: features,
          }}
        />
        ;
        <Hero
          key={3}
          data={{
            id: "3",
            title: "A Community to Sprout Success",
            description:
              "Dive into a vibrant community where musicians and music lovers unite to champion emerging talent. Meet fellow artists, producers, and industry experts via networking events and forums. Collaborate on projects, share resources, and exchange insights to foster creativity and growth within this community.  Plus, we’ll share data, fan feedback, and more for free to help you gain more traction.",
            buttons: [
              {
                id: "1",
                url: "",
                text: "JOIN THE WAITLIST",
                type: "secondary",
                newTab: false,
              },
            ],
          }}
        />
        ;
        <Hero
          key={7}
          data={{
            id: "7",
            title: "Discover New Artists & Discover New Fans",
            description:
              "Music listeners can discover new artists while artists can discover new fans of their music. We’ll provide the platform for you to interact with each other. Learn how artists came up with their songs, the meaning behind them, and anything else you might be curious about. Plus, sit-in on live streams with already famous artists.",
            buttons: [
              {
                id: "1",
                url: "",
                text: "JOIN THE WAITLIST",
                type: "secondary",
                newTab: false,
              },
            ],
          }}
        />
        ;
        <Features
          key={4}
          data={{
            heading: "FAQ",
            description: "",
            feature: frequentlyAsked,
          }}
        />
        ;
        <Testimonials
          key={5}
          data={{
            id: "5",
            title: "Meet the Team",
            description: "",
            testimonials: testimonials,
          }}
        />
        ;
        <Email
          key={6}
          data={{
            id: "5",
            title: "Join Our Community",
            description:
              "We are launching on December 1st, 2024.  Sign up now to get updates.",
            button: {
              id: "1",
              url: "",
              text: "JOIN THE WAITLIST",
              type: "secondary",
              newTab: false,
            },
          }}
        />
        ;
      </>
    );
  } catch (error: any) {
    window.alert("Missing or invalid credentials");
  }
}
