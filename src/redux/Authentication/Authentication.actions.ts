import { singInUser } from './../../services/Authentication.service';
import { Thunk } from './../store';

declare interface Credentials {
    user: string;
    password: string;
}

export const login = ({user, password}: Credentials): Thunk => async (dispatch) => {
    const loggedInUser = await singInUser(user, password);
    dispatch({
        type: 'AUTHENTICATION_LOGIN',
        payload: loggedInUser
    });
}