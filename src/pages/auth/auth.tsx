

import '../../auth.css';
import io from 'socket.io-client';
import {Link} from "react-router-dom";
export function AuthPage() {
    return(
        <>
            <div>auth</div>
            <Link to={'/chat'}>chat</Link>
        </>
    )
}