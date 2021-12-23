import React from 'react'
import {StyledGifsContainer, StyledGifContainer, StyledGif} from './styled';

export default function Gifs({dataGifs, pagination}) {
  return (
    <StyledGifsContainer>
      {dataGifs.map(({id, images:{preview_gif}})=> 
        <StyledGifContainer key={id} >
          <StyledGif src={preview_gif.url} />
        </StyledGifContainer>
      )}
    </StyledGifsContainer>
  )
}
