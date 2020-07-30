import { shuffleArray } from './utils';

export type Question = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    correct: boolean
};

export type AnswerObject = {
    question: string,
    answer: string,
    correct: boolean,
    correctAnswer: string;
  };

export type QuestionState = Question & { answers: string[] }

export const url = "https://opentdb.com/api.php?amount=10&type=multiple";

export const fetchQuizQuestions = async (amount: number = 10, difficulty: string) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&type=multiple&difficulty=${difficulty}`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    ));
}