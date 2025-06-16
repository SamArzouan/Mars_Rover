import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverControlComponent } from './rover-control.component';

describe('RoverControlComponent', () => {
  let component: RoverControlComponent;
  let fixture: ComponentFixture<RoverControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoverControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoverControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
