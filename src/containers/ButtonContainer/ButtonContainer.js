import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "react-image";

import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Button/Button";

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

const StyledLink = styled(Link)`
  color: rgba(0, 0, 0, 0.65);
  &:hover {
    color: #17356d;
  }
`;

const ButtonContainer = ({
  route,
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
        <Button
          route={`../../routes/${route}`}
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
        </Button>
      </ButtonWrapper>
      <StyledLink to={`../../routes/${route}`}>{routeName}</StyledLink>
    </StyledContainer>
  );
};

export default ButtonContainer;
