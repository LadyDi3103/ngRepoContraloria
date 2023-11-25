import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
  CommonModule,


  ],
  template: `
<!-- <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
  <div class="carousel-item active">
      <img src="hhttp://localhost:4200/assets/img/combate.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item active">
      <img src="http://localhost:4200/assets/img/informate.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="http://localhost:4200/assets/img/reporta.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="http://localhost:4200/assets/img/previene.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> -->





  <div id="carouselExample" class="container-md carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="http://localhost:4200/assets/img/reporta.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="http://localhost:4200/assets/img/previene.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="http://localhost:4200/assets/img/informate.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="http://localhost:4200/assets/img/combate.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <!--  <slide> 
    @for (image of images; track image) {
      <img [src]="image" alt="Slide Image">
    }
  </slide> -->
`,
  styleUrl: './carousel.component.css'
  
})

export default class CarouselComponent { 
  images: string[] = [
    'http://localhost:4200/assets/img/1.jpeg',
    'http://localhost:4200/assets/img/2.jpeg',
    'http://localhost:4200/assets/img/3.jpeg',
    'http://localhost:4200/assets/img/4.jpeg'
    
    // Agrega más rutas de imágenes según sea necesario
  ];

}
