import api from './apiConfig.js'

export async function getItems() {
  const res = await api.get('/product/')
  return res.data;
}

export async function getItem(_id) {
  const res = await api.get(`/product/${_id}`)
  return res.data
}

export async function createProduct(product) {
  const res = await api.post(`/product/`, product) 
  return res.data   
}