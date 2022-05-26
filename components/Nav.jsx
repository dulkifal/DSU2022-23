import { useState, useEffect } from 'react';
import Image from 'next/dist/client/image';
import { NavLink } from '.';
import { userService } from 'services';

export { Nav };

function Nav() {
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
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <Image src="/bg.png" className=''  width={80} height={80} />
                <NavLink href="/" exact className="m-auto  px-5 nav-item nav-link">Home</NavLink>
                <a onClick={logout} className="m-auto px-5 nav-item nav-link">Logout</a>
                <h4 className="px-5 card-header text-white m-auto">DSU 2022-23 Election You are logged in for vote </h4>
            </div>
        </nav>
    );
}