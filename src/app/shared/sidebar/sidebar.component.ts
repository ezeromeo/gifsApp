import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { Gif } from '../../gifs/interface/gifs.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  get history(): string[] {
    return this.gifsService.history;
  }

  constructor(private gifsService: GifsService) {}

  search(term: string) {
    this.gifsService.searchGifs(term);
  }
}
