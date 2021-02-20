class QuestionSerializer < ActiveModel::Serializer
    attributes :content, :quiz_id
    attribute :answers do |question|
      AnswerSerializer.new(question.answers).as_json["data"]
    has_many :answers
  end