import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-reclamos',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './reclamos.component.html',
  styleUrl: './reclamos.component.css'
})
export class ReclamosComponent {
  Buzon(){
     window.open('https://docs.google.com/forms/d/e/1FAIpQLScqVwmrLeq7riyk_-I-LcplZJttWiT4nZSfDjiOYXtcB44KIQ/viewform', '_blank')
  }
}
