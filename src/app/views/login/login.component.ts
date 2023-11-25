import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import HeaderComponent from '../../shared/shared-components/header/header.component';
import CarouselComponent from './carousel/carousel.component';
import FooterComponent from '../../shared/shared-components/footer/footer.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
   
    CommonModule,
    FooterComponent,
    HeaderComponent,
    CarouselComponent,
  

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  public email: string = '';
  public emailError: string = '';

  constructor(private router: Router) {}

  onLoginClick() {
    // Simula la verificación del correo y contraseña (reemplaza con tu lógica real)
    if (this.email === 'beatriz@monitor.pe') {
      // Autenticación exitosa para el administrador, redirigir a home-admin
      this.router.navigate(['home-admin']);
    } else {
      // Autenticación fallida, muestra un mensaje de error
      this.emailError = 'Por favor, ingrese un correo válido';
    }
  }
}
