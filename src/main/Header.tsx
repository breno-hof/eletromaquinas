import { Search, ShoppingCart, Zap } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const Header = () => {
    const navigate = useNavigate()

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        navigate(`/search?q=${value}`)
    }

    const toShoppingCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate('/shopping-cart')
    }

    return (
        <header>
            <div>
                <Zap className="header-icon" />
                <h1>Eletromáquinas</h1>
            </div>
            <div>
                <div>
                    <Search />
                    <input type="text" placeholder="Buscar" onChange={onSearch} />
                </div>
                <button onClick={toShoppingCart}>
                    <ShoppingCart />
                </button>
            </div>
        </header>
    )
}