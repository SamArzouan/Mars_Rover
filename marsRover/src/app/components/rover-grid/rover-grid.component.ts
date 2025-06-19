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

  isRoverAt(x: number, y: number): string {
    if (!this.position) return '';
    if (this.position.x === x && this.position.y === y) {
      return this.getDirectionSymbol();
    }
    return '';
  }
  getDirectionSymbol(): string {
    switch (this.position?.direction) {
      case 'N': return '⬆️';
      case 'E': return '➡️';
      case 'S': return '⬇️';
      case 'W': return '⬅️';
      default: return '🛰️';
    }
  }

  get rows() {
    return Array.from({ length: this.gridSize }, (_, i) => i);
  }
  

  get cols() {
    return Array.from({ length: this.gridSize }, (_, i) => i);
  }
}
