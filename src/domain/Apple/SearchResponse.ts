import { AlbumInfo } from './AlbumInfo';

export type SearchResponse = {
  resultCount: number;
  results: AlbumInfo[];
};
