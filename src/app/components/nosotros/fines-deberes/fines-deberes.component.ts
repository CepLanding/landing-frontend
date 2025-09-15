import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-fines-deberes',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './fines-deberes.component.html',
  styleUrl: './fines-deberes.component.css'
})
export class FinesDeberesComponent {

}
