import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
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
export class HomeComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const elements = this.el.nativeElement.querySelectorAll('.scroll-animate');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el: Element) => observer.observe(el));
  }

  // ---- Your existing carousel code ----
  currentIndex = 0;

  images = [
    { src: 'assets/images/computerroom.jpg', alt: 'Gallery Image 1' },
    { src: 'assets/images/chemistrylab.jpg', alt: 'Gallery Image 2' },
    { src: 'assets/images/admission.jpg', alt: 'Gallery Image 3' },
    { src: 'assets/images/school-campus.jpg', alt: 'Gallery Image 4' },
  ];

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex =
      this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }
}
