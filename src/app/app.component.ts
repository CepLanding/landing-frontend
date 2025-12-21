import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
// import { NgsRevealModule } from 'ngx-scrollreveal';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, WhatsappButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-cep';
}
