import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';

const ProductsGrid = () => {
    const data = useLoaderData();
    console.log("Loader data:", data); // Log the whole loader data

    const products = data.data || []; // Extract products correctly
    console.log("Products:", products); // Log the products array

    return (
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {Array.isArray(products) && products.length > 0 ? (
                products.map((product) => {
                    console.log("Product:", product); // Log each product
                    const { attributes } = product;
                    if (!attributes) return null; // Skip if attributes are undefined
                    const { title, price, image } = attributes;
                    const dollarsAmount = formatPrice(price)
                    return (
                        <Link
                            key={product.id}
                            to={`/products/${product.id}`}
                            className='card w-full shadow-xl hover:shadow-2xl transition duration-300'
                        >
                            <figure className='px-4 pt-4'>
                                <img 
                                    src={image} 
                                    alt={title}
                                    className='round-xl h-64 md:h-48 w-full object-cover'
                                />
                            </figure>
                            <div className='card-body items-center text-center'>
                                <h2 className='card-title capitalize tracking-wider'>{title}</h2>
                                <span className='text-secondary'>{dollarsAmount}</span>
                            </div>
                        </Link>
                    );
                })
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
};

// const ProductsGrid = () => {
//     const { products } = useLoaderData();
//     console.log(products);
    

//     return (
//     <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
//         {products.map((product)=>{
//             console.log(product);
//             const {title,price,image} = product.attributes
//             return  (
//             <Link
//                 key={product.id}
//                 to={`/products/${product.id}`}
//                 className='card w-full shadow-xl hover:shadow-2xl transition duration-300'
//                 >
//                     <figure className='px-4 pt-4' >
//                         <img 
//                             src={image} 
//                             alt={title}
//                             className='round-xl h-64 md:h-48 w-full object-cover'
//                         />
//                     </figure>
//                     <div className='card-body items-center text-center'>
//                         <h2 className='card-title capitalize tracking-wider'>{title}</h2>
//                         <span className='text-secondary'>{price}</span>
//                     </div>
//             </Link> 
//             );
//         })}
      
//     </div>
//   );
// };

export default ProductsGrid
