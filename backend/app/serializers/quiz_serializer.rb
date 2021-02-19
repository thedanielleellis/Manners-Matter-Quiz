class QuizSerializer < ActiveModel::Serializer
    attributes :name
    attribute :questions do |quiz|
      QuestionSerializer.new(quiz.questions).as_json["data"]
    end
  end