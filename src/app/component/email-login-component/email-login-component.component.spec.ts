import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailLoginComponentComponent } from './email-login-component.component';

describe('EmailLoginComponentComponent', () => {
  let component: EmailLoginComponentComponent;
  let fixture: ComponentFixture<EmailLoginComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailLoginComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
