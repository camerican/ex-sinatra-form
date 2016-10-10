require 'sinatra'
require 'sendgrid-ruby'
# include SendGrid

# http://localhost:4567/?day=friday&mood=excellent&group-projects=a-go
$menu = [
  {
    href: '/',
    title: 'Home'
  },{
    href: '/contact',
    title: 'Contact'
  },{
    :href => '/about',
    :title => "About"
  }]


get '/' do
  @title = "XYZ Inc"
  @route_index = getRouteIndex '/'
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
  @route_index = getRouteIndex '/contact'
  @title = "Contact XYZ"
  erb :contact
end

post '/contact' do
  @route_index = getRouteIndex '/contact'
  @title = "Contact XYZ"
  # to do: check email address valilidity

  # From Address & To Address -> SendGrid::Email
  # Subject -> String
  # Content -> SendGrid::Content
  # Actual Email -> SendGrid::Mail
  #  Mail( from, subject, to, content )
  mail = SendGrid::Mail.new( 
    SendGrid::Email.new(email: "cam@nycda.com"),
    "Thanks for contacting XYZ Inc!",
    SendGrid::Email.new(email: params[:email] ),
    SendGrid::Content.new(type: 'text/plain', value: <<-EMAILCONTENTS
      Thanks for letting us know how you feel.

      Our team will be in contact with you shortly.  For your records here's a copy of the feedback we recieved:
---------------------------------
      #{params[:message]}
EMAILCONTENTS
      )
  )
  sg = SendGrid::API.new( api_key: ENV['SENDGRID_API_KEY'] )

  response = sg.client.mail._('send').post(request_body: mail.to_json)

  puts response.status_code
  puts response.body
  puts response.headers

  @msg = "Thanks for your submission"
  erb :contact
end

get '/about' do
  @title = "XYZ from AtoZ"
  @route_index = getRouteIndex '/about' 
  erb :about
end

def getRouteIndex route
  $menu.index{ |c| c[:href] == route }
end
