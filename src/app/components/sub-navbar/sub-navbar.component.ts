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

  Inicio() {
    window.location.href = '/'; 
  }
  QuienesSomos() {
    window.location.href = '/quienes-somos'; 
  }
  FinesDeberes() {
    window.location.href = '/fines-y-deberes'; 
  }
  Colegiatura(){
    window.open('https://www.cep.org.pe/colelectonica/', '_blank');  
  }
  Enfermera(){
    window.open('https://www.cep.org.pe/validar/', '_blank');  
  }
  Reclamos() {
    window.location.href = '/buzón-de-sugerencias-y-reclamos'; 
  }
}
