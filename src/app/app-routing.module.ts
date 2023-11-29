
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OpcionesEmpleoComponent } from './opciones-empleo/opciones-empleo.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'opciones-empleo', component: OpcionesEmpleoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a la página de login por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
