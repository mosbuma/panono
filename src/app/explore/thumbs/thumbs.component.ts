import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-thumbs',
  templateUrl: './thumbs.component.html',
  styleUrls: ['./thumbs.component.scss']
})
export class ThumbsComponent implements OnInit {

  @Input() items: ExploreItem[];

  constructor() { }

  ngOnInit() {
  }

}
