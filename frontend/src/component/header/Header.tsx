import './Header.css';
import {signOut} from 'firebase/auth'
import {auth} from "../../firebase.ts";

export function Header() {

    function handleSignOut() {
        signOut(auth);
    }

    return (
        <header className="d-flex justify-content-between align-items-center p-2 px-4 border-bottom">
            <h1 className="m-0"><i className="bi bi-check2-circle pe-2"></i>To-do App</h1>
            <div>
                <button onClick={handleSignOut} className="btn btn-outline-danger btn-sm">Sign Out</button>
            </div>
        </header>
    );
}