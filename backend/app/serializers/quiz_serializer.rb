class QuizSerializer < ActiveModel::Serializer
    attributes :name, :questions
  end