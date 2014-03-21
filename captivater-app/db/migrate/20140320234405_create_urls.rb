class CreateUrls < ActiveRecord::Migration
  def change
    create_table :urls do |t|
      t.text :url
      t.string :word
      t.references :sentence, index: true

      t.timestamps
    end
  end
end
