import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword: string = '';
  results: string[] = [];
  isBusy: boolean = false;

  setKeyword(value: string) {
    this.keyword = value;
  }

  search() {
    this.isBusy = true;
    setTimeout(() => {
      this.results = [
        this.keyword + '1', 
        this.keyword + '2', 
        this.keyword + '3'
      ];
      this.isBusy = false;
    }, 3000);
  }
}
