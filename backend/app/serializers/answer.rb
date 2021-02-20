class QuizSerializer < ActiveModel::Serializer
    attributes :text, :correct, :list_id
     belongs_to :question
  end