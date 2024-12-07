import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-ourvision',
  standalone: true,
  imports: [CommonModule,FooterComponent,NavBarComponent],
  templateUrl: './ourvision.component.html',
  styleUrl: './ourvision.component.css'
})
export class OurvisionComponent {

}
