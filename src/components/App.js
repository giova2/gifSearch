import React, {useState} from 'react';
import SearchBar from './SearchBar';
import Gifs from './Gifs';
import {StyledApp} from './styled';

function App() {
  const [dataGifs, setDataGifs] = useState([]);
  const [pagination, setPagination] = useState(null);

  const handleResults = ({data, pagination:paginationGifs}) =>{
    setDataGifs(data);
    setPagination(paginationGifs);
  }

  return (
    <StyledApp>
      <SearchBar onResults={handleResults}/>
      <Gifs dataGifs={dataGifs} pagination={pagination}/>
    </StyledApp>
  );
}

export default App;
