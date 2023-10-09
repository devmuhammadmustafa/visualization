import styled from "styled-components";
import { memo } from "react";
const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/default-user.jpg" alt="Logo" />
    </StyledLogo>
  );
}

export default memo(Logo);
