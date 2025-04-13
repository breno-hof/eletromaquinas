import './LandingPage.css'

const products = [
    {
        id: 1,
        name: 'Produto 1',
        description: 'Descrição do produto 1',
        image: '/',
    },
    {
        id: 2,
        name: 'Produto 2',
        description: 'Descrição do produto 2',
        image: '/',
    },
    {
        id: 3,
        name: 'Produto 3',
        description: 'Descrição do produto 3',
        image: '/',
    },
]

export const LandingPage = () => {
    return (
        <div className="landing-page">
            <section className="hero-section">
                <img src="/" alt="" />
                <div className="hero-container">
                    <h1>Subheading</h1>
                    <p>Texto de exemplo de descrição breve</p>
                    <button>Ver oferta</button>
                </div>
            </section>
            <section className="products-section">
                <h1>Produtos em destaque</h1>
                <div className="products-container">
                    {products.map(product => {
                        return (
                            <div key={product.id}>
                                <img src={product.image} alt="" />
                                <h1>{product.name}</h1>
                                <p>{product.description}</p>
                                <button>Comprar</button>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}