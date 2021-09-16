import React, {useContext, useState} from 'react'
import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext';


const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState ({
        nombre:'',
        categoria:''
    });
    const { categorias } = useContext(CategoriasContext);

    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);
    
    const obtenerDatosReceta = e =>{
        guardarBusqueda ({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    };

    return (
        <form
            className='col-md-12'
            onSubmit= {e => {
                e.preventDefault();
                guardarConsultar(true);
                buscarRecetas(busqueda);
            }}
        >
            <fieldset className='text-center'>
                <legend>Busca Bebidas por Categoria o Ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text"
                        name='nombre'
                        className='form-control'
                        placeholder='Busca por Ingrediente'
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className='form-control'
                        name='categoria'
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">-- selecciona -- </option>
                        {categorias.map(categoria =>(
                            <option 
                                value={categoria.strCategory}
                                key={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        className='btn btn-block btn-primary'
                        value='Buscar Bebidas'
                    />
                </div>
            </div>
        </form>
    )
}

export default Formulario
