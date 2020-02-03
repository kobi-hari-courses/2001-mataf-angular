import { Component } from '@angular/core';

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
    let p = this.createDelay();

    try {
      let res = await p;

      console.log('The result is ' + res);
      let p2 = this.createDelay();
  
      await p2;
      console.log('Yalla Bye');  
    }
    catch (err) {

    }
    finally {

    }


    return true;


    // let p2 = p.then(res => {
    //   console.log('Promise is completed, result is: ' + res);
    //   let p3 = this.createDelay();
    //   p3.then(r => {
    //     console.log('Completed second promise');
    //   });

    //   console.log('bla bla bla');
    //   return 'Hello';      
    // });
  }

}
