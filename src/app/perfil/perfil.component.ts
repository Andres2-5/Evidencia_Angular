// src/app/perfil/perfil.component.ts

import { Component, Input } from '@angular/core';
import { Empleado } from './perfil.component.spec'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  @Input() empleado: Empleado | undefined;
}
