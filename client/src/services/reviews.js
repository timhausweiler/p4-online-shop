import { api } from "./api-helper";

export const getProductReviews = async (product_id) => {
  const resp = await api.get(`/products/${product_id}/reviews`)
  return resp.data
}

export const createReview = async (product_id, reviewData) => {
  const resp = await api.post(`/products/${product_id}/reviews`, {review:reviewData})
  return resp.data
}

export const updateReview = async (product_id, review_id, reviewData) => {
  const resp = await api.put(`/products/${product_id}/reviews/${review_id}`, { review: reviewData })
  return resp.data
}

export const deleteReview = async (product_id, review_id) => {
  const resp = await api.delete(`/products/${product_id}/reviews/${review_id}`)
  return resp.data
}