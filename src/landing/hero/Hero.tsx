import './Hero.css'

export const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-image">
                <img src="hero.png" alt="hero-image" />
            </div>
            <div className="hero-container">
                <h1>Receptor digital de TV</h1>
                <p>Texto de exemplo de descrição breve</p>
                <button>Ver oferta</button>
            </div>
        </section>
    )
}