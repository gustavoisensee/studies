module Api
  module V1
    class UsersController < ApplicationController
      def index
        users = User.all;
        render json: users, status: :ok
      end

      def create
        user = User.create(
          first_name: params[:first_name],
          last_name: params[:last_name]
        )
        render json: user, status: :ok
      end

      def update
        user = User.find(params[:id])
        user.update(
          first_name: params[:first_name],
          last_name: params[:last_name]
        )
        render json: user, status: :ok
      end

      def show
        user = User.find(params[:id])
        render json: user, status: :ok
      end

      def destroy
        User.destroy(params[:id])
        render json: { message: 'User has been deleted!' }, status: :ok
      end
    end
  end
end
