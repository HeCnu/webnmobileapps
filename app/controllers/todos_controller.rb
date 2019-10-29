class TodosController < ApplicationController
	def index
		@projects = Project.all
	end

	def update
	end

	def new
	end

	def show
		@todo = Todo.find(params[:id])
		@project_to_todo = Project.find(@todo.project_id)
	end

	def create
		#render plain: params[:todo].inspect
		@todo = Todo.new(todo_params)

		@todo.save
		redirect_to "/"
	end

	private def todo_params
		params.require(:todo).permit(:text, :project_id)
	end
end
