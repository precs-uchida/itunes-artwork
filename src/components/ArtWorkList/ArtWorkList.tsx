import React from 'react';
import { SearchResponse } from '@/domain/Apple/SearchResponse';

type Props = {
  artWorks: SearchResponse;
};

function ArtWorkList({ artWorks }: Props) {
  return (
    <div>
      <span>全{artWorks.resultCount}件</span>
      {artWorks.results.map((v) => (
        <div key={v.collectionId}>
          <img src={v.artworkUrl100} alt={v.collectionName} />
          <div>{v.artistName}</div>
          <div>{v.collectionName}</div>
        </div>
      ))}
    </div>
  );
}

export default ArtWorkList;
