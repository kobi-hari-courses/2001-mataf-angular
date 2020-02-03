import { Component, wtfStartTimeRange } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createDelay(): Promise<number> {
    return new Promise<number>((resolve) => {
      console.log('Promise created');
      setTimeout(() => resolve(42), 3000);
    });
  }

  async go() {
    console.log('A');

    let res =await this.start();

    console.log('B');
  }

  async start() {
    console.log('1');
    let p = this.createDelay();
    console.log('2');
    let res = await p;
    console.log('3');

    return true;
  }

}
