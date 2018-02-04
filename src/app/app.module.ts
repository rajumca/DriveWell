import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SpeedLimitService } from './speed/speed-limit.service';
import { SpeedComponent } from './speed/speed.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'speed', component: SpeedComponent },
   { path: '', component: HomeComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    SpeedComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SpeedLimitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
