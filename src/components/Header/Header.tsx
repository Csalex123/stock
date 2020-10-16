import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { logout } from '../../redux/Authentication/Authentication.actions';
import { RootState } from '../../redux/store';
import { User } from '../../services/Authentication.service';

import './Header.css';

declare interface HeaderProps {
    title?: string
    profile?: User
}

const Header: React.FC<HeaderProps> = (props) => {
    const isLoggedIn = !!props.profile?._id;
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLoginLogout = () => {
        isLoggedIn
            ? (
                Swal.fire({
                    title: 'Are you sure?',
                    text: "Are you sure you want to leave?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#09f',
                    cancelButtonColor: '#d33',
                    confirmButtonText: `Yes!`
                }).then(({ value }) => {
                    return value && dispatch(logout());
                })
            )
            : history.push('/login')
    }

    return (
        <header className="AppHeader">
            <h1>{props.title || 'Teste'}</h1>
            <div>
                <span onClick={handleLoginLogout}>
                    {isLoggedIn ? 'Logout' : 'Login'}
                </span>
            </div>
        </header>
    )
}

const mapStateToProps = (state: RootState) => ({
    profile: state.authentication.profile
});

export default connect(mapStateToProps)(Header);