import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-navbar',
  standalone: true,
  imports: [],
  templateUrl: './sub-navbar.component.html',
  styleUrl: './sub-navbar.component.css'
})
export class SubNavbarComponent {
  redirectToPortal() {
    window.open('https://www.cep.org.pe/portaldelcolegiado/', '_blank');  
  }
}
