import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-asesoria',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './asesoria.component.html',
  styleUrl: './asesoria.component.css'
})
export class AsesoriaComponent {

}
