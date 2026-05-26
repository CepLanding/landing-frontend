import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-junta-directiva',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './junta-directiva.component.html',
  styleUrl: './junta-directiva.component.css'
})
export class JuntaDirectivaComponent {

  miembros = [
    {
      nombre: 'ENF. MARÍA GLADYS ESPINOZA LLERENA',
      cargo: 'DECANA',
      descripcion: 'Descripción breve del miembro de la junta directiva.',
      img: 'assets/img/juntaDirectiva/Decana.jpg'
    },
    {
      nombre: 'ENF. CARLOS CHICLOTE SUELPRES',
      cargo: 'SECRETARIO',
      descripcion: 'Descripción breve del miembro de la junta directiva.',
      img: 'assets/img/juntaDirectiva/Secretario.jpg'
    },
    {
      nombre: 'ENF. ROXANA MARIBEL RIVEROS VENEROS',
      cargo: 'TESORERA',
      descripcion: 'Descripción breve del miembro de la junta directiva.',
      img: 'assets/img/juntaDirectiva/Tesorera.jpg'
    },
    {
      nombre: 'ENF. BEATRIZ SOLEDAD RODRÍGUEZ ALAYO',
      cargo: 'VOCAL I',
      descripcion: 'Descripción breve del miembro de la junta directiva.',
      img: 'assets/img/juntaDirectiva/Vocal I.jpg'
    },
    {
      nombre: 'ENF. AMADEO MARTÍN BENÍTES GONZÁLEZ',
      cargo: 'VOCAL II',
      descripcion: 'Descripción breve del miembro de la junta directiva.',
      img: 'assets/img/juntaDirectiva/Vocal II.jpg'
    }
  ];
}
