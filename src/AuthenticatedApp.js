import React from 'react';
import {useUser} from "./context/UserContext";
import {useAuth} from "./context/AuthContext";
import Button from "./components/Button/Button";
function AuthenticatedApp() {
    const user=useUser();
    const auth=useAuth();
    return (
        <div>
            hello {user.username} {user.email}
            <Button onClick={auth.logout} color="secondary">Wyloguj</Button>
        </div>
    );
}

export default AuthenticatedApp;