import styles from  "./RecentWorks.module.css"

import ProjectBox from "../../Compornents/ProjectBox/ProjectBox"
import portofolio from  "../../../../public/portofolio.png"
import Env from  "../../../../public/EnviromentProject.png"
import ecommerce from  "../../../../public/Ecomerce.png"
import event from "../../../../public/Eventmanagement.jpg"
import library from "../../../../public/library.jpg"

function RecentWorks({}){
    const projects = [
        {
            header: "Event Management System",
            languages: [".Net Framework", "C#","My Sql"],
            description: "The Event Management System (EMS) features a Windows Forms UI, MySQL database, and MVC architecture for scalability. It ensures seamless event creation, management, and participation while allowing future enhancements like notifications and analytics.",
            github: "https://github.com/lesajayaweera/ASSIGNMENT-EVENT-MANAGEMENT",
            demo: "https://github.com/lesajayaweera/ASSIGNMENT-EVENT-MANAGEMENT",
            image: event,
        },
        {
            header: "Simple Ecommerce Site",
            languages: ["JavaScript", "HTML", "CSS"],
            description: "A Simple E-Commerce Website built with HTML, CSS, and JavaScript, featuring product browsing, a dynamic cart, and responsive design—all without server access. Ideal for demos and static sites. 🚀",
            github: "https://github.com/lesajayaweera/Daddy-Grocery-Store.github.io",
            demo: "https://lesajayaweera.github.io/Daddy-Grocery-Store.github.io/",
            image: ecommerce,
        },
        {
            header: "Library Management System",
            languages: [".Net Framework", "C#","My Sql"],
            description: "This Library Management System is built using .NET, C#, and MySQL, enabling users to log in, borrow, return, and reserve books. Admins can manage books, track reservations, and restrict users with overdue charges. The system ensures efficient library operations with a secure and user-friendly interface. 📚",
            github: "https://github.com/lesajayaweera/NewLibraryManagementApp",
            demo: "https://github.com/lesajayaweera/NewLibraryManagementApp",
            image: library,
        },
        {
            header: "Environmental Conservation Website",
            languages: ["JavaScript", "HTML", "CSS"],
            description: "This Environmental Conservation Website is built using HTML, CSS, and JavaScript to raise public awareness about protecting the environment. It provides educational content, interactive features, and a responsive design to engage users in sustainability efforts. As a front-end-only project, it focuses on delivering information and advocacy without backend integration. 🌿🌎",
            github: "https://github.com/lesajayaweera/Enviromental-Conservation.github.io",
            demo: "https://lesajayaweera.github.io/Enviromental-Conservation.github.io/",
            image: Env  ,
        },
        {
            header: "My Portfolio",
            languages: ["React.js", "CSS"],
            description: "This Portfolio Website is built using React (.jsx) and CSS, showcasing projects, skills, and personal information with a clean and responsive design. It features dynamic components for smooth navigation and an interactive user experience. As a front-end-only site, it focuses on UI/UX without backend integration, making it fast and efficient for showcasing work. 🚀",
            github: "https://github.com/lesajayaweera/my_potofolio",
            demo: "https://github.com/lesajayaweera/my_potofolio",
            image: portofolio,
        },
    ];
    return(
        <section className={styles.section}>
            <h2 className={styles.header}>My Recent <span className={styles.highlight}>Works</span></h2>
            <p className={styles.p}>Here are Some Pojects that I<span className={styles.highlight}>'</span>Worked On</p>

            <div className={styles.mainContainer}>
                {/* <ProjectBox header={"Event Management System"}></ProjectBox>
                <ProjectBox header={"Simple Ecommerce Site"}></ProjectBox>
                <ProjectBox header={"Library Management System"}></ProjectBox>
                <ProjectBox header={"Enviromental Conservation Website"}></ProjectBox>
                <ProjectBox header={"My Portofolio"}></ProjectBox> */}

                    {projects.map((project, index) => (
                    <ProjectBox
                        key={index}
                        header={project.header}
                        languages={project.languages}
                        description={project.description}
                        github={project.github}
                        demo={project.demo}
                        image={project.image}
                    />
                ))}
            </div>


        </section>
    )
}
export default RecentWorks