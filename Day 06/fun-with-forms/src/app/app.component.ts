import { Address } from './models/address';
import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl, ValidationErrors, FormArray, FormBuilder } from '@angular/forms';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  aliases: FormArray;

  constructor(
    private data: DataService, 
    private fb: FormBuilder
  ){}

  async ngOnInit() {
    this.buildForm();

    let p = await this.data.getPerson();
    this.form.setValue(p);

  }

  buildForm() {
    // this.form = this.fb.group({
    //   username: ['', Validators.required], 
    //   fullName: [''], 
    //   email: [''],
    //   address: this.fb.group({
    //     city: [''], 
    //     country: ['']
    //   }), 
    //   aliases: this.fb.array([])
    // })

    this.form = new FormGroup({
      username: new FormControl('', Validators.required, ctrl => this.data.userFreeValidator(ctrl)),
      fullName: new FormControl('', 
        [Validators.minLength(8), Validators.required, this.hasSpaceValidator]), 
      email: new FormControl('', [Validators.email, Validators.required]), 
      address: new FormGroup({
        city: new FormControl('', Validators.required), 
        country: new FormControl('', Validators.required)
      }), 
      aliases: new FormArray([])
    });

    this.aliases = this.form.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(new FormControl('', Validators.required));
  }

  removeAlias(index: number) {
    this.aliases.removeAt(index);
  }

  hasSpaceValidator(control: AbstractControl): null | ValidationErrors {
    let val = <string>control.value;
    let index = val.indexOf(' ');

    if ((index >0) && (index < (val.length-1))) return null;

    return {'hasSpace': true};
  }

  save() {
    let person = <Person>this.form.value;
    this.data.save(person);
  }
}
