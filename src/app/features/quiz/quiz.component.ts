import { Component, OnInit, Input } from '@angular/core';
import { QuizInfo } from 'src/app/models/quiz-info';
import { QuizQuestion } from 'src/app/models/quiz-question';
import { State } from 'src/app/models/state';
import { CountryService } from 'src/app/country.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {


  private difficulty: number = 1;
  private quizInfo: QuizInfo;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data: any) => {
      this.generateQuiz(data);
    });
  }

  generateQuiz(countries: State[]) {
    const quizInfo = new QuizInfo();
    quizInfo.questions = this.generateQuestions(countries, 5, 5);
  }

  generateQuestions(countries: State[], questionNum: number, difficulty: number) {
    const questions: QuizQuestion[] = [];
    const randomCountries = [];

    for (let i = 0; i < questionNum; i++) {
      const currentQuestion = new QuizQuestion();
      currentQuestion.countries = [];
      const randomIndex = Math.random();
      const selectedCountry = countries[Math.trunc(randomIndex * 100)];
      const string = 'Qual è la bandiera di questo Stato: ' + selectedCountry.name + '?';
      currentQuestion.countries.push(countries[randomIndex * 100]);
      currentQuestion.rightAnswer = selectedCountry.alpha2Code;
      for (let j = 0; j < difficulty; j++) {
        const randomIndex = Math.random();
        currentQuestion.countries.push(countries[Math.trunc(randomIndex * 100)]);
      }

      currentQuestion.rightAnswer = selectedCountry.alpha2Code;
      currentQuestion.answer = '';
    }

    return questions;
  }

}
