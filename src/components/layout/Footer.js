import React from "react";
import './Footer.css'
import githubIcon from '../../assets/icons8_github.svg'
import linkedinIcon from '../../assets/icons8_linkedin.svg'
import twitterIcon from '../../assets/icons8_twitter.svg'


class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div className="Footer_socialLinks">
          <a href="https://www.github.com/shepleysound"><img src={githubIcon} alt="Github Logo"/></a>
          <a href="https://www.linkedin.com/in/robert-shepley"><img src={linkedinIcon} alt="LinkedIn Logo"/></a>
          <a href="https://www.twitter.com/shepleysound"><img src={twitterIcon} alt="Twitter Logo"/></a>
        </div>
        <p className="Footer_authorName">{this.props.authorName} © 2022</p>
      </footer>
    )
  }
}

export default Footer;