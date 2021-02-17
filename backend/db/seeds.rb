# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Quiz.destroy_all
Question.destroy_all
Answer.destroy_all

const questions = [
  {
    question: 'You should begin eating your meal...',
    answers: [
      { text: 'As soon as you are seated', correct: false },
      { text: 'When everyone has been served', correct: true },
      { text: 'When you are served', correct: false },
      { text: 'After everyone else has eaten first', correct: false }
    ]
  },
  {
    question: 'A correct thank-you note should have...',
    answers: [
      { text: 'At least two sentences', correct: true },
      { text: 'Just the words thank you', correct: false },
      { text: 'A minimum of two pages', correct: false },
      { text: 'Just buy a card with thank-you on it', correct: false }
    ]
  },
  {
    question: 'After the knife and fork has been used, keep them...',
    answers: [
      { text: 'On the table', correct: false },
      { text: 'Either on the plate or table', correct: false },
      { text: 'On the plate', correct: true },
      { text: 'Hand them to waitress', correct: false }
    ]
  },
  {
    question: 'When bread is served at the meal...',
    answers: [
      { text: 'Break off a small piece and butter it', correct: true },
      { text: 'Butter a whole piece at a time', correct: false },
      { text: 'Cut it in half and butter it', correct: false },
      { text: 'Make a butter sandwich', correct: false }
    ]
  },
  {
    question: 'Impressions are made within the first ______ upon meeting someone',
    answers: [
      { text: '7 seconds', correct: true },
      { text: '60 minutes', correct: false },
      { text: '30 seconds', correct: false },
      { text: '2 hours', correct: false }
    ]
  }
]
