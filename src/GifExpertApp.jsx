import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        // Lógica para no repetir categorias en el array, tanto masyúsculas y miníusculas.
        if (categories.map((category) => category.toLowerCase()).includes(newCategory.toLowerCase())) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={(event) => onAddCategory(event)} />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
