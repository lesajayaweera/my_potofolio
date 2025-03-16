// Importing the reusable Compornents
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Myself from "../../Body/Section/Myself/Myself";
import TechnicalSkills from "../../Body/Section/TechnicalSkills/TechnicalSkills";

// importing the images file path
import HTML from "../../../public/Html.png"
import CSS from "../../../public/Css.png"
import PHP from "../../../public/php.png"
import Javascript from "../../../public/javascript.png"
import MySql from "../../../public/Mysql.png"
import Python from "../../../public/Python.png"
import React from "../../../public/react.png"
import Csharp from "../../../public/csharp.png"
import dart from "../../../public/dart.png"
import flutter  from "../../../public/flutter.png"
import andriod from "../../../public/android.png"





// Function which returns the page
function About(){

    const skills =[
        {name:"HTML",image:HTML},
        {name:"CSS",image:CSS},
        {name:"Javascript",image:Javascript},
        {name:"Php",image:PHP},
        {name:"My Sql",image:MySql},
        {name:"Python",image:Python},
        {name:"React",image:React},
        {name:"C#",image:Csharp},



        
    ]

    const learning =[
        {name:"Dart",image:dart},
        {name:"Flutter",image:flutter},
        {name:"Andriod Studio",image:andriod},
        {name:"Python Machine Learning",image:Python}
    ]
    return(
        <>
        <Header></Header>
        <Myself></Myself>
        <TechnicalSkills header={"Professional"} hightlight={"Skills"} skillData={skills}></TechnicalSkills>
        <TechnicalSkills header={"What I'm Currently"} hightlight={"Learning"}skillData={learning} ></TechnicalSkills>
        <Footer></Footer>
        </>
    );
}
export default About;
