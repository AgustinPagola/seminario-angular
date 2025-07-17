import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="details" *ngIf="game">
      <h2>Detalle del juego</h2>
      <p><strong>Nombre:</strong> {{ game.name }}</p>
      <p><strong>Plataforma:</strong> {{ game.platform }}</p>
      <p><strong>Precio:</strong> {{ game.price | currency:'USD' }}</p>
      <button (click)="onClose()">Cerrar</button>
    </div>
  `,
  styles: [`
    .details {
      margin-top: 2rem;
      background: #eef;
      padding: 1rem;
      border-radius: 10px;
    }
    button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      border: none;
      background: #3498db;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background: #2980b9;
    }
  `]
})
export class GameDetailComponent {
  @Input() game: any;
  @Input() onClose: () => void = () => {};
}
