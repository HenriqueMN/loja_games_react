// import {Link, useNavigate} from "react-router-dom"
import {ShoppingCart, User} from "@phosphor-icons/react"
import videogame from "../../assets/videogame.png"

function NavBar() {

    // let navigate = useNavigate()

    //let navbarComponent

    return (
        <>
        <div className="w-full bg-slate-800 text-white flex justify-center py-4">
            <div className="container flex justify-between text-lg items-center">
                <div className="flex gap-4 items-center">
                <img src={videogame} alt="Desenho de um controle de videogame com uma TV atrás e alguns jogos do lado" className="size-10"/>
                <div className="uppercase text-xl font-semibold">Loja Games</div>
                </div>
                 <input type="text" placeholder="Pesquisar" className="rounded w-2/5 h-fit"/>
                <div className="flex gap-4">
                    <div className="hover:underline">Produtos</div>
                    <div className="hover:underline">Categorias</div>
                    <div className="hover:underline">Cadastrar Categoria</div>
                    <div className="flex gap-2">
                        <User size={32} weight="bold" />
                        <ShoppingCart size={32} weight="bold" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar