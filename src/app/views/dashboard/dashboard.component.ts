/// <reference types="@types/googlemaps" />
import { Renderer2,Component,ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../shared/shared-components/sidebar/sidebar.component';
import HeaderComponent from '../../shared/shared-components/header/header.component';
import { Lugar } from '../../interfaces/interfaces';
import { LugarInfo } from '../../interfaces/interfaces';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    HeaderComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
// se exportó por default el dashboard
export default class DashboardComponent implements OnInit{
  @ViewChild('map', { static: true }) mapElement!: ElementRef;

  lugaresInfo: LugarInfo[] = [];
  constructor(private renderer: Renderer2) {}

 ngOnInit(): void {
  this.cargarGoogleMapsScript(()=>{
  this.conseguirLugares();
  });
 }
conseguirLugares(): void {
    fetch('https://www.datos.gov.co/resource/g373-n3yy.json')
      .then((response) => response.json())
      .then((lugares: Lugar[]) => {
        this.lugaresInfo= lugares.map((lugar)=>({
          posicion: { lat: lugar.punto.coordinates[1], lng: lugar.punto.coordinates[0] },
          nombre: lugar.nombre_sede,
        }));
        console.log(lugares);
  
  
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((usuarioUbicacion) => {
            const ubicacion = {
              lat: usuarioUbicacion.coords.latitude,
              lng: usuarioUbicacion.coords.longitude,
            };
            this.dibujarMapa(ubicacion);
            console.log(ubicacion, "UBICACIÓN");
            
          });
        }
      });
  };
  
 dibujarMapa (obj: { lat: number; lng: number }): void {
  if (this.mapElement && google && google.maps) {
    const mapa = new google.maps.Map(this.mapElement.nativeElement, {
      center: obj,
      zoom: 4,
    });
      console.log("mapa");

      const marcadorUsuario = new google.maps.Marker({
        position: obj,
        title: 'Tu ubicacion',
      });
      marcadorUsuario.setMap(mapa);

  
      const marcadores = this.lugaresInfo.map((lugar) => {
        return new google.maps.Marker({
          position: lugar.posicion,
          title: lugar.nombre,
          map: mapa,
        });
      });
    } else {
      console.error('Elemento con ID "map" no encontrado o la api de google Maps no está cargada');
    }
  }
    private cargarGoogleMapsScript(callback: () => void): void {
      if (window.google && window.google.maps) {
        // Si la API de Google Maps ya está cargada, ejecutar el callback directamente
        callback();
      } else {
        const script = this.renderer.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAlvfefKeN9mncSrbhl0iO_shw0miCeF_8`;
        this.renderer.appendChild(document.head, script);
        script.onload = callback;
      }

}
}