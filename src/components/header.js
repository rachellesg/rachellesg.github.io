import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { RiGithubFill, RiMailSendFill, RiLinkedinBoxFill } from "react-icons/ri"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-bg">
      <div className="container">
        <div className="left-logo">
          <div className="header-title">{siteTitle}</div>
          Front-End Software Engineer
        </div>
        <div className="social-media">
          <ul>
            <li>
              <a
                href="https://github.com/rachellesg/"
                target="_blank"
                rel="noreferrer"
              >
                <RiGithubFill />
              </a>
            </li>
            <li>
              <a
                href="mailto:rachelle.yeo@outlook.com"
                target="_blank"
                rel="noreferrer"
              >
                <RiMailSendFill />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rachelle-yeo/"
                target="_blank"
                rel="noreferrer"
              >
                <RiLinkedinBoxFill />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f6e8e6"
          fill-opacity="1"
          d="M0,96L60,85.3C120,75,240,53,360,48C480,43,600,53,720,64C840,75,960,85,1080,90.7C1200,96,1320,96,1380,96L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </svg>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
