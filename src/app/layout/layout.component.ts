import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  year: number;

  constructor() { }

  ngOnInit() {
    this.year = new Date().getFullYear();
  }

}
