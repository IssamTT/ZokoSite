// src/NumberInput.tsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


interface NumberInputProps {
    onTextChange: (value: string) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ onTextChange }) => {
    const [text, setText] = useState<string>('');

    const location = useLocation(); // Obtenir les détails de la route actuelle

    useEffect(() => {
        // Réinitialisez le texte chaque fois que la route change
        setText('');
    }, [location.pathname]); // L'effet s'exécute à chaque changement de 'pathname'


    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.target.value;
        setText(newText);
        onTextChange(newText);  // Propagez la nouvelle valeur à l'extérieur
    };


    return (
        <div className="m-4">
            <textarea
                value={text}
                onChange={handleChange}
                rows={1}
                className="w-60 p-2 text-black border rounded-md shadow-sm transition duration-150 ease-in-out hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 active:border-blue-800"
            ></textarea>
        </div>

    );
}

export default NumberInput;
