import fyeo from "../../assets/fyeo.jpg";
import sut from "../../assets/sut.jpg";
import benue from "../../assets/benue.jpg";
import sendI from "../../assets/send/send-1.jpg";
import dj from "../../assets/dj/dj-1.jpg";
import movie from "../../assets/movie.jpg";

const data = [
    {
        id: 1,
        subTitle: "website development",
        name: "E-commerce Store",
        link: "https://sutairu.netlify.app/",
        github: "https://github.com/mystiexx/e-shop",
        image: sut,
        article:
            "This is an online e-commerce store i made using Reactjs, i also used commercejs api to host the products and handle checkout, and stripe was implemented for the pay route",
    },
    {
        id: 2,
        subTitle: "website development",
        name: "Journal",
        link: "https://fyeo.netlify.app/",
        github: "https://github.com/mystiexx/diary",
        image: fyeo,
        article:
            " This is an online journal made with reactjs, no external css libraries was used when creating this project",
    },
    {
        id: 4,
        subTitle: "Web development",
        name: "News website",
        link: "https://benuetv.netlify.app/",
        github: "https://github.com/imoris11/benuetv-web",
        image: benue,
        article:
            " This was a team project, which i worked on as a frontend web developer, i was in charge of designing and building the UI",
    },
    {
        id: 3,
        subTitle: "Job interview",
        name: "Send UI",
        link: "https://send-css.netlify.app/",
        github: "https://github.com/mystiexx/sendfrieght",
        image: sendI,
        article: ' Simple UI design'
    },
    {
        id: 4,
        subTitle: "Web development",
        name: "A Porfoilio UI",
        link: "https://dj-work.netlify.app/",
        github: "https://github.com/mystiexx/DJ-Portfolio",
        image: dj,
        article: ' Simple Ui design of a dj portfolio'
    },
    {
        id: 6,
        subTitle: "Web development",
        name: "Movie box",
        link: "https://movie-box.netlify.app/",
        github: "https://github.com/mystiexx/movie-box",
        image: movie,
        article:' A website for movie information'
    },
];

export default data;
