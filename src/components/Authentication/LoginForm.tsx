import React, { useState } from 'react';

import Button from '../../shared/Button';
import Form from '../../shared/Form';
import Input from '../../shared/Input';

const LoginForm = () => {
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

    const handleLogin = () => {
        console.log(form);
    }

    return (
        <Form title="Login - AlgaStock" onSubmit={handleLogin}>
            <Input
                label="User"
                name="user"
                placeholder="E.g: your_user_name32"
                value={form.user}
                onChange={handleInputChange}
            />
            <Input
                label="PPassword"
                type="password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
            />
            <Button>Login</Button>
        </Form>
    );
}

export default LoginForm;
