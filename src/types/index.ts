import { boolean, number, object, string, array } from "valibot"; 
import type {InferOutput} from "valibot"; 
/*
-----------------------IMPORTANTE------------------
POR LA VERSION USADA DE VALIBOT Output ya no se usa, ahora es inferoutput
*/

export const DraftProductSchema = object({
    name: string(),
    price: number()
})

export const ProductSchema = object({
    id: number(),
    name: string(),
    price: number(),
    availability: boolean()
})

export const ProductsSchema = array(ProductSchema)
export type Product = InferOutput<typeof ProductSchema>
