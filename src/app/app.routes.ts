import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuienesSomosComponent } from './components/nosotros/quienes-somos/quienes-somos.component';
import { FinesDeberesComponent } from './components/nosotros/fines-deberes/fines-deberes.component';
import { ReclamosComponent } from './components/nosotros/reclamos/reclamos.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'quienes-somos', component: QuienesSomosComponent },
    { path: 'fines-y-deberes', component: FinesDeberesComponent },
    { path: 'buzón-de-sugerencias-y-reclamos', component: ReclamosComponent }

];
