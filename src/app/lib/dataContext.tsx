'use client'

import React, { createContext, useState, useContext } from "react";

// Definir el tipo para los valores del contexto
interface UserData {
  user: any; // Aquí deberías especificar el tipo de usuario adecuado
  setUser: React.Dispatch<React.SetStateAction<any>>; // Aquí deberías especificar el tipo de la función setUser adecuado
}

// Crear el contexto con el tipo que acabamos de definir
const DataContext = createContext<UserData | undefined>(undefined);

// Definir el proveedor de contexto
export function DataContextProvider ({children} :{children: React.ReactNode}) {
  const [user, setUser] = useState<any>(); // Deberías especificar el tipo de usuario adecuado

  return(
    <DataContext.Provider value={{user, setUser}}>
      {children}
    </DataContext.Provider>
  );
}

// Función de utilidad para usar el contexto en componentes
export function useDataContext() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useDataContext debe ser utilizado dentro de un DataContextProvider');
  }
  return context;
}

export default DataContext;
