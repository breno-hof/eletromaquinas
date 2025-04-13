import './Header.css'
import { Search, ShoppingCart, Zap } from "lucide-react"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export const Header = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        navigate(`/search?q=${search}`)
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
                <div className="search-input">
                    <Search />
                    <input value={search} type="text" onChange={onSearch} />
                </div>
                <button onClick={toShoppingCart}>
                    <ShoppingCart />
                </button>
            </div>
        </header>
    )
}