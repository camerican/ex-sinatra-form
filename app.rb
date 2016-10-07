require 'sinatra'


# http://localhost:4567/?day=friday&mood=excellent&group-projects=a-go

get '/' do
  puts "Params data below"
  puts params.inspect
  erb :home
end

post '/login' do
  login_data = {
    "cam" => "hawaii",
    "brian" => "alexis",
    "mike" => "something",
    "izza" => "watson"
  }
  # do our password checking here
  puts params[:username].downcase

  # to do: prevent against blank data entry
  if login_data[params[:username].downcase] == params[:password]
    # logged in successfully
    "You did it!  Welcome home #{params[:username]}"
  else
    "You are nefarious.  Please go away"
  end
end

get '/contact' do
  erb :contact
end

post '/contact' do
  # Write to database
  puts params.inspect
  @msg = "Thanks for your submission"
  erb :contact
end








