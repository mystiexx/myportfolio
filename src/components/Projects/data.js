import fyeo from "../../assets/fyeo.jpg";
import sut from "../../assets/sut.jpg";
import farmly from "../../assets/farmly.jpg";
import sendI from "../../assets/send/send-1.jpg";
import dj from "../../assets/dj/dj-1.jpg";

const data = [
    {
        id: 1,
        subTitle: "website development",
        name: "Online Store",
        link: "https://sutairu.netlify.app/",
        github: "https://github.com/mystiexx/e-shop",
        image: sut,
        article:
            "This is an online e-commerce store i made using Reactjs, i also used commercejs api to host the products and handle checkout, and stripe was implemented for the pay route",
    },
    {
        id: 2,
        subTitle: "website development",
        name: "Online Diary",
        link: "https://fyeo.netlify.app/",
        github: "https://github.com/mystiexx/diary",
        image: fyeo,
        article: ' This is an online journal made with reactjs, no external css libraries was used when creating this project'
    },
    {
        id: 3,
        subTitle: "website development",
        name: "Online App",
        link: "https://farmily.netlify.app",
        github: "https://github.com/mystiexx/farmly",
        image: farmly,
    },
    {
        id: 4,
        subTitle: "Job interview",
        name: "Send UI",
        link: "https://send-css.netlify.app/",
        github: "https://github.com/mystiexx/sendfrieght",
        image: sendI,
    },
    {
        id: 5,
        subTitle: "Web development",
        name: "A Porfoilio UI",
        link: "https://send-css.netlify.app/",
        github: "https://github.com/mystiexx/DJ-Portfolio",
        image: dj,
    },
];

export default data;
