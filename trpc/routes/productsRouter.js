import axios from "axios";
import { publicProcedure, router } from "../trpc";

export const productsRouter = router({
    getProducts: publicProcedure
        .query(async () => {

            const { data } = await axios.get('https://dummyjson.com/products')

            return data
        })
})