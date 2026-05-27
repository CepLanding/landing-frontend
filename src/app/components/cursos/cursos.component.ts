import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  selectedImage: string | null = null;

  categoriaActiva: string = 'Viernes de Ciencia y Cuidado';

  categorias: Record<string, string[]> = {

    'Viernes de Ciencia y Cuidado': this.generarImagenes(
      'Viernes de Ciencia y Cuidado',
      14
    ),

    'Cursos Consejo Regional II': this.generarImagenes(
      'Cursos Consejo Regional II',
      5
    ),

    'CICAT': this.generarImagenes(
      'CICAT',
      3
    )

  };

  /**
   * Genera automáticamente:
   * /assets/img/cursos/carpeta/1.jpeg
   * /assets/img/cursos/carpeta/2.jpeg
   */
  generarImagenes(carpeta: string, cantidad: number): string[] {

    return Array.from(
      { length: cantidad },
      (_, index) =>
        `/assets/img/cursos/${carpeta}/${index + 1}.jpeg`
    );

  }

  openImage(src: string): void {
    this.selectedImage = src;
  }

  closeImage(): void {
    this.selectedImage = null;
  }

  cambiarCategoria(categoria: string): void {
    this.categoriaActiva = categoria;
  }

  get imagenesCategoria(): string[] {
    return this.categorias[this.categoriaActiva] || [];
  }

}