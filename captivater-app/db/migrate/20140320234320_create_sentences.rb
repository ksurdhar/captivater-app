class CreateSentences < ActiveRecord::Migration
  def change
    create_table :sentences do |t|
      t.string :body
      t.references :textblock, index: true

      t.timestamps
    end
  end
end
