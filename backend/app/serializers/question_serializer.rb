class QuestionSerializer < ActiveModel::Serializer
    attributes :content, :quiz_id
  end