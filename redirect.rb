require 'rubygems'
require 'sinatra'

get %r{(.*)} do
  redirect "http://alindeman.github.com#{params[:captures].first}"
end
