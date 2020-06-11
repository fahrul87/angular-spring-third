import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
// Materi Custom Pipe
players:any;
saerchName:string="";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let response= this.http.get("https://demo4690221.mockable.io/getPlayersHistory");
    response.subscribe((data)=>this.players=data);
  }

}
