import React, { useState } from 'react';
import SearchForm from './SearchForm';
import ArtWorkList from './ArtWorkList';
import { SearchResponse } from '../domain/Apple/SearchResponse';

const API_URL = 'https://itunes.apple.com/';

function App() {
  const [artWorks, setArtWorks] = useState<SearchResponse>({ resultCount: 0, results: [] });
  const getArtWorks = async (keyword: string) => {
    if (!keyword) {
      setArtWorks({ resultCount: 0, results: [] });
    }

    const results: SearchResponse = await fetch(
      `${API_URL}search?term=${keyword}&country=jp&media=music&entity=album`,
    ).then((response) => response.json());

    setArtWorks(results);
  };

  return (
    <div>
      <SearchForm onClick={getArtWorks} />
      <ArtWorkList artWorks={artWorks} />
    </div>
  );
}

export default App;
