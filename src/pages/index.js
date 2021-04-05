import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  CgGym,
  CgTranscript,
  CgTerminal,
  CgCode,
  CgSmileMouthOpen,
} from "react-icons/cg"

import { FaLanguage } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="resume">
      <div className="highlight-info">
        <div className="summary">
          <div class="hi"> Hey there!</div>
          <br /> I'm <span className="emphasis">Rachelle</span>, a Front-End
          Software Engineer based in Singapore. I've been developing user
          interfaces since 2012 and have a deep passion for clean, scalable code
          and responsive design.
          <br />
          <br />I am open to opportunities!
        </div>
      </div>
      <div class="experience">
        <div class="qualifications">
          <div class="key-strengths">
            <h2>
              Key Strengths <CgGym />
            </h2>
            <ul>
              <li>
                Positive Attitude <CgSmileMouthOpen />
              </li>
              <li>Learning Ability</li>
              <li>Team Player</li>
              <li>Communication Skills</li>
              <li>Flexibility + Adaptability</li>
            </ul>
          </div>
          <div class="education">
            <h2>
              Education <CgTranscript />
            </h2>
            <span class="emphasis">General Assembly</span>
            <br />
            Software Engineering Immersive
            <br />
            2019 - 2020 <br />
            <br />
            <span class="emphasis">Kaplan Singapore</span> <br />
            Diploma in Information Technology
            <br />
            2012 - 2013
          </div>
        </div>
        <div class="work">
          <h2>
            Experience <CgTerminal />
          </h2>
          <div class="job-experience">
            <div class="job-duration">
              March 2020 - Present <br />
            </div>
            <div class="job-details">
              <div class="job-title">Front-End Software Engineer</div>
              Orion Consultancy <br />
            </div>
            <div class="job-description">
              <ul>
                <li>
                  Developed new user-facing features with reusable code and
                  up-to-date libraries
                </li>
                <li>Ensured technical feasibility of UI/UX requirements</li>
                <li>
                  Assuring user inputs are validated before moving product to
                  backend developers
                </li>
              </ul>
            </div>
          </div>
          <div class="job-experience">
            <div class="job-duration">
              2015 - 2019
              <br />
            </div>
            <div class="job-details">
              <div class="job-title">Senior Front-End Web Designer</div>
              T2 Web Pte Ltd <br />
            </div>
            <div class="job-description">
              <ul>
                <li>
                  Managed a portfolio of various projects across multiple
                  clients and stakeholders
                </li>
                <li>
                  Conceptualized and developed customer facing interfaces
                  including websites, web applications and electronic
                  communications
                </li>
                <li>
                  Collaborated with front-end and back-end developers while
                  consistently delivering projects on time and within budget
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="total-skills">
        <h2>
          Technical Skills <CgCode />
        </h2>
        <div class="skills">
          <div class="skills-tag uiux">UI/UX</div>
          <div class="skills-tag html">HTML</div>
          <div class="skills-tag css">CSS</div>
          <div class="skills-tag javascript">Javascript</div>
          <div class="skills-tag reactjs">Reactjs</div>
          <div class="skills-tag photoshop">Adobe Photoshop</div>
          <div class="skills-tag photoshop">Figma</div>
        </div>
        <div class="language-skills">
          <FaLanguage /> Native/bilingual proficiency in English and Mandarin
          Chinese
        </div>
        <div class="portfolio-link">
          <h1><Link to="/portfolio/">Take a look at my portfolio!</Link> </h1>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
