class ProductsController < ApplicationController
  before_action :set_product, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy, :get_user_products]

  # GET /products
  def index
    @products = Product.all

    render json: @products
  end

  def get_user_products
    @user = User.find(params[:user_id])
    render json: @user.products
  end
  
  # GET /products/1
  def show
    render json: @product
  end


  # POST /products
  def create
    @product = Product.new(product_params)
    @product.user = @current_user

    if @product.save
      render json: @product, status: :created, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.destroy
    render json: @product
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_params
      params.require(:product).permit(:title, :description, :price, :user_id, :image_url)
    end
end