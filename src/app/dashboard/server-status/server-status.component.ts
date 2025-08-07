import { Component, input } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unkown' = 'online';

  constructor() {
    setInterval(() => {
      const rnd = Math.random();

      this.currentStatus =
        rnd < 0.5 ? 'online' : rnd < 0.8 ? 'offline' : 'unkown';
    }, 3000);
  }
}
