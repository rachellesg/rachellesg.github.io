import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Merquri from "../images/portfolio/merquri.png"
import Linkdr from "../images/portfolio/linkdr.png"
import RapidRace from "../images/portfolio/rapidrace.png"

import { RiGithubFill } from "react-icons/ri"

const Projects = []

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Projects</h1>
    Feel free to browse through my Github <RiGithubFill /> for various projects
    done throughout the years. <br />
    <a href="https://github.com/rachellesg/" target="_blank">
      https://github.com/rachellesg/
    </a>
    <br />
    <div class="projects">
      <div class="project-listing">
        <div class="project-headings">
          <div class="numeric">01</div>
          <h3 class="project-title">Merquri.io</h3>
        </div>
        <div class="project-summary">
          Role : UI/UX, Front-End Development <br />
          Link :{" "}
          <a href="http://merqurio.io" target="_blank">
            merquri.io
          </a>
          <br /> <br />
          Translated design to code and developed the company's corporate site
          alongside team mates,
        </div>
        <img class="project-image" src={Merquri} alt="Merquri Landing Page" />
      </div>
      <div class="project-listing">
        <div class="project-headings">
          <div class="numeric">02</div>
          <h3 class="project-title">GIF Search</h3>
        </div>
        <div class="project-summary">
          Role : Front-End Development <br />
          Link :{" "}
          <a href="https://github.com/rachellesg/gif-search" target="_blank">
            /gif-search
          </a>
          <br /> <br />
          Hobby side project: GIF search made with Reactjs and GIPHY API.
        </div>
        <img class="project-image" src={Merquri} alt="GIF Search" />
      </div>
      <div class="project-listing">
        <div class="project-headings">
          <div class="numeric">03</div>
          <h3 class="project-title">Linkdr</h3>
        </div>
        <div class="project-summary">
          Role : Design, UXUI, Front-End Development <br />
          Link :{" "}
          <a href="https://github.com/weizheng1910/linkdr" target="_blank">
            /linkdr
          </a>
          <br /> <br />
          Collaborated with 3 developers for a Ruby on Rails project completed
          in one week.
        </div>
        <img
          class="project-image"
          src={Linkdr}
          alt="Linkdr Create Account Page"
        />
      </div>
      <div class="project-listing">
        <div class="project-headings">
          <div class="numeric">04</div>
          <h3 class="project-title">Rachelle's Rapid Race</h3>
        </div>
        <div class="project-summary">
          Role : Design, UXUI, Front-End Development <br />
          Link :{" "}
          <a
            href="https://github.com/rachellesg/rachelles-rapid-race"
            target="_blank"
          >
            /rachelles-rapid-race
          </a>
          <br /> <br />
          One of my first Javascript projects, a speed typing game! Play it{" "}
          <a
            href="https://rachellesg.github.io/rachelles-rapid-race/"
            target="_blank"
          >
            here
          </a>
          .
        </div>
        <img
          class="project-image"
          src={RapidRace}
          alt="Rachelle's Rapid Race"
        />
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
