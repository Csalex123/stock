import React from 'react';
import Form from '../../shared/Form';
import Input from '../../shared/Input';

export interface User {
    name: string,
    email: string
}

export interface Product {
    name: string,
    price: number,
    stock: number,
}

declare interface ProfileCardProps {
    user: User
}

const ProfileCard: React.FC<ProfileCardProps> = (props) => {

    return (
        <>
            <Form title='Profile'>
                <Input
                    label='Name'
                    value={props.user.name}
                    disabled
                />
                <Input
                    label='Email'
                    value={props.user.email}
                    disabled
                />
    
            </Form>
        </>
    );
}

export default ProfileCard;
