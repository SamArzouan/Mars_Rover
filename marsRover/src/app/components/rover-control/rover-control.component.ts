import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RoverPosition, RoverService } from '../../services/rover.service';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-rover-control',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, CommonModule],
  templateUrl: './rover-control.component.html',
  styleUrl: './rover-control.component.css'
})
export class RoverControlComponent {
  command = '';
  position: RoverPosition | null = null;

  constructor(private roverService: RoverService) { }

  sendCommand() {
    this.roverService.sendCommand(this.command).subscribe((res) => {
      this.position = res;
    });
  }
}
