import homeLogo from "../../assets/home.svg"

function Home() {
    return (
        <>
        <div className="bg-slate-800 flex justify-center">
            <div className="container grid grid-cols-2 text-white">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <h2 className="text-5xl font-bold">Seja Bem-Vinde!</h2>
                    <p className="text-xl">Aqui você encontra os melhores Games!</p>
                    <div className="flex justify-around gap-4">
                        <button className="rounded bg-slate-800 text-white  border-2 border-white py-2 px-4">Novo Produto</button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={homeLogo} alt="Pessoa selecionando um personagem para jogar" className="w-2/3" />
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Home;