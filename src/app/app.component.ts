import { TokenService } from './token.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TokenService]
})
export class AppComponent {
  title = 'app works!';
}
