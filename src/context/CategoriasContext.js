import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

// creamos el context
export const CategoriasContext = createContext();

//creamos el provider donde se encuentran las funciones y state

const CategoriasProvider = (props) =>{
    //creando el state del Context
   const [categorias,  guardarCategorias] = useState ([]);

   //llamada a la api
   useEffect(() => {
       const obtenerCategorias = async() =>{
           const url = ` https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list `
           const categorias = await axios.get(url);
           guardarCategorias(categorias.data.drinks);
           
       }
       obtenerCategorias();
   }, [])

    return(
            <CategoriasContext.Provider
                //todos los valores para hacerlos disponibles en el proyecto state etc
                    value={{ 
                        categorias
                        
                    }}
                >
                    {props.children}
            </CategoriasContext.Provider>
        )
}
export default CategoriasProvider;