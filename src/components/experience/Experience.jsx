import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Technical Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">

        {/* Sollenium Solutions experience */}
        <div className="experience__sollenium">
        <h3>Sollenium Solutions SRL</h3>
        <div className="experience__content">

        <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Javascript</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Experience</small>
          </div>
        </article>

        <article className='experience__details'>
          
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>NextJS</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>

        <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>ReactJS</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>SQL</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>MaterialUI</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
        </div>

        <br></br>
        <h5>In this role I was tasked with developing advanced React and Next web applications for clients in a timely manner following th lead of my senior developer. </h5>
        </div>   
        {/* Electronic Arts experience */}

                <div className="experience__ea">
        <h3>Electronic Arts</h3>
        <div className="experience__content">

        <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Manual Testing</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Scripty Automated Testing</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>

        <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Jira Task and Project Management</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Team Leading</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Jira Task and Project Management</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
        </div>

        <br></br>
        <h5>In this role I was tasked with testing new features added to the applications as close to exhaustion as
possible through manual and automation testing.
Furthermore I am tasked with leading a team of testers on a position as a POC.</h5>
        </div>

      {/* Programming-Pool Experience */}
        <div className="experience__ppr">
        <h3>Programming-Pool SRL</h3>
        <div className="experience__content">

        <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>C#</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>

        <article className='experience__details'>
          
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>ASP .NET</h4>
          <small className='text-light'>Begginer</small>
          </div>
        </article>

        <article className='experience__details'>
          
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>SSMS</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>

        <article className='experience__details'>
          
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>TSQL</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>SoapUI</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          
          <div>
          <h4>Jira Task and Project Management</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
        </div>

        <br></br>
        <h5>In this role I was tasked with solving Support Tickets issued by the clients and developing my skills as
a database developer. My day to day is spent making research and solving as many tickets as possible
issued through Jira Platform using TSQL.
As a secondary role I was tasked with testing new features added to the applications as close to
exhaustion as possible through Manual Testing and Automation Testing in SoapUI</h5>
        </div>

        {/* HSDS experience */}

        <div className="experience__hsds">
        <h3>Hospitality Software Development Solutions SRL</h3>
        <div className="experience__content"></div>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          
          <div>
          <h4>Java</h4>
          <small className='text-light'>Begginer</small>
          </div>
        </article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          
          <div>
          <h4>PostgreSQL</h4>
          <small className='text-light'>Begginer</small>
          </div>
        </article>
        <br></br>
        <h5>In this role I was tasked with implementing new interfaces to connect our applications to
new clients, solving Support Tickets issued by the clients and developing my skills as a software
developer.
</h5>
        </div>
         </div>
        </section>
  )
}

export default Experience