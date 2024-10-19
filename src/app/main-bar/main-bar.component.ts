import { Component } from '@angular/core';
import { RightBodyComponent } from './right-body/right-body.component';
import { RightHeaderComponent } from './right-header/right-header.component';

@Component({
  selector: 'app-main-bar',
  standalone: true,
  imports: [RightBodyComponent, RightHeaderComponent],
  templateUrl: './main-bar.component.html',
  styleUrl: './main-bar.component.css',
})
export class MainBarComponent {}
