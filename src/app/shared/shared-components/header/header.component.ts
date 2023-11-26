import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<header>
  <div id="logo">
      <img src="/assets/img/logoCGR.png" alt="Logo" class='logo_header'> 
  </div>

  <div id="search">
      <input type="text" placeholder="Buscar...">
      <button><img  id="lupa" src="/assets/img/search.svg" alt="Lupa"></button>
  </div>

  <span class="material-symbols-outlined">
menu
</span>
  <nav class="offcanvas-body">
    <ul class="navbar_list navbar-nav justify-content-end flex-grow-1 pe-3">
      <li class="nav-item"><a href="#" class="nav-link">Prevención</a></li>
      <li class="nav-item"><a href="/geo-colaborador" class="nav-link">Geo-Colaborador</a></li>
      <li class="nav-item"><a href="/home-admin" class="nav-link" onclick="onLoginClick()">Sesión Monitor</a></li>
    </ul>
  </nav>
</header>`,
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderComponent { }
