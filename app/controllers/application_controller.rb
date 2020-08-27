class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  # Andrea - the Heroku config needs to be updated for this next method to execute correctly.
  # copy, paste and run these lines from your terminal:
  # heroku config:set DOMAIN=www.trackmycruise.com
  def default_url_options
    { host: ENV["DOMAIN"] || "localhost:3000" }
  end

protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name])
  end
end
