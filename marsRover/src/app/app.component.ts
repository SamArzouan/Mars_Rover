import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoverGridComponent } from "./components/rover-grid/rover-grid.component";
import { RoverControlComponent } from './components/rover-control/rover-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RoverGridComponent,
    RoverControlComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marsRover';
}
