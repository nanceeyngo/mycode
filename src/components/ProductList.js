import React from 'react';
import { Product } from './Product';
import { products } from '../data';

export const ProductList = () => {
    return (
        <>
        <nav>
            <a href='/'>Ngozi's Shop</a>
            <ul>
                <li><a href='/'>Cosmetics</a></li>
                <li><a href='/'>Pomade</a></li>
                <li><a href='/'>Beauty Bars</a></li>
                <li><a href='/'>Userpage</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Contact us</a></li>
            </ul>
        </nav>
        <div className='ProductList'>

            {products.map(item => ( <Product key={item.id} trial={item} />
        ))}
  
        </div>
        </>
    )
}

   