import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="avatar.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Junizar Fajri</h2>
            <h4 style={{color: 'grey'}}>FullStack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am a full stack web developer specializing mostly in PHP & JavaScript Framework, <br/>but also work with Python, Ruby & GoLang. <br/>Work and live as Digital Nomad in Aceh.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Banda Aceh, Aceh, ID</p>
            <h5>Phone</h5>
            <p>(+62) 85277560006</p>
            <h5>Email</h5>
            <p>jun.fajr@gmail.com</p>
            <h5>Web</h5>
            <p>atjehstudio.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2005}
              endYear={2011}
              schoolName="Universitas Syiah Kuala"
              schoolDescription="Jurusan Teknik Elektro Bidang Komputer"
               />

               {/* <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  /> */}
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2008}
              endYear={2012}
              jobName="PIKE Aceh"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
                <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
                <Skills
                  skill="JavaScript"
                  progress={70}
                  />
                <Skills
                  skill="NodeJS"
                  progress={50}
                  />
                <Skills
                  skill="React"
                  progress={65}
                  />
                <Skills
                  skill="Rails"
                  progress={60}
                  />
                <Skills
                  skill="Django"
                  progress={65}
                  />
                <Skills
                  skill="Laravel"
                  progress={40}
                  />
                <Skills
                  skill="CodeIgniter"
                  progress={45}
                  />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
