import { Component } from '@angular/core';
import { HeaderComponent } from 'src/component/header/header.component';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routing-example';
  
}
