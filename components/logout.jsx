import { useState, useEffect } from 'react';
import Image from 'next/dist/client/image';
import { NavLink } from '.';
import { userService } from 'services';

export { Logout };

function Logout() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }

    // only show nav when logged in
    if (!user) return null;
    
    return (
        
            <div className="navbar-nav m-3 px-5">
                <button onClick={logout} className="m-auto px-5 card-header ">Logout</button>
            </div>
        
    );
}