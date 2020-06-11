import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivityComponent } from './activity/activity.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayersComponent } from './players/players.component';
import { AgePipe } from './age.pipe';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ScorePipe } from './score.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    PlayersComponent,
    AgePipe,
    FilterPipe,
    ScorePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
