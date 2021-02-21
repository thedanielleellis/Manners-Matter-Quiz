class QuestionSerializer < ActiveModel::Serializer
    attributes :content, :quiz_id, :answers
    has_many :answers
end