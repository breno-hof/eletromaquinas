import './Products.css'
import { Product } from "@/types";

interface ProductsProps {
    products: Product[];
}

export const Products: React.FC<ProductsProps> = ({ products }) => {
    return (
        <section className="products-section">
            <h1>Produtos em destaque</h1>
            <div className="products-container">
                {products.map(product => {
                    return (
                        <div className="product-card" key={product.id}>
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <button>Comprar</button>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}