import React, { useState } from 'react';
import SearchForm from '@/components/SearchForm';
import ArtWorkList from '@/components/ArtWorkList';
import { SearchResponse } from '@/domain/Apple/SearchResponse';
import AppleAPIClient from '@/infrastructures/AppleAPIClient';

function App() {
  const [artWorks, setArtWorks] = useState<SearchResponse>({ resultCount: 0, results: [] });
  const getArtWorks = async (keyword: string) => {
    if (!keyword) {
      setArtWorks({ resultCount: 0, results: [] });
    }

    const results = await AppleAPIClient.searchAlbum(keyword);

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
