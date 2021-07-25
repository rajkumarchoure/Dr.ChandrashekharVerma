import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './Hospitals/details/details.component';
import { HomeComponent } from './Hospitals/home/home.component';
import { ContactmeComponent } from './Hospitals/contactme/contactme.component';
import { MaleriaComponent } from './Hospitals/Disease/maleria/maleria.component';
import { BlackfungusComponent } from './Hospitals/Disease/blackfungus/blackfungus.component';
import { TuborclosisComponent } from './Hospitals/Disease/tuborclosis/tuborclosis.component';
import { OtherdiseaseComponent } from './Hospitals/Disease/otherdisease/otherdisease.component';
import { HypertensionComponent } from './Hospitals/Disease/hypertension/hypertension.component';
import { DiabetesComponent } from './Hospitals/Disease/diabetes/diabetes.component';
const routes: Routes = [
  {path: 'disease/diabetes', component: DiabetesComponent},
  {path: 'disease/hypertension', component: HypertensionComponent},
  {path: 'disease/otherdisease', component: OtherdiseaseComponent},
  {path: 'disease/tuborclosis', component: TuborclosisComponent},
  {path: 'disease/blackfungus', component: BlackfungusComponent},
  {path: 'disease/maleria', component: MaleriaComponent},
  {path: 'contactme', component: ContactmeComponent},
  {path: 'details', component: DetailsComponent},
  {path: '' , component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DetailsComponent, HomeComponent, ContactmeComponent, MaleriaComponent, BlackfungusComponent, TuborclosisComponent, OtherdiseaseComponent, HypertensionComponent, DiabetesComponent] ;   
