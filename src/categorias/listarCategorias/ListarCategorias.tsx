import { useEffect, useState } from "react";
import {Dna} from "react-loader-spinner";
import Categoria from "../../models/Categoria";
import {buscar} from "../../services/Service";
import CardCategorias from "../cardCategorias/CardCategorias";

function ListarCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias(){
        await buscar("/categorias", setCategorias, {})
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);
    return (
        <>
            {categorias.length === 0 && (
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div>
                    <div>
                        {categorias.map((categoria) => (
                            <>
                                <CardCategorias key={categoria.id} categoria={categoria} />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarCategorias