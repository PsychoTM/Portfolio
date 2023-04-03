import React from 'react'
import './about.css'
import me from '../../assets/me-about.jpg'
import {BsFillDatabaseFill} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'
import {FaUnity} from 'react-icons/fa'
import {TbBrandThreejs} from 'react-icons/tb'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiUnrealengine} from 'react-icons/si'
import {VscBeaker} from 'react-icons/vsc'
import {FaJira} from 'react-icons/fa'
import {FaConfluence} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={me} alt="About Image" />
        </div>
        </div>

        <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <BsFillDatabaseFill className='about__icon'/>
           <h5>Backend</h5>
           <small>Professional experience creating databases in TSQL, SQL, MySQL, Prisma and SSMS.</small> 
          </article>

          <article className='about__card'>
            <FaReact className='about__icon'/>
            <TbBrandThreejs className='about__icon'/>
            <TbBrandNextjs className='about__icon'/>
           <h5>Frontend</h5>
           <small>Professional experience creating web applications using React, Three and Next js technologies.</small> 
          </article>

          <article className='about__card'>
            <FaUnity className='about__icon'/>
            <SiUnrealengine className='about__icon'/>
           <h5>Game Development</h5>
           <small>Academic experience in Unity and Unreal engines.</small> 
          </article>

          <article className='about__card'>
          <VscBeaker className='about__icon'/>
           <h5>Quality Assurance</h5>
           <small>Professional experience in testing multitude of software using Manual and Automated testing. </small> 
          </article>

          <article className='about__card'>
          <FaJira className='about__icon'/>
           <h5>QA Team Leading</h5>
           <small>Professional experience in leading a small team of Quality Assurance testers to ensure efficient and timely exhaustive testing. </small> 
          </article>

          <article className='about__card'>
          <FaConfluence className='about__icon'/>
           <h5>Confluence Profficiency</h5>
           <small>Professional experience in reading, searching, writing and updating confluence pages and documentation. </small> 
          </article>

        </div>
        <br/>
        <p>
        I am a logically oriented developer with a passion for learning new technologies. I am also a fast learner and
        efficient under pressure.
</p>
<br/>
{/* <p>Skills and preferred languages:</p>  
<p>-Database skills: TSQL, MySQL, SQL</p>
<p>-Web Development skills: HTML, CSS, PHP, JavaScript, Three.js, ReactJS, NextJS, MaterialUI</p>
<p>-Software Development skills: Unreal, Unity, C#, C++, ASP.NET, Blueprint, Visual Studio</p>
<p>-QA Skills: Manual Testing, Automation Testing in Scripty, SoapUI, ISTQB preparation</p>
      
         */}
        </div>
      </div>
    </section>
  )
}

export default About