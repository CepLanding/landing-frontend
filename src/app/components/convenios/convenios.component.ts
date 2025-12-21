import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-convenios',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './convenios.component.html',
  styleUrl: './convenios.component.scss'
})
export class ConveniosComponent {
  convenioSeleccionado: any = null;
  areaSeleccionada: any = null;
  areasConvenios = [
    {
      nombre: 'Salud',
      convenios: [
        { nombre: 'HS LAB', logoUrl: '/assets/img/convenios/logos/salud/hsLab.jpeg', descripcion: 'Laboratorio clínico de análisis avanzados.', enlaceEmpresa: 'https://hslaboratorio.com/', enlaceDrive: 'https://drive.google.com/...' },
        { nombre: 'Home Safety', logoUrl: '/assets/img/convenios/logos/salud/homeSafety.jpeg', descripcion: 'Servicios médicos a domicilio.', enlaceEmpresa: 'https://homesafetysac.com/', enlaceDrive: '' },
        { nombre: 'Luz y Vida', logoUrl: '/assets/img/convenios/logos/salud/LuzVida.jpeg', descripcion: 'Centro de salud integral.', enlaceEmpresa: 'https://clinicaluzyvida.com/', enlaceDrive: 'https://drive.google.com/drive/folders/1QjWN4xvnEhO7Xw-gF8DAyKYghqOSTUfm' },
        { nombre: 'Qura', logoUrl: '/assets/img/convenios/logos/salud/qura.png', descripcion: 'Consultas médicas especializadas.', enlaceEmpresa: 'https://www.facebook.com/qura.peru/', enlaceDrive: 'https://drive.google.com/drive/folders/18NcAwGUcdt3MLs7OThoK3Sf_rLj8MEQy' },
        { nombre: 'Farmedica', logoUrl: '/assets/img/convenios/logos/salud/farmedica.jpeg', descripcion: 'Cadena de farmacias.', enlaceEmpresa: 'https://www.instagram.com/farmedica_trujillo/', enlaceDrive: 'https://drive.google.com/drive/folders/1dB4Vq6RTDzU3Myw03ZgW6YFHrZz-iN1R' },
        { nombre: 'Medicina Crítica', logoUrl: '/assets/img/convenios/logos/salud/medicina_critica_emergencias.jpeg', descripcion: 'Atención médica intensiva.', enlaceEmpresa: 'https://medicinacriticasac.com/', enlaceDrive: 'https://drive.google.com/drive/folders/1SZGibCzisU81yxL07GRTR2tBm4H6feog' },
        { nombre: 'Centros Dentales del Norte', logoUrl: '/assets/img/convenios/logos/salud/centrosDentales.jpeg', descripcion: 'Clínica odontológica.', enlaceEmpresa: 'https://www.centrosdentalesdelnorte.com/', enlaceDrive: 'https://drive.google.com/drive/folders/1KdgIBR-tZyeJj4gtMAjp0VjNa-YpDRuZ' },
        { nombre: 'Escacorp', logoUrl: '/assets/img/convenios/logos/salud/escacorp.jpeg', descripcion: 'Exámenes ocupacionales.', enlaceEmpresa: 'https://www.facebook.com/escacorp.pe/?locale=es_LA', enlaceDrive: 'https://drive.google.com/drive/folders/1k1DTWPfyMv4durZymHaZbgkNm09bRmwo' },
        { nombre: 'Cinetica', logoUrl: '/assets/img/convenios/logos/salud/cinetica.jpeg', descripcion: 'Fisioterapia y rehabilitación.', enlaceEmpresa: 'https://cineticamedicinadeportiva.pe/', enlaceDrive: 'https://drive.google.com/drive/folders/1NMRK6_xsGV95NIPgwNtssIRa8DuN1Gf5' },
        { nombre: 'Bermanlab', logoUrl: '/assets/img/convenios/logos/salud/bermanlab.png', descripcion: 'Laboratorio clínico.', enlaceEmpresa: 'https://www.bermanlab.com/', enlaceDrive: 'https://drive.google.com/drive/folders/124UwhJPNBR68PPp2WTfZ8v_8cu2Ol8PF' },
        { nombre: 'Quintanilla', logoUrl: '/assets/img/convenios/logos/salud/quintanilla.jpeg', descripcion: 'Clínica médica.', enlaceEmpresa: 'https://www.labquintanilla.com.pe/', enlaceDrive: 'https://drive.google.com/drive/folders/1ZS_zwc2gt8KQ2yZgE-0z5SkWrDQ_sdSp' },
        { nombre: 'Clínica San Pablo', logoUrl: '/assets/img/convenios/logos/salud/clinicaSanPablo.png', descripcion: 'Red de clínicas a nivel nacional.', enlaceEmpresa: 'https://www.sanpablotrujillo.com.pe/', enlaceDrive: 'https://drive.google.com/drive/folders/1h--lk_xEVyn6ePghPIm1zuKIeFsSX6af' },
        { nombre: 'Multident', logoUrl: '/assets/img/convenios/logos/salud/multident.jpeg', descripcion: 'Servicios dentales.', enlaceEmpresa: 'https://www.multident.pe/site', enlaceDrive: 'https://drive.google.com/drive/folders/1QoDl26uCQyt3uyymY2M-rv982cA3sVfk' },
        { nombre: 'Innova Medic', logoUrl: '/assets/img/convenios/logos/salud/innova.jpeg', descripcion: 'Clínica de especialidades.', enlaceEmpresa: 'https://www.facebook.com/innovamedictrujillo/?locale=es_LA', enlaceDrive: 'https://drive.google.com/drive/folders/1QoDl26uCQyt3uyymY2M-rv982cA3sVfk' },
        { nombre: 'Yuvis', logoUrl: '/assets/img/convenios/logos/salud/yuvis.jpeg', descripcion: 'Consultorio médico.', enlaceEmpresa: 'https://www.facebook.com/yuvissac.centromedico/', enlaceDrive: 'https://drive.google.com/drive/folders/1SsDFkhIZT1ww6jrocfXkVUotYNmvZJRi' },
        { nombre: 'Oftalmo Visión', logoUrl: '/assets/img/convenios/logos/salud/oftalmoVision.png', descripcion: 'Centro de oftalmología.', enlaceEmpresa: 'https://www.facebook.com/clinicaoftalmovisiontrujillo/?locale=es_LA', enlaceDrive: 'https://drive.google.com/drive/folders/1QoGKwlRRAFKZNiHgCBFzIJLzhFAamPpM' },
        { nombre: 'Centro Médico California', logoUrl: '/assets/img/convenios/logos/salud/centroMedicoCalifornia.jpeg', descripcion: 'Centro de salud integral.', enlaceEmpresa: 'https://centromedicocalifornia.com/', enlaceDrive: 'https://drive.google.com/drive/folders/1MB-MzunOERULEugxr7JnDKwNspP-_fai' },
        { nombre: 'Vida Láser', logoUrl: '/assets/img/convenios/logos/salud/vidaLaser.png', descripcion: 'Tratamientos estéticos y médicos.', enlaceEmpresa: 'https://www.facebook.com/people/Vida-L%C3%A1ser/100095361361364/', enlaceDrive: 'https://drive.google.com/drive/folders/1M3OSZY9yKMJUVABGRTXN5GtzrqVnRip8' },
        { nombre: 'TomoNorte', logoUrl: '/assets/img/convenios/logos/salud/tomonorte.png', descripcion: 'Diagnóstico por imágenes.', enlaceEmpresa: 'https://tomonorte.com/', enlaceDrive: 'https://drive.google.com/drive/folders/1S3XsE29fYjOelGBconewMHhr9OZFvKp8?usp=drive_link' }
      ]
    },
    {
      nombre: 'Educación',
      convenios: [
        { nombre: 'UCV', logoUrl: '/assets/img/convenios/logos/educacion/ucv.png', descripcion: 'Universidad César Vallejo.', enlaceEmpresa: 'https://www.ucv.edu.pe/', enlaceDrive: 'https://drive.google.com/drive/folders/1zpy0X49cOaB9jouK4nyubLylnQ_xLwlq' },
        { nombre: 'IOL', logoUrl: '/assets/img/convenios/logos/educacion/iol.jpg', descripcion: 'Instituto de idiomas.', enlaceEmpresa: 'https://www.facebook.com/internationalopenlanguage/', enlaceDrive: 'https://drive.google.com/drive/folders/1qlqaCazkHTly8eW9KtWsjX1r5TDLnwIz' },
        { nombre: 'Colegio San Agustín', logoUrl: '/assets/img/convenios/logos/educacion/colegioSanAgustin.png', descripcion: '', enlaceEmpresa: 'https://sanagustintrujillo.com/', enlaceDrive: 'https://drive.google.com/drive/folders/1qJmnEoJXI4kW6q9K65nsG8WLaL5YCNB1' },
        { nombre: 'Mindset', logoUrl: '/assets/img/convenios/logos/educacion/mindset.png', descripcion: '', enlaceEmpresa: 'https://www.facebook.com/mindset.consultoria.inteligente/', enlaceDrive: 'https://drive.google.com/drive/folders/1l2z6F4KwCACIOcvCOofT1IR9JrTIl6zO' },
        { nombre: 'USS', logoUrl: '/assets/img/convenios/logos/educacion/señorSipan.png', descripcion: '', enlaceEmpresa: 'https://www.uss.edu.pe/uss/Inicio', enlaceDrive: 'https://drive.google.com/drive/folders/14UBFNJTfYf5eUkB9ctndNUfRT8JaSmjs' },
        { nombre: 'Escola Portuguesa', logoUrl: '/assets/img/convenios/logos/educacion/escolaPortugues.png', descripcion: '', enlaceEmpresa: 'https://www.facebook.com/Portuguesparalatinos/', enlaceDrive: 'https://drive.google.com/drive/folders/1hhICITmiwnsD26bjdVTJZgrJXDptEXH4' },
        { nombre: 'Growing Up', logoUrl: '/assets/img/convenios/logos/educacion/growingUp.jpg', descripcion: '', enlaceEmpresa: 'https://fgrowingup.wixsite.com/inicio?fbclid=IwY2xjawM1mDBleHRuA2FlbQIxMABicmlkETFYdmRwWW1Za1ZvM1F4Qnh1AR5KPZmsJOovNwJ3In4yRIuyRk8uwMmDdGjb5cV5s5GbxDpKvHLUQmiZr811aA_aem_1IeauWgFFrwGT0RzCj5-Pg', enlaceDrive: 'https://drive.google.com/drive/folders/1dphS1o_fO6l8gsVpj_HbRGpHVTtqpqci' },
        { nombre: 'UCH', logoUrl: '/assets/img/convenios/logos/educacion/UCH.png', descripcion: '', enlaceEmpresa: 'https://www.uch.edu.pe/', enlaceDrive: 'https://drive.google.com/drive/folders/1EDPXpfczx61b7OV1ioPmW6flaXHByyKx?usp=drive_link' },
        { nombre: 'Universidad Norbert Wiener', logoUrl: '/assets/img/convenios/logos/educacion/universidadNorbert.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'UPAO', logoUrl: '/assets/img/convenios/logos/educacion/upao.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'Bruning', logoUrl: '/assets/img/convenios/logos/educacion/bruning.jpg', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'Universidad Científica', logoUrl: '/assets/img/convenios/logos/educacion/universidadCientifica.jpeg', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'Líder A Internacional', logoUrl: '/assets/img/convenios/logos/educacion/liderA.jpeg', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' }
      ]
    },
    {
      nombre: 'Gastronomía',
      convenios: [
        { nombre: 'Coquito', logoUrl: '/assets/img/convenios/logos/gastronomia/coquito.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'Cebichería Flipper', logoUrl: '/assets/img/convenios/logos/gastronomia/flipper.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'Dulcinelly', logoUrl: '/assets/img/convenios/logos/gastronomia/dulcinelly.jpeg', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'Casa Quimuk', logoUrl: '/assets/img/convenios/logos/gastronomia/quimuc.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'El Gran Café', logoUrl: '/assets/img/convenios/logos/gastronomia/granCafe.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' }
      ]
    },
    {
      nombre: 'Funeraria',
      convenios: [
        { nombre: 'Parque Eterno', logoUrl: '/assets/img/convenios/logos/funeraria/parque.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'El Remanso', logoUrl: '/assets/img/convenios/logos/funeraria/remanso.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' }
      ]
    },
    {
      nombre: 'Mecánica',
      convenios: [
        { nombre: 'Certificadora Andina SAC', logoUrl: '/assets/img/convenios/logos/mecanica/certificadora.jpeg', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' }
      ]
    },
    {
      nombre: 'Estética',
      convenios: [
        { nombre: 'Clínica Zegarra', logoUrl: '/assets/img/convenios/logos/estetica/clinicaZegarra.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'Rostros Spa', logoUrl: '/assets/img/convenios/logos/estetica/rostros.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'Dr. Kleyn', logoUrl: '/assets/img/convenios/logos/estetica/drKleyn.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' }
      ]
    },
    {
      nombre: 'Recreación',
      convenios: [
        { nombre: 'La UCI', logoUrl: '/assets/img/convenios/logos/recreacion/UCI.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'Villa Kyooko', logoUrl: '/assets/img/convenios/logos/recreacion/kyooko.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' }
      ]
    },
    {
      nombre: 'Deporte',
      convenios: [
        { nombre: 'Xmega Fit', logoUrl: '/assets/img/convenios/logos/deporte/megaFit.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' }
      ]
    },
    {
      nombre: 'Colegios Profesionales',
      convenios: [
        { nombre: 'Colegio de Contadores Públicos de La Libertad', logoUrl: '/assets/img/convenios/logos/colegios/contadores.jpeg', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'Colegio de Ingenieros del Perú', logoUrl: '/assets/img/convenios/logos/colegios/ingenieros.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' }
      ]
    },
    {
      nombre: 'Hotelería y Turismo',
      convenios: [
        { nombre: 'J&J Travel', logoUrl: '/assets/img/convenios/logos/hoteleria/jjTravel.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'Roswal Hotel', logoUrl: '/assets/img/convenios/logos/hoteleria/roswal.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'Gold Lands Travel', logoUrl: '/assets/img/convenios/logos/hoteleria/gold.jpeg', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'Hotel Restaurant Xauxa', logoUrl: '/assets/img/convenios/logos/hoteleria/xauxa.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'Wyka Hotel', logoUrl: '/assets/img/convenios/logos/hoteleria/wyka.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' },
        { nombre: 'Viru Tours Travel', logoUrl: '/assets/img/convenios/logos/hoteleria/viru.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' }
      ]
    },
    {
      nombre: 'Inmobiliaria',
      convenios: [
        { nombre: 'Grupo Inmobiliario Codeli SAC', logoUrl: '/assets/img/convenios/logos/inmobiliaria/codeli.png', descripcion: '', enlaceEmpresa: '', enlaceDrive: '' }
      ]
    }
  ];

  ngOnInit() {
    this.areaSeleccionada = this.areasConvenios.find(area => area.nombre === 'Salud');
  }


  seleccionarArea(area: any) {
    this.areaSeleccionada = area;
  }

  abrirModal(convenio: any): void {
    this.convenioSeleccionado = convenio;
  }

  cerrarModal(): void {
    this.convenioSeleccionado = null;
  }
}
