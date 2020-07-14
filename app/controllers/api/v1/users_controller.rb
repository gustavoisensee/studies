module Api
  module V1
    class UsersController < ApplicationController
      def index
        render json: { users: User.all }, status: :ok
      end

      def create
        user = User.create(name: params[:name])
        render json: { user: user }, status: :ok
      end
    end
  end
end
