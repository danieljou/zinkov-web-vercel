// import lock from "../assets/8.svg";
// import wifi from "../assets/9.svg";
// import wallet from "../assets/10.svg";
// // import im1 from "../assets/im1.jpg";
// // import im2 from "../assets/im2.jpg";
// // import im3 from "../assets/im3.jpg";
// // import bit from "../assets/bit2.png";
// import im4 from "../assets/4.svg";
// import im5 from "../assets/5.svg";
// import im6 from "../assets/6.svg";
// import im7 from "../assets/16.svg";
// import im8 from "../assets/17.svg";
// import im9 from "../assets/18.svg";
// import el4 from "../assets/im4.jpg";
// import el5 from "../assets/im5.jpg";
// import el6 from "../assets/im6.jpg";
// import icon1 from "../assets/iconly-glass-info.svg"
// import icon2 from "../assets/iconly-glass-paper.svg"
// import icon3 from "../assets/iconly-glass-tick.svg"
import { RiHomeSmile2Line, RiBook2Line, RiMoneyCnyBoxLine, RiUser2Line, RiSoundModuleLine, RiSchoolLine } from "react-icons/ri";

export const sideLinks = [
  {
    links: [
      {
        url: 'dash',
        liens: "Acceuil",
        icon: RiHomeSmile2Line,

      },
    ],
  },
  {
    title: "Gestion",
    links: [
      {
        url: '/admin/users',
        liens: "Utilisateurs",
        icon: RiUser2Line,
      },
      {
        url: 'demandes',
        liens: "Demandes",
        icon: RiBook2Line,
      },
      {
        url: 'academie',
        liens: "Académie",
        icon: RiSchoolLine,
      },
      {
        url: 'module',
        liens: "Module",
        icon: RiSoundModuleLine,
      },
    ]
  },
];


export const TeamNanagerLinks = [
  {
    links: [
      {
        url: 'dash',
        liens: "Acceuil",
        icon: RiHomeSmile2Line,

      },
    ],
  },
  {
    title: "Ma délégation",
    links: [
      {
        url: 'officials',
        liens: "Officiels",
        icon: RiBook2Line,
      },
      {
        url: 'goverment',
        liens: "Membre du gouvernement",
        icon: RiSchoolLine,
      },
      {
        url: 'chief-delegation',
        liens: "Chef de delegation",
        icon: RiSoundModuleLine,
      },
      {
        url: 'chief-mission',
        liens: "Chef de mission",
        icon: RiSoundModuleLine,
      },
      {
        url: 'staff',
        liens: "Administratif",
        icon: RiSoundModuleLine,
      },
      {
        url: 'chief-trainner',
        liens: "Entrainneurs",
        icon: RiSoundModuleLine,
      },
      {
        url: 'technical-team',
        liens: "La Technique",
        icon: RiSoundModuleLine,
      },
      {
        url: 'medical',
        liens: "Medical",
        icon: RiSoundModuleLine,
      },
      {
        url: 'runners',
        liens: "Compétieteur",
        icon: RiSoundModuleLine,
      },
    ]
  },
];

export const color = {
  orange: "bg-[#FBCD13]",
  textorange: "text-[#FBCD13]",
  navbg: "bg-[#1C2536]",
  secondary: "bg-[#6366F1]",
  primary: "text-[#6366F1]",
  text: "text-[#1C2536]",
};


export const footerData = [
  {
    title: "Liens utiles",
    links: [
      {
        name: "Blockchain",
        path: "/element",
      },
      {
        name: "Crypto API",
        path: "/element",
      },
      {
        name: "Crypto Indices",
        path: "/element",
      },
      {
        name: "Doodles",
        path: "/element",
      },
      {
        name: "Jobs board",
        path: "/element",
      },
    ],
  },
  {
    title: "Informations",
    links: [
      {
        name: "About Us",
        path: "/element",
      },
      {
        name: "Tearms of use",
        path: "/element",
      },
      {
        name: "Pricacy policy",
        path: "/element",
      },
      {
        name: "Cookie policy",
        path: "/element",
      },
      {
        name: "Community rules",
        path: "/element",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        name: "About Us",
        path: "/element",
      },
      {
        name: "Tearms of use",
        path: "/element",
      },
      {
        name: "Pricacy policy",
        path: "/element",
      },
      {
        name: "Cookie policy",
        path: "/element",
      },
      {
        name: "Community rules",
        path: "/element",
      },
    ],
  },
  {
    title: "Reseaux",
    links: [
      {
        name: "About Us",
        path: "/element",
      },
      {
        name: "Tearms of use",
        path: "/element",
      },
    ],
  },
];


export const DelegationCategoriesFunctions = [
  'Officiel',
  'Membre	du	gouvernement',
  'Chef de délégation',
  'Chef	de mission',
  'Administratif',
  'Entraîneur',
  'Technique',
  'Médical',
  'Compétiteur',
]