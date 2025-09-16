import { Component } from '@angular/core';
import { SubNavbarComponent } from '../sub-navbar/sub-navbar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SubNavbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
