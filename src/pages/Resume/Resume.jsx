
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import SectionResume from "../../Body/Section/SectionResume/SectionResume";

function Resume(){
    document.title="Resume"
    return(

        <>
        <Header></Header>
        <SectionResume></SectionResume>
        <Footer></Footer>
        </>
    )
}

export default Resume;