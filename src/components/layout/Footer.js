import React from "react";
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <p className="Footer_authorName">{this.props.authorName}</p>
      </footer>
    )
  }
}

export default Footer;