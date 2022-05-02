import { logOut } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export default function UserLogOut({ user, setUser }) {
    function handleLogOut() {
        logOut();
        setUser(null);
        useNavigate("/");
    }

    return (
        <div className="user-logout">
            <div>{user.name}</div>
            <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
        </div>
    );
}