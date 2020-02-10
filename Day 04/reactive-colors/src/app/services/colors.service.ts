import { ALLCOLORS } from './../models/all-colors';
import { Injectable } from '@angular/core';
import { ColorModel } from '../models/color.model';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  private delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => {
      setTimeout(resolve, millis);
    })
  }

  async search(keyword: string): Promise<ColorModel[]> {
    console.log('Starting search for ' + keyword);
    if (!keyword) return [];

    keyword = keyword.toLowerCase();
    const entries = Object.entries(ALLCOLORS);
    const res = entries
      .map(entry => {
        return <ColorModel> {displayName: entry[1], code: entry[0]};
      })
      .filter(cm => cm.displayName.toLowerCase().includes(keyword));

      await this.delay(4000);

    console.log('Finishing search for ' + keyword);
    return res;
  }


  constructor() { }
}
