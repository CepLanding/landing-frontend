import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuienesSomosComponent } from './components/nosotros/quienes-somos/quienes-somos.component';
import { FinesDeberesComponent } from './components/nosotros/fines-deberes/fines-deberes.component';
import { ReclamosComponent } from './components/tramites-servicios/reclamos/reclamos.component';
import { ConveniosComponent } from './components/convenios/convenios.component';
import { HimnoComponent } from './components/nosotros/himno/himno.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AsesoriaComponent } from './components/tramites-servicios/asesoria/asesoria.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'quienes-somos', component: QuienesSomosComponent },
    { path: 'fines-y-deberes', component: FinesDeberesComponent },
    { path: 'buzón-de-sugerencias-y-reclamos', component: ReclamosComponent },
    { path: 'convenios', component: ConveniosComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'himno', component: HimnoComponent },
    { path: 'asesoria-legal', component: AsesoriaComponent },

];
