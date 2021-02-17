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

quiz1 = Quiz.create(name: "MannersMatterQuiz")
    question1 = Question.create(content: "You should begin eating your meal...", quiz_id: quiz1.id)
        answer1 = Answer.create(text: 'As soon as you are seated', correct: false, question_id: question1.id)
        answer2 = Answer.create(text: 'When everyone has been served', correct: true, question_id: question1.id)
        answer3 = Answer.create(text: 'When you are served', correct: false, question_id: question1.id)
        answer4 = Answer.create(text: 'After everyone else has eaten first', correct: false, question_id: question1.id)

    question2 = Question.create(content: "A correct thank-you note should have...", quiz_id: quiz1.id)
        answer5 = Answer.create(text: "At least two sentences", correct: true, question_id: question2.id)
        answer6 = Answer.create(text: "Just the words thank you", correct: false, question_id: question2.id)
        answer7 = Answer.create(text: "A minimum of two pages", correct: false, question_id: question2.id)
        answer8 = Answer.create(text: "Just buy a card with thank-you on it", correct: false, question_id: question2.id)

    question3 = Question.create(content: "After the knife and fork has been used, keep them...", quiz_id: quiz1.id)
        answer9 = Answer.create(text: "On the table", correct: false, question_id: question3.id)
        answer10 = Answer.create(text: "Either on the plate or table", correct: false, question_id: question3.id)
        answer11 = Answer.create(text: "On the plate", correct: true, question_id: question3.id)
        answer12 = Answer.create(text: "Hand them to waitress", correct: false, question_id: question3.id)

    question4 = Question.create(content: "When bread is served at the meal...", quiz_id: quiz1.id)
        answer13 = Answer.create(text: "Break off a small piece and butter it", correct: true, question_id: question4.id)
        answer14 = Answer.create(text: "Butter a whole piece at a time", correct: false, question_id: question4.id)
        answer15 = Answer.create(text: "Cut it in half and butter it", correct: false, question_id: question4.id)
        answer16 = Answer.create(text: "Make a butter sandwich", correct: false, question_id: question4.id)
    
    question5 = Question.create(content: "Impressions are made within the first ______ upon meeting someone", quiz_id: quiz1.id)
        answer17 = Answer.create(text: "7 seconds", correct: true, question_id: question5.id)
        answer18 = Answer.create(text: "60 minutes", correct: false, question_id: question5.id)
        answer19 = Answer.create(text: "30 seconds", correct: false, question_id: question5.id)
        answer20 = Answer.create(text: "2 hours", correct: false, question_id: question5.id)