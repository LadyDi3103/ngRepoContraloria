import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,

  ],
  template: `<footer>
  <div class="mayor">
      <div class="reserved">
          ©Derechos Reservados 2023
      </div>
  </div>
</footer>`,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FooterComponent { }
