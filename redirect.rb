require 'rubygems'
require 'sinatra'

get %r{^/s3/(.*)$} do
  redirect "https://alindeman.s3.amazonaws.com/#{params[:captures].first}", 301 # moved permanently
end

get %r{^(.*)$} do
  redirect "http://alindeman.github.com#{params[:captures].first}", 301 # moved permanently
end
