import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-login-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './email-login-component.component.html',
  styleUrl: './email-login-component.component.css'
})
export class EmailLoginComponentComponent {
  email = '';
  password = '';
  message = '';

  login() {
    if (this.email === 'test@example.com' && this.password === 'password123') {
      this.message = 'Hello, World!';
    } else {
      this.message = 'Invalid email or password.';
    }
  }
}
