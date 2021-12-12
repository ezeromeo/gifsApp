import { Component, ElementRef, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  search() {
    const value = this.txtSearch.nativeElement.value;

    if (value.trim().length != 0) {
      this.gifsService.searchGifs(value);

      this.txtSearch.nativeElement.value = '';
    }


  }
}
