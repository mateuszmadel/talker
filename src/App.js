import React from 'react';
import {useUser} from "./context/UserContext";

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'))
const UnauthenticatedApp = React.lazy(() => import('./views/UnauthenticatedPage'))
function App() {
    const user = useUser()
    return(
        <React.Suspense fallback={<h1>Loading...</h1>}>
            {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </React.Suspense>
    )
}

export default App;
