import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../service/query/useGetProduct'
import { ProductCard } from './productCard'

export const Allproducts = () => {
    const { data } = useQuery({
        queryKey: ['all'],
        queryFn: () => getProducts()
    })
    console.log(data);

    try {
        return (
            <div>
                <ProductCard />
            </div>
        )
    } catch (e) { console.log(e); }
}
