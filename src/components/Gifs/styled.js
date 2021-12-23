import styled from "styled-components";

export const StyledGifsContainer = styled.div`
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
  width: calc(100vw - 2rem);
  margin: 1rem 2rem;
`

export const StyledGifContainer = styled.div`
  border: 2px solid red;
  width: 33.3%;//${({width}) => width+'px'};
  height: 30vh;//${({height}) => height+'px'};
  flex-grow: 1;
`;
export const StyledGif = styled.img`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
`;