import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailComponent } from './game-detail.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, GameDetailComponent],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  title = 'Catálogo de Juegos';

  selectedGame: Game | null = null;

  games: Game[] = [
    { id: 1, name: 'Zelda: Breath of the Wild', platform: 'Nintendo Switch', price: 59.99 },
    { id: 2, name: 'God of War', platform: 'PS4', price: 49.99 },
    { id: 3, name: 'Halo Infinite', platform: 'Xbox Series X', price: 39.99 },
    { id: 4, name: 'Elden Ring', platform: 'PS5', price: 69.99 },
    { id: 5, name: 'Spider-Man: Miles Morales', platform: 'PS5', price: 49.99 },
    { id: 6, name: 'The Witcher 3', platform: 'PC', price: 29.99 },
    { id: 7, name: 'Forza Horizon 5', platform: 'Xbox Series X', price: 59.99 },
    { id: 8, name: 'Animal Crossing: New Horizons', platform: 'Switch', price: 54.99 },
    { id: 9, name: 'Cyberpunk 2077', platform: 'PC', price: 44.99 },
    { id: 10, name: 'FIFA 24', platform: 'PS5', price: 69.99 },
    { id: 11, name: 'Resident Evil Village', platform: 'PS4', price: 39.99 },
    { id: 12, name: 'Assassin’s Creed Valhalla', platform: 'Xbox One', price: 49.99 }
  ];

  selectGame(game: Game) {
    this.selectedGame = game;
  }

  clearSelection() {
    this.selectedGame = null;
  }
}

interface Game {
  id: number;
  name: string;
  platform: string;
  price: number;
}
