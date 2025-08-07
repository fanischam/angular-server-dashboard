import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class DashboardItemComponent {
  img = input.required<{ src: string; alt: string }>();
  title = input.required<string>();
}
