import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
@Component({
  selector: 'app-right-header',
  standalone: true,
  imports: [FieldsetModule],
  templateUrl: './right-header.component.html',
  styleUrl: './right-header.component.css',
})
export class RightHeaderComponent {}
