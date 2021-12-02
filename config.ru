require "roda"

class App < Roda
  plugin :render
  plugin :public

  route do |r|
    r.public

    r.root do
      render('index') # views/index.erb 
    end
  end
end

run App.freeze.app
