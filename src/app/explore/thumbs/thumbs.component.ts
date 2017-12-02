import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-thumbs',
  templateUrl: './thumbs.component.html',
  styleUrls: ['./thumbs.component.scss']
})
export class ThumbsComponent implements OnInit, OnChanges {

  @Input() items: ExploreItem[];
  @Input() type: string;
  @Input() filter: string;
  noFavourites: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      this.checkForNoFavourites();
    }
  }

  toggleFavourite(item: ExploreItem) {
    if (window.localStorage.getItem(item.id)) {
      window.localStorage.removeItem(item.id);
      item.favourite = false;
      this.checkForNoFavourites();
    } else {
      window.localStorage.setItem(item.id, '1');
      item.favourite = true;
      this.noFavourites = false;
    }
  }

  checkForNoFavourites() {
    this.noFavourites = true;
    this.items.forEach(f => {
      this.noFavourites = this.noFavourites && !f.favourite;
    });
  }
}
