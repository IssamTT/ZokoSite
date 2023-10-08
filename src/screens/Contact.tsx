// ContactPage.tsx

import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Traitement du formulaire (par exemple, envoi à une API ou affichage d'un message)
        console.log(formData);
    };

    return (
        <div className="container mx-auto mt-10 p-4">
            <h2 className="text-2xl font-bold mb-6">Contact</h2>

            <p>Pour des sites personnalisé à 100% </p>
            <p> issam.toure01@gmail.com </p>

        </div >
    );
};

export default Contact;
