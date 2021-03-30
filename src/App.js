import GlobalStyle from "./styles/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme";
import UnauthenticatedPage from "./views/UnauthenticatedPage";
function App() {
    return (
        <>
        <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <UnauthenticatedPage>

                </UnauthenticatedPage>
            </ThemeProvider>
            </>

)
    ;
}

export default App;
