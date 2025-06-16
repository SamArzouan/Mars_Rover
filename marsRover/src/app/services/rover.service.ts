import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoverService {
  private url = 'http://localhost:3000/rover/command';

  constructor(private http: HttpClient) { }

  sendCommand(command: string) {
    return this.http.post<RoverPosition>(this.url, { command });
  }
}

export interface RoverPosition {
  x: number;
  y: number;
  direction: string;
}
