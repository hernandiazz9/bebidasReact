import React,{createContext, useEffect, useState} from 'react';
import Axios from 'axios';

//crear el context

export const ModalContext = createContext();

/// provider

const ModalProvider = (props) => {

    //state
    const [idreceta, guardarIdReceta] = useState(null);
    const [informacion, guardarReceta] = useState({});

    useEffect(() => {
        const obtenerReceta = async () =>{
            if (!idreceta) return;
            const url = ` https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta} `
            const resultado = await Axios.get(url);
            guardarReceta(resultado.data.drinks[0]);
            
        };
        obtenerReceta();
    }, [idreceta])

    return ( 
        <ModalContext.Provider
            value={{
                guardarIdReceta,
                informacion,
                guardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;