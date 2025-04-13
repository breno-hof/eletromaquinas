import { useNavigate } from "react-router-dom"

export const NotFound = () => {
    const navigate = useNavigate()

    const toHome = () => {
        navigate('/')
    }

    return (
        <div className="error-page">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <p>A página que você está procurando não existe.</p>
            <button onClick={toHome}>Voltar para a página inicial</button>
        </div>
    )
}