import { Component } from '@angular/core';
import { LeagueApiService } from './league-api/league-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private leagueApiService: LeagueApiService) {

  }
  title = 'CGM ! ';

  async ngOnInit() {
    // let result = await this.leagueApiService.freeChampionRotation();
    let result = await this.leagueApiService.userInfo('zniszczyć');
    debugger
  }
}
