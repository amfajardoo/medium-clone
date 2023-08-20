import { Component } from '@angular/core';
import { APP_IMPORTS } from '@common/imports';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: APP_IMPORTS,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
