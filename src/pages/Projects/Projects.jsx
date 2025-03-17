import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import RecentWorks from "../../Body/Section/RecentWorks/RecentWorks";
function Projects(){
    document.title="Projects"
    return(
        <>
        <Header></Header>
        <RecentWorks></RecentWorks>
        <Footer></Footer>
        </>
    )
}

export default Projects;
