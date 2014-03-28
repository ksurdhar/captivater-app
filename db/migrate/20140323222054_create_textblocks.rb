class CreateTextblocks < ActiveRecord::Migration
  def change
    create_table :textblocks do |t|
      t.string :title
      t.text :body
      t.references :user, index: true

      t.timestamps
    end
  end
end
