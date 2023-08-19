import { Component } from '@angular/core';
import { APP_IMPORTS } from '@common/imports';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: APP_IMPORTS,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = environment.BASE_URL;
}
