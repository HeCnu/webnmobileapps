class TodosController < ApplicationController
	def index
		@projects = Project.all
	end

	def update
		#render plain: params[:todo].inspect
		@todo = Todo.find(params[:id])

		@todo.update(todo_params_for_update)
		redirect_to "/"
	end

	def new
	end

	def show
		@todo = Todo.find(params[:id])
		@project_to_todo = Project.find(@todo.project_id)
	end

	def create
		#render plain: params[:todo].inspect
		@todo = Todo.new(todo_params_for_create)

		@todo.save
		redirect_to "/"
	end

	private def todo_params_for_update
		params.require(:todo).permit(:isCompleted)
	end

	private def todo_params_for_create
		params.require(:todo).permit(:text, :project_id, :isCompleted)
	end
end
