import React,{createContext, useContext, useState} from 'react';

const LoginContext = createContext({
    logged : false,
    setLogged : ()=>{}
})
export const LoginProvider = ({ children }) => {
    const [logged,setLogged] = useState(false);

    return(
        <LoginContext.Provider value={{
            logged,
            setLogged
        }}>
            {children}
        </LoginContext.Provider>

    )
}

export const useUsuario = () => {
    const context = useContext(LoginContext);
    if(!context)
        throw new Error(
            'Contexto Login não disponível'
        );
    return context;
}
