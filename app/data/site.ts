export const SITE_URL = "https://photkosee.vercel.app";

export const SITE_NAME = "Phot Koseekrainiramon";
export const SITE_NAME_TH = "พจน์ โกสีย์ไกรนิรมล";

export const SITE_DESCRIPTION =
  `Portfolio of Phot Koseekrainiramon (${SITE_NAME_TH}), a software engineer ` +
  `building web applications. Personal projects, experience, and resume.`;

const socials = [
  "https://www.linkedin.com/in/photkosee/",
  "https://github.com/photkosee",
];

export const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      alternateName: [SITE_NAME_TH, "Pete Koseekrainiramon", "Peach"],
      givenName: "Phot",
      familyName: "Koseekrainiramon",
      jobTitle: "Software Engineer",
      email: "mailto:phot.kosee@gmail.com",
      url: SITE_URL,
      knowsLanguage: ["en", "th"],
      nationality: {
        "@type": "Country",
        name: "Thailand",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "University of New South Wales",
          sameAs: "https://www.unsw.edu.au/",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Thammasat University",
          sameAs: "https://tu.ac.th/",
        },
      ],
      sameAs: socials,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${SITE_NAME} | Portfolio`,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: `${SITE_NAME} | Portfolio`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
  ],
};
