import { AuditService } from './services/audit.service';
import { AdditionWrongService } from './services/addition-wrong.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { GroupComponent } from './components/group/group.component';
import { AbstractAdditionService } from './services/abstract-addition-service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: AbstractAdditionService, 
      useClass: AdditionWrongService
    }, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
