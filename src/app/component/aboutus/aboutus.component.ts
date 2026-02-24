import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule,RouterLink,NavBarComponent,FooterComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const elements = this.el.nativeElement.querySelectorAll('.scroll-animate');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              'animate__animated',
              'animate__fadeInUp',
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el: Element) => observer.observe(el));
  }
  email:string = "kinn.school@yahoo.com";
}
