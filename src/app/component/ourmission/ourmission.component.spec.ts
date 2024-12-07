import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurmissionComponent } from './ourmission.component';

describe('OurmissionComponent', () => {
  let component: OurmissionComponent;
  let fixture: ComponentFixture<OurmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurmissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
