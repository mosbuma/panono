import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-thumbs',
  templateUrl: './thumbs.component.html',
  styleUrls: ['./thumbs.component.scss']
})
export class ThumbsComponent implements OnInit {

  @Input() items: ExploreItem[];
  @Input() type: string;
  @Input() filter: string;

  constructor() { }

  ngOnInit() {
  }

  toggleFavourite(item: ExploreItem) {
    if (window.localStorage.getItem(item.id)) {
      window.localStorage.removeItem(item.id);
      item.favourite = false;
    } else {
      window.localStorage.setItem(item.id, '1');
      item.favourite = true;
    }
  }
}
