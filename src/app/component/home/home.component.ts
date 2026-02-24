import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    ReactiveFormsModule,
    RouterLink,
    NavBarComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  currentIndex = 0; // Set the initial image index to 0

  // Array of images
  images = [
    { src: 'assets/images/computerroom.jpg', alt: 'Gallery Image 1' },
    { src: 'assets/images/chemistrylab.jpg', alt: 'Gallery Image 2' },
    { src: 'assets/images/admission.jpg', alt: 'Gallery Image 3' },
    { src: 'assets/images/school-campus.jpg', alt: 'Gallery Image 4' },
  ];

  // Move to the next image in the carousel
  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  // Move to the previous image in the carousel
  prevImage() {
    this.currentIndex =
      this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

}
