import { Component, Input } from '@angular/core';
import { RoverPosition } from '../../services/rover.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rover-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rover-grid.component.html',
  styleUrl: './rover-grid.component.css'
})
export class RoverGridComponent {
  @Input() position: RoverPosition | null = null;
  @Input() gridSize: number = 5;

  isRoverAt(x: number, y: number): boolean {
    if (!this.position) return false;
    return this.position.x === x && this.position.y === y;
  }
}
