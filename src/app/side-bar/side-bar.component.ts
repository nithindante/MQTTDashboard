import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  profileForm = new FormGroup({
    DiscUsage: new FormControl(''),
    AASTotalcount: new FormControl(''),
  });
}
