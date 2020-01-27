import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly question: string = 'How much is 6 * 7';
  readonly answers: string[] = [
    'Fifty Two', 
    'Fourty Three', 
    'Fourty Two', 
    'Fourty Nine'
  ];
  readonly correctAnswerIndex: number = 2;

  isAnswered: boolean = false;
  selectedAnswerIndex: number | null = null;
  isAnswerCorrect: boolean | null = null;

  selectAnswer(indexOfAnswer: number) {
    if (this.isAnswered) return;
    
    this.isAnswered = true;
    this.selectedAnswerIndex = indexOfAnswer;
    this.isAnswerCorrect = (this.selectedAnswerIndex === this.correctAnswerIndex);
  }
}
