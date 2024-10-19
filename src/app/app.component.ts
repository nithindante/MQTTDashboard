import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainBarComponent } from './main-bar/main-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainBarComponent, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MQTTDashboard';
}
