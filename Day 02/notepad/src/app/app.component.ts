import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // data
  colors: string[] = ['red', 'green', 'blue', 'purple', 'cyan', 'black', 'brown'];
  sizes: string[] = ['12px', '18px', '27px', '36px', '72px', '100px'];
  fonts: string[] = ['David', 'Tahoma', 'Arial', 'Consolas', 'Times new Roman', 'Courier'];

  selectedColor: string = this.colors[0];
  selectedSize: string = this.sizes[0];
  selectedFont: string = this.fonts[0];

  setColor(value: string) {
    this.selectedColor = value;
  }

  setSize(value: string) {
    this.selectedSize = value;
  }

  setFont(value: string) {
    this.selectedFont = value;
  }
}
