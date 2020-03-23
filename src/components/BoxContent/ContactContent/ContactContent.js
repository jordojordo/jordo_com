import React from "react";
import styled from "styled-components";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

import ContactButtonContainer from "../../../containers/ContactButtonContainer/ContactButtonContainer";
import githubIcon from "../../../assets/github.svg";
import gitlabIcon from "../../../assets/gitlab.svg";
import instaIcon from "../../../assets/instagram.svg";

const Div = styled.div`
  width: 100%;
  height: 98%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const ContactContent = () => {
  return (
    <Div>
      <ContactButtonContainer
        href="mailto:jordonleach@gmail.com"
        faIcon={faEnvelopeOpenText}
        routeName="Email"
      />
      <ContactButtonContainer
        href="https://gitlab.com/jordonleach"
        iconSrc={gitlabIcon}
        routeName="Gitlab"
      />
      <ContactButtonContainer
        href="https://github.com/jordojordo"
        iconSrc={githubIcon}
        routeName="Github"
      />
      <ContactButtonContainer
        href="https://www.instagram.com/jordo.log/"
        iconSrc={instaIcon}
        routeName="Instagram"
      />
    </Div>
  );
};

export default ContactContent;
