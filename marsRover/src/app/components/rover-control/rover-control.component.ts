import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RoverPosition, RoverService } from '../../services/rover.service';
import { RoverGridComponent } from '../rover-grid/rover-grid.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-rover-control',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, CommonModule, RoverGridComponent],
  templateUrl: './rover-control.component.html',
  styleUrl: './rover-control.component.css'
})
export class RoverControlComponent {
  command = '';
  position: RoverPosition = { x: 0, y: 0, direction: 'N' };

  constructor(private roverService: RoverService) { }

  sendCommand() {
    const isValidCommand = /^[LRMB]+$/.test(this.command.toUpperCase());
    if (!isValidCommand) {
      alert('Invalid command. Please use only L, R, M, or B.');
      return;
    }
    this.roverService.sendCommand(this.command.toUpperCase()).subscribe({
      next: (data) => {
        this.position = data;
        console.log('Position reçue :', this.position);
      },
      error: (err) => {
        console.error('Erreur du backend', err);
      }
    });
  }
}
