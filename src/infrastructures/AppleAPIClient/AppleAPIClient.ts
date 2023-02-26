import { SearchResponse } from '@/domain/Apple/SearchResponse';

export default class AppleAPIClient {
  private static API_URL = 'https://itunes.apple.com/';

  public static async searchAlbum(keyword: string): Promise<SearchResponse> {
    return fetch(`${this.API_URL}search?term=${keyword}&country=jp&media=music&entity=album`).then((response) =>
      response.json(),
    );
  }
}
