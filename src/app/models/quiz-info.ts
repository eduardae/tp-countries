import { QuizQuestion } from "./quiz-question";

export class QuizInfo {
  questions: QuizQuestion[];
  correctNum: number;
  difficulty: number;
  score: number;
}
