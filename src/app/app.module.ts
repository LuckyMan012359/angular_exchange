import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Connect_modal_component } from 'src/component/connect_modal/connect_modal.component';
import { HomeComponent } from 'src/component/home/home.component';
import { AboutComponent } from 'src/component/about/about.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   { path: '', redirectTo: '/home', pathMatch: 'full' },
    //   { path: 'home', component: HomeComponent },
    //   { path: 'about', component: AboutComponent },
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
