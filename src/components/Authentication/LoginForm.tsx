import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { login } from '../../redux/Authentication/Authentication.actions';

import Button from '../../shared/Button';
import Form from '../../shared/Form';
import Input from '../../shared/Input';

const LoginForm = () => {
    const dispatch = useDispatch();

    const initial_form = {
        user: '',
        password: '',
    }
    const [form, setForm] = useState(initial_form);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleLogin = async () => {
        try {
            await dispatch(login(form))
        } catch (error) {
            Swal.fire('Error', error.response?.data?.message || error.message, 'error');
        }
    }

    return (
        <Form title="Login - AlgaStock" onSubmit={handleLogin}>
            <Input
                label="User"
                name="user"
                placeholder="E.g: your_user_name32"
                value={form.user}
                onChange={handleInputChange}
                required
            />
            <Input
                label="PPassword"
                type="password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
                required
            />
            <Button>Login</Button>
        </Form>
    );
}

export default LoginForm;
