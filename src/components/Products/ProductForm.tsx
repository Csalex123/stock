import React, { useState } from 'react';
import Form from '../../shared/Form';
import Input from '../../shared/Input';
import Button from '../../shared/Button';

const initialFormState = {
    name: '',
    price: '',
    stock: '',
}

export interface ProductCreator {
    name: string
    price: number
    stock: number
}

declare interface ProductFormProps {
    onSubmit: (product: ProductCreator) => void
}

const ProductForm: React.FC <ProductFormProps> = (props) => {
    const [form, setForm] = useState(initialFormState);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    const handleFormSubmit = () => {

        const productDto = { 
            name: String(form.name),
            price: parseFloat(form.price),
            stock: Number()

        }

        props.onSubmit(productDto);
        setForm(initialFormState);

    }

    return (
        <Form title="Product Form" onSubmit={handleFormSubmit}>
            <Input
                onChange={handleInputChange}
                name="name"
                label="Name"
                placeholder="E.g: Cookie"
                required
                value={form.name}
            />
            <Input
                onChange={handleInputChange}
                name="price"
                label="Price"
                type="number"
                step="0.01"
                min="0"
                placeholder="E.g: 1.25"
                required
                value={form.price}
            />
            <Input
                onChange={handleInputChange}
                name="stock"
                label="Stock"
                type="number"
                min="0"
                placeholder="E.g: 15"
                required
                value={form.stock}
            />
            <Button>Submit</Button>
        </Form>
    );
};

export default ProductForm;