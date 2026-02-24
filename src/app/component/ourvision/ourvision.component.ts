import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-ourvision',
  standalone: true,
  imports: [CommonModule,FooterComponent,NavBarComponent],
  templateUrl: './ourvision.component.html',
  styleUrl: './ourvision.component.css'
})
export class OurvisionComponent implements AfterViewInit {
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

}
