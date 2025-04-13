import { Home, ShoppingCart, User } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const Footer = () => {
    const navigate = useNavigate()

    const toHome = () => {
        navigate('/')
    }

    const toShoppingCart = () => {  
        navigate('/shopping-cart')
    }

    const toAccount = () => {
        navigate('/account')
    }
    
    return (
        <footer>
            <div>
                <button onClick={toHome}>
                    <Home />
                </button>
                <span>Inicio</span>
            </div>
            <div>
                <button onClick={toShoppingCart}>
                    <ShoppingCart />
                </button>
                <span>Carrinho</span>
            </div>
            <div>
                <button onClick={toAccount}>
                    <User />
                </button>
                <span>Conta</span>
            </div>
        </footer>
    )
}