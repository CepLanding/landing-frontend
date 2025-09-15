import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {

}
