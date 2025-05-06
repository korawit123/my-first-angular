import { Component } from '@angular/core';
import { headerComponent } from "./header.component";


@Component({
  selector: 'app-root',
  imports: [headerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
