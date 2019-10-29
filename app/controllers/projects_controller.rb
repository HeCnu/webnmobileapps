class ProjectsController < ApplicationController
	
	# GET /projects
	# GEt /projects.json
	def index
		@projects = Project.all
	end

	def create
		
	end

	def show
	end
end
