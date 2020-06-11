import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
 // materi ngSwitch
  activities: any;
  // materi Pipe
  message:string="Welcome Angular fahrul istimiwir";
  amount:number=500;

  constructor(private http:HttpClient) { }

  // materi ngSwitch
  ngOnInit(): void {
    let respone = this.http.get("http://demo4690221.mockable.io/getActivities");
    respone.subscribe((data)=> this.activities=data);
  }

}
