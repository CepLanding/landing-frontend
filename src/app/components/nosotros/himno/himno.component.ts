import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-himno',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './himno.component.html',
  styleUrl: './himno.component.css'
})
export class HimnoComponent {

  // 👉 CONTROL DE PESTAÑAS
  selectedTab: string = 'enfermera';

  showLyrics = false;

  // 👉 HIMNO DE LA ENFERMERA
  himno = [
    [
      'Enfermera, elevada conciencia',
      'que se expresa en sagrada misión.',
      'En tu mente es la ciencia delicado',
      'y viviente fulgor.'
    ],
    [
      'El valor es un don de tu alma.',
      'El consuelo de tu corazón.',
      'Cuántas veces el niño sonríe',
      'y se aferra a la vida tu voz.'
    ],
    [
      'Una frase a la madre angustiada',
      'es un bálsamo contra el dolor.',
      'Suave, culta, serena y humana,',
      'solidaria y discreta en tu amor.'
    ],
    [
      'Tu constancia doblega la muerte',
      'obediente al mandato de Dios.'
    ],
    [
      'Enfermera, elevada conciencia',
      'que se expresa en sagrada misión.',
      'En tu mente es la ciencia delicado',
      'y viviente fulgor.',
      'El valor es un don de tu alma.',
      'El consuelo de tu corazón.'
    ]
  ];

}