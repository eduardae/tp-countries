import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { QuizInfo } from 'src/app/models/quiz-info';
import { QuizQuestion } from 'src/app/models/quiz-question';
import { State } from 'src/app/models/state';
import { CountryService } from 'src/app/country.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuizComponent implements OnInit {


  private difficulty: number = 1;
  quizInfo: QuizInfo;

  showResult = false;
  possibleQuestionTopics = ['area', 'population', 'capital', 'alpha2Code'];

  countriesData: any;

  activeQuestion: number = 0;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data: any) => {
      this.countriesData = data;
      this.generateQuiz(data);
    });
  }

  selectAnswer(question: QuizQuestion, selectedCountry: State) {
    question.answer = selectedCountry.alpha2Code;
    this.activeQuestion++;
  }

  generateQuiz(countries: State[]) {
    const quizInfo = new QuizInfo();
    quizInfo.questions = this.generateQuestions(countries, 5, 5);
    this.quizInfo = quizInfo;
  }

  generateQuestions(countries: State[], questionNum: number, difficulty: number) {
    const questions: QuizQuestion[] = [];
    const randomCountries = [];

    for (let i = 0; i < questionNum; i++) {
      const currentQuestion = new QuizQuestion();
      currentQuestion.countries = [];
      // per scegliere fra 0 e 255
      let randomIndex = Math.random() * 2.5 * 100;
      const selectedCountry = countries[Math.trunc(randomIndex)];
      const string = 'Qual è la bandiera di questo Stato: ' + selectedCountry.name + '?';
      currentQuestion.countries.push(selectedCountry);
      currentQuestion.rightAnswer = selectedCountry.alpha2Code;
      for (let j = 0; j < difficulty; j++) {
        randomIndex = Math.random() * 2.5;
        currentQuestion.countries.push(countries[Math.trunc(randomIndex * 100)]);
      }
      currentQuestion.question = this.selectQuestionTopic(selectedCountry);

      currentQuestion.answer = '';
      questions.push(currentQuestion);
    }

    return questions;
  }

  selectQuestionTopic(righCountry: State) {
    const randomIndex = Math.trunc(Math.random() * this.possibleQuestionTopics.length);
    const topic = this.possibleQuestionTopics[randomIndex];
    switch (topic) {
      case 'area':
        return 'Quale di questi stati ha un\'area di ' + righCountry.area + ' km quadrati?';
      case 'population':
        return 'Quale di questi stati ha una popolazione di ' + righCountry.population + ' abitanti?';
      case 'capital':
        return 'Quale stato ha per capitale questa citta? ' + righCountry.capital;
      case 'alpha2Code':
        return 'Quale di questi stati ha corrisponde a questo codice ' + righCountry.alpha2Code + ' ?';
      default:
        return 'Prova a indovinare il Paese scelto casualmente';
    }
  }

  showResults() {
    this.showResult = true;
  }

  reset() {
    this.generateQuiz(this.countriesData);
    this.showResult = false;
  }

  checkScore() {
    let score = 0;
    for (let question of this.quizInfo.questions) {
      if (question.answer === question.rightAnswer) {
        score++;
      }
    }
    return score;
  }

}
