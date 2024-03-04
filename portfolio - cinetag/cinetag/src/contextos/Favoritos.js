import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName =  "Favoritos";
export default function FavoritosProvider({children}){
    const[favorito, setFavorito] = useState([]);
    
    return(
        <FavoritosContext.Provider value={{favorito, setFavorito}}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function UseFavoritoContext(){
    const {favorito, setFavorito}  = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito){
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

        let novalista = [...favorito];      

        if(!favoritoRepetido){
            novalista.push(novoFavorito);
            return setFavorito(novalista)
        }

        novalista = favorito.filter((fav) => fav.id !== novoFavorito.id);
        // novalista.splice(novalista.indexOf(novFavorito), 1);
        return setFavorito(novalista)
    }

    return{
        favorito, adicionarFavorito
    }
}