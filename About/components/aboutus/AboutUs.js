import React, { Component } from 'react'
import '../../../src/App.css'
class AboutUs extends Component {
  render() {
    return (
      <div>
        <center><img src="./logo.png" alt='' width="80%" height="40%" border="2"></img></center>

        <div className='icon'>
         <center>Who we are ?</center>
        </div>
        <div className='App-header'>
              <ul><li>IEEE ENSAF Student Branch is a part of IEEE Student Branch community , founded in 2019 by its ex-chair DRIOUECH Mohammmed along with our counselor MANSOURI Anass.<br/></li>
              <li>IEEE ENSA FEZ Student Branch provides opportunities to student members in order to help them develop professional skills and get identified in their designated fields of interest.
              </li>
              </ul>
        </div>
        <div>
        <div className='image'>
        <img src="./Interrogation-2.webp" alt=''height={120} width={130}></img></div>
          <br/>
          <div className='container'>
          <div className='primary'>
          <div className='title'>Why joing us ?</div>
            <ul>
              <li>IEEE opens the door to opportunities that will help you develop
            your professional identity in IEEE’s designated fields of interest:
            <br/>sciences, technology, engineering, and mathematics (STEM).</li>
              <li>
              IEEE help us accessing a range of membership benefits,<br/>
            you will make global connections with people who can help
            you along your targeted career path through IEEE’s international
            community of members and volunteers.
              </li>
            </ul>
          </div>
          
          <div className='secondly'>
          <div className='title'>What's our commitees ?</div>
                <ul>
          <li>Web commitee : Hold anything related to website </li>
          <li>Design commitee : Building societie's designs</li>
          <li>Media commitee : Support social media plateform</li>
          <li> Project commitee : interested in organizing projects and assigning tasks</li>
          <li> Program commitee : With the rule of organizing events</li>
              </ul>
          </div>
          </div>
          </div>
      </div>
    )   
  }
}

export default AboutUs;