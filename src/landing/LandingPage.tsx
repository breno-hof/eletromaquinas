import { Hero } from './hero/Hero'
import './LandingPage.css'
import { Products } from './products/Products'
import { Product } from '../types'

const products: Product[] = [
    {
        id: 1,
        name: 'Receptor digital de TV',
        description: 'Aparelho digital para recepção de sinais de televisão',
        image: '1.png',
    },
    {
        id: 2,
        name: 'Motor de Portão',
        description: 'Motor eletrico para portão',
        image: '2.png',
    },
    {
        id: 3,
        name: 'Camera de Segurança',
        description: 'Camera de segurança para monitoramento de áreas',
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