import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-fam',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './fam.component.html',
  styleUrl: './fam.component.css'
})
export class FamComponent {

}
