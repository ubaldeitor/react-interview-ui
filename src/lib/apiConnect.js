import axios from 'axios'

const BASE_URL = 'http://localhost:9000'

export const fetchAllWidgets = () => axios.get(`${BASE_URL}/v1/widgets`).then((response) => response.data)

export const getWidgetById = (id) => axios.get(`${BASE_URL}/v1/widgets/${id}`).then((response) => response.data)

export const addWidget = (widget) => axios.post(`${BASE_URL}/v1/widgets`, widget).then((response) => response.data)

export const deleteWidget = (id) => axios.delete(`${BASE_URL}/v1/widgets/${id}`).then((response) => response.data)

export const updateWidget = (id, widget) => axios.put(`${BASE_URL}/v1/widgets/${id}`, widget).then((response) => response.data)
