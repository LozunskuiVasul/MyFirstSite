import React, { Component } from "react";
import { Passers } from "prop-passer";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  PinterestShareButton,


  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  PinterestIcon,
 
} from "react-share";

import SubShareCSS from "./CSS";
import './styles_SubShare.css';

class SubShare extends Component {

  render() {

    const {
      url = String(window.location),
      title = "Steadylearner Website",
      shareImage = "https://www.steadylearner.com/static/images/brand/prop-passer.png",
      size = "2.5rem",
    } = this.props;

    const ShareList = Passers({
      url,
      className: "network__share-button",
    })({
      className: "network cursor-pointer hover transition--default",
      title: `Share ${String(window.location)}`,
    })("li");

    return (
      <SubShareCSS >
        <ShareList className='flex-share' >
           
          <FacebookShareButton
            quote={title}
          >
            <FacebookIcon
              size={size}
            />
          </FacebookShareButton>

          <TwitterShareButton
            title={title}
          >
            <TwitterIcon
              size={size}
            />
          </TwitterShareButton>

          <WhatsappShareButton
            title={title}
            separator=":: "
          >
            <WhatsappIcon size={size} />
          </WhatsappShareButton>

          <LinkedinShareButton
            title={title}
            windowWidth={750}
            windowHeight={600}
          >
            <LinkedinIcon
              size={size}

            />
          </LinkedinShareButton>

          <PinterestShareButton
            url={String(window.location)}
            media={`${shareImage}`}
            windowWidth={1000}
            windowHeight={730}
          >
            <PinterestIcon size={size} />
          </PinterestShareButton>
        
        </ShareList>
      </SubShareCSS>
    );
  }
}

export default SubShare;

