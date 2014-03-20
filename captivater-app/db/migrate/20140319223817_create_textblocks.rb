class CreateTextblocks < ActiveRecord::Migration
  def change
    create_table :textblocks do |t|
      t.string :title
      t.string :body

      t.timestamps
    end
  end
end
