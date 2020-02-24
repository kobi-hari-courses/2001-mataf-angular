import { Person } from './../models/person';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private person: Person = {
    username: 'johns', 
    fullName: 'John Smith', 
    email: 'johns@gmail.com', 
    address: {
      country: 'England', 
      city: 'London'
    }, 
    aliases: []
  }

  private usedNames: string[] = [
    'john', 
    'joe', 
    'johnsmith'
  ];

  constructor() { }

  delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  getPerson(): Promise<Person> {
    return Promise.resolve(this.person);
  }

  save(data: Person) {
    console.log('saved person');
    console.log(data);
    this.person = data;
  }

  async isUserFree(username: string): Promise<boolean> {
    await this.delay(2000);
    return !this.usedNames.includes(username);
  }

  async userFreeValidator(control: AbstractControl): Promise<null | ValidationErrors> {
    let username = <string>control.value;
    console.log('validating ' + username);
    let isFree = await this.isUserFree(username);

    console.log('isFree ' + isFree);

    if (isFree) return null;
    return {'userAvailability': true};
  }
}
