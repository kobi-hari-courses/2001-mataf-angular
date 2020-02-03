import { RandomizerService } from './services/randomizer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private randomizer: RandomizerService){}


  createDelay(): Promise<number> {
    return new Promise<number>((resolve) => {
      console.log('Promise created');
      setTimeout(() => resolve(42), 3000);
    });
  }

  async go() {
    console.log('A');

    await this.start2();

    console.log('B');
  }

  async start2() {
    let r = await this.randomizer.nextMany(1, 100, 20);
    console.log(r);
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
