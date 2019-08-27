import axios from 'axios'

export const GRAPHQL_CLIENT = axios.create({
  baseURL: 'https://react-prismic-boilerplate.prismic.io/graphql',
  headers: { 'Content-Type': 'application/json' }
})
