import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "react-image";

import Spinner from "../../components/Spinner/Spinner";
import ContactButton from "../../components/ContactButton/ContactButton";

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
  margin: 0.25rem;
`;

const ButtonWrapper = styled.div`
  margin: ${props => props.buttonWrapMargin ? props.buttonWrapMargin : "1rem"};
`;

const Image = styled(Img)`
  width: 100%;
  padding: 1rem;
  border-radius: ${props => props.borderradius ? props.borderradius : null};
`;

const StyledLink = styled.a`
  color: rgba(0, 0, 0, 0.65);
  &:hover {
    color: #17356d;
  }
`;

const ContactButtonContainer = ({
  href,
  faIcon,
  iconSrc,
  routeName,
  buttonWrapMargin,
  borderradius,
  buttonwidth,
  buttonheight
}) => {
  return (
    <StyledContainer>
      <ButtonWrapper buttonWrapMargin={buttonWrapMargin}>
        <ContactButton
          href={href}
          buttonwidth={buttonwidth}
          buttonheight={buttonheight}
        >
          {faIcon ? (
            <FontAwesomeIcon
              icon={faIcon}
              color="hsl(9, 34%, 50%, .7)"
              size="3x"
            />
          ) : (
            <Image
              src={iconSrc}
              alt={`Icon for ${routeName}`}
              loader={<Spinner />}
              borderradius={borderradius ? borderradius : null}
            />
          )}
        </ContactButton>
      </ButtonWrapper>
      <StyledLink href={href}>{routeName}</StyledLink>
    </StyledContainer>
  );
};

export default ContactButtonContainer;
