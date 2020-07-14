module Api
  module V1
    class UsersController < ApplicationController
      def index
        render json: { users: User.all }, status: :ok
      end

      def create
        user = User.create(
          first_name: params[:first_name],
          last_name: params[:last_name]
        )
        render json: { user: user }, status: :ok
      end

      def show
        user = User.find(params[:id])

        render json: { user: user }, status: :ok
      end

      def destroy
        user = User.destroy(params[:id])

        render json: { message: 'User has been deleted!' }, status: :ok
      end
    end
  end
end
