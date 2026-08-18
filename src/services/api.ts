import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { PedidoPayload, PedidoResposta, Restaurante } from "../types"

const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api-ebac.vercel.app/api/efood",
	}),
	endpoints: (builder) => ({
		getRestaurantes: builder.query<Restaurante[], void>({
			query: () => "restaurantes",
		}),
		getRestaurante: builder.query<Restaurante, string>({
			query: (id) => `restaurantes/${id}`,
		}),
		purchase: builder.mutation<PedidoResposta, PedidoPayload>({
			query: (body) => ({
				url: "checkout",
				method: "POST",
				body,
			}),
		}),
	}),
})

export const {
	useGetRestaurantesQuery,
	useGetRestauranteQuery,
	usePurchaseMutation,
} = api

export default api
