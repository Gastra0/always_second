import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'always_second_v2';
  dockItems = [{label: "Intro"}, {label: "Given"}, {label: "Donaters"}, {label: "Report"}, {label: "Receivers"}];
}
