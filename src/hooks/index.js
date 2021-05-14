import React from 'react';
import { LoginProvider } from "./login";

const hooks = ({children}) => {
  return (
        <LoginProvider>
            {children}
        </LoginProvider>
  )
}

export default hooks;
