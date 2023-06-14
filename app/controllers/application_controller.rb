class ApplicationController < ActionController::API

  include ActionController::RequestForgeryProtection
  
  protect_from_forgery with: :exception

    before_action :snake_case_params, :attach_authenticity_token

    def current_user
      @current_user ||= User.find_by(session_token: session[:session_token])
      # user whose `session_token` == token in `session` cookie
    end
    
    def login!(user)
      # debugger
      session[:session_token] = user.reset_session_token!
      @current_user = user
      # reset `user`'s `session_token` and store in `session` cookie
    end
    
    def logout!
      current_user.reset_session_token!      
      session[:session_token] = nil
      # reset the `current_user`'s session cookie, if one exists
      # clear out token from `session` cookie
      @current_user = nil 
      # so that subsequent calls to `current_user` return nil
    end
    
    def require_logged_in
      unless current_user
        render json: { message: 'Unauthorized' }, status: :unauthorized 
      end
    end

    def test
      if params.has_key?(:login)
        login!(User.first)
      elsif params.has_key?(:logout)
        logout!
      end
    
      if current_user
        render json: { user: current_user.slice('id', 'email', 'session_token') }
      else
        render json: ['No current user']
      end
    end

    private
    
    def snake_case_params
      params.deep_transform_keys!(&:underscore)
    end

    def attach_authenticity_token
      headers['X-CSRF-Token'] = masked_authenticity_token(session)
    end

end
