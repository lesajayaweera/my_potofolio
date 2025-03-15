import Header from "../../Header/Header"
import Introduction from "../../Body/Introduction/Introduction";
import AboutMe from "../../Body/AboutMe(landing)/AboutMe";
import Footer from "../../Footer/Footer";

function Home(){
    return(
        <>
            <Header></Header>
            <Introduction></Introduction>
            <AboutMe></AboutMe>
            <Footer></Footer>
        </>
    );
}
export default Home;