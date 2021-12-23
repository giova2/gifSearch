import React, {useEffect, useState} from 'react'
import {StyledSeachContainer} from './styled';
import {apiSearch} from '../../api';

export default function SearchBar({onResults}) {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    if(searchTerm.length > 3){
      (async () => {
        const {data, pagination} = await apiSearch(searchTerm);
        onResults({data, pagination});
      })();
    }
  }, [searchTerm])

  const handleSearch = (event) => {
    event.preventDefault();
    const {target:{value}} = event;
    setSearchTerm(value);
  }
  
  return (
    <StyledSeachContainer>
      <input onChange={handleSearch} value={searchTerm}/>
    </StyledSeachContainer>
  )
}
