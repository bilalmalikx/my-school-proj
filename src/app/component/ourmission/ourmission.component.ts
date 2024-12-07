import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-ourmission',
  standalone: true,
  imports: [CommonModule,FormsModule,NavBarComponent,FooterComponent],
  templateUrl: './ourmission.component.html',
  styleUrl: './ourmission.component.css'
})
export class OurmissionComponent {
   heading: string = "Our Mission"
   showGallery = false; // State to track gallery visibility

   toggleGallery() {
     this.showGallery = !this.showGallery; // Toggle gallery visibility on button click
   }
}
