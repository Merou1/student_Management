import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { EtablissementComponent } from './etablissement/etablissement.component';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentComponent },
  { path: 'etablissements', component: EtablissementComponent }
];
