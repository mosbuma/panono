import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  res: ExploreResponse;
  wait: boolean;
  defaultUrl = '//api3-dev.panono.com/explore';
  loadFailed: boolean;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.explore(this.defaultUrl);
  }

  _getPromise(url): Promise<ExploreResponse> {
    return this.http.get<ExploreResponse>(url).toPromise<ExploreResponse>();
  }

  async explore(url) {
    this.wait = true;
    this.loadFailed = false;
    try {
      this.res = await this._getPromise(url);
    } catch (err) {
      this.loadFailed = true;
    }
    this.wait = false;
  }
}
