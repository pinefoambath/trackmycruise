require 'csv'

class TripsController < ApplicationController

  def index
    @user = current_user
    @trips = Trip.all
  end

  def show
    @trip = Trip.find(params[:id])
  end

  def new
    @trip = Trip.new
  end

  def create
    @trip = Trip.new(strong_params)
    @trip.user = current_user
    if @trip.save
      redirect_to trips_path
    else
      render :new
    end
  end

  def destroy
    @trip = Trip.find(params[:id])
    @user = @trip.user
    @trip.destroy
     redirect_to trips_path
  end

  def edit
    @trip = Trip.find(params[:id])
  end

  def update
    @trip = Trip.find(params[:id])
    @trip.update(strong_params)
    redirect_to trips_path
  end

  def export
    @trips = current_user.trips
    csv_file = CSV.generate do |csv|
      csv << ["date", "logbook_entry", "wave_height", "wave_length", "wind_speed", "wind_gusts", "air_temperature", "water_temperature"]
      @trips.each do |trip|
        csv << [trip.date, trip.description, trip.wave_height, trip.wave_length, trip.wind_speed, trip.wind_gusts, trip.air_temperature, trip.sea_temperature]
      end

    end
    # send_data csv_file, :type => 'text/csv; charset=iso-8859-1; header=present', :disposition => "attachment; filename=mytrips.csv"
    send_data csv_file, filename: 'mytrips.csv'
  end



  private

    def strong_params

      params.require(:trip).permit(:date, :time, :longitude, :latitude, :wave_length, :wave_height, :air_temperature, :sea_temperature, :wind_speed, :wind_direction, :wind_gusts, :type, :description, :photo)
    end


end
