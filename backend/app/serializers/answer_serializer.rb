class AnswerSerializer < ActiveModel::Serializer
    attributes :text, :correct, :question_id
     belongs_to :question
end 