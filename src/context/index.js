import * as React from 'react'
import {AuthProvider} from './AuthContext'
import {UserProvider} from './UserContext'
import {theme} from "../styles/theme";
import {ThemeProvider} from "styled-components";

function AppProviders({children}) {
    return (
        <AuthProvider>
            <UserProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </UserProvider>
        </AuthProvider>
    )
}
export default AppProviders