import React from 'react';
import {useUser} from "./context/UserContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfilePage from "./views/ProfilePage";

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'))
const UnauthenticatedApp = React.lazy(() => import('./views/UnauthenticatedPage'))
function App() {
    const user = useUser()

    return(
        <React.Suspense fallback={<h1>Loading...</h1>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={user ? <AuthenticatedApp /> : <UnauthenticatedApp />}/>
                    <Route path="user/:userId" element={<ProfilePage />} />
                </Routes>
            </BrowserRouter>,

        </React.Suspense>
    )
}

export default App;
