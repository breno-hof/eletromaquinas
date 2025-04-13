import { Hero } from './hero/Hero'
import './LandingPage.css'
import { Products } from './products/Products'
import { Product } from '../types'

const products: Product[] = [
    {
        id: 1,
        name: 'Produto 1',
        description: 'Descrição do produto 1',
        image: '1.png',
    },
    {
        id: 2,
        name: 'Produto 2',
        description: 'Descrição do produto 2',
        image: '2.png',
    },
    {
        id: 3,
        name: 'Produto 3',
        description: 'Descrição do produto 3',
        image: '3.png',
    },
]

export const LandingPage = () => {
    return (
        <div className="landing-page">
            <Hero />
            <Products products={products}/>
        </div>
    )
}