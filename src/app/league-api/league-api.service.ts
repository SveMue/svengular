import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const sevenKey = 'RGAPI-3337110c-bdff-4908-9214-da8b3bdc5852';
// https://developer.riotgames.com/regional-endpoints.html
const baseUrl = 'https://euw1.api.riotgames.com/';
@Injectable()
export class LeagueApiService {
  constructor(private http: HttpClient) {
  }
  freeChampionRotation() {
    let tes = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/RiotSchmick?api_key=' + sevenKey;
    // return this.http.get(this.formatUrl('lol/platform/v3/champion-rotations')).toPromise();
    // return this.http.get('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/RiotSchmick?api_key=RGAPI-3337110c-bdff-4908-9214-da8b3bdc5852').toPromise();
    let header = new HttpHeaders();
    header.append('api_key', sevenKey);
    // return this.http.get(tes, {
    //   headers: header
    // }).toPromise();
    return this.http.get('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/RiotSchmick?api_key=' + sevenKey).toPromise();
    // lol / summoner / v4 / summoners / by - name / RiotSchmick
  }

  private formatUrl(methode: string) {
    return `${baseUrl}${methode}${sevenKey}`;
  }

  private encoded(value: string) {
    return encodeURI(value);
  }

  public userInfo(username: string) {
    let encodedUsername = this.encoded(username);
    let header = new HttpHeaders();
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Methods', '*');
    header.append('Access-Control-Allow-Headers', 'application/x-www-form-urlencoded');
    // return this.http.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodedUsername}?api_key=RGAPI-3337110c-bdff-4908-9214-da8b3bdc5852`,
    return this.http.get(`https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-3337110c-bdff-4908-9214-da8b3bdc5852`,
    {headers:header}).toPromise();
  }
}
