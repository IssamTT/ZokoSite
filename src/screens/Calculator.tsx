import NumberInput from "./NumberInput";
import React, { useState, useEffect } from 'react';


interface CalculatorProps {
    caller: string;
}


const matrice = [
    [100, 97.8, 95.5, 93.9, 92.2, 90.7, 89.2, 87.8, 86.3],
    [95.5, 93.9, 92.2, 90.7, 89.2, 87.8, 86.3, 85, 83.7],
    [92.2, 90.7, 89.2, 87.8, 86.3, 85, 83.7, 82.4, 81.1],
    [89.2, 87.8, 86.3, 85, 83.7, 82.4, 81.1, 79.9, 78.6],
    [86.3, 85, 83.7, 82.4, 81.1, 79.9, 78.6, 77.4, 76.2],
    [83.7, 82.4, 81.1, 79.9, 78.6, 77.4, 76.2, 75.1, 73.9],
    [81.1, 79.9, 78.6, 77.4, 76.2, 75.1, 73.9, 72.3, 70.7],
    [78.6, 77.4, 76.2, 75.1, 73.9, 72.3, 70.7, 69.4, 68.3]
];

interface MyObject {
    [key: number]: number;

}

const tableau: MyObject = {
    10: 0,
    9.5: 1,
    9: 2,
    8.5: 3,
    8: 4,
    7.5: 5,
    7: 6,
    6.5: 7,
    6: 8
};


function getMatrixValue(rpe: number, rep: number, max: number) {
    if (!Number.isInteger(rpe) || !Number.isInteger(rep)) {
        return '';  // ou autre valeur par défaut si vous préférez
    }
    if (rpe < 6 || rpe > 10) {
        return "valeur de RPE :  6 à 10";
    }
    if (rep > 8 || rep < 0) {
        return "valeur de rep : 1 à 8"
    }
    var new_rpe = tableau[rpe]
    if (matrice[rep] && matrice[rep][new_rpe]) {
        return ((matrice[rep][new_rpe] / 100)) * max;
    }
    return '';  // ou autre valeur par défaut si vous préférez
}

function getMaxestimer(charge: number, rpe: number, rep: number) {
    if (charge < 0) {
        return "charge negative";
    }

    if (rpe < 6 || rpe > 10) {
        return "valeur de RPE :  6 à 10";
    }

    if (rep > 8 || rep < 0) {
        return "valeur de rep : 1 à 8"
    }

    var new_rpe = tableau[rpe]
    if (matrice[rep] && matrice[rep][new_rpe]) {
        return charge * ((1 - matrice[rep][new_rpe] / 100) + 1);
    }
    return <p className="text-xl font-semibold text-red-700 m-4 p-2 shadow-md"> </p>
}


const Calculator: React.FC<CalculatorProps> = ({ caller }) => {
    useEffect(() => {
        console.log(`Called by ${caller}`);

    }, [caller]);


    const [enteredText, setEnteredText] = useState<string>('');
    const [enteredText2, setEnteredText2] = useState<string>('');
    const [enteredText3, setEnteredText3] = useState<string>('');


    if (caller === 'Max') {

        return (
            <div className="App">
                <h2 className="text-xl font-semibold text-red-700 m-4 p-2 shadow-md">MAX estimer</h2>
                <NumberInput onTextChange={(text3) => setEnteredText3(text3)} />
                <h2 className="text-xl font-semibold text-red-700 m-4 p-2 shadow-md">RPE</h2>
                <NumberInput onTextChange={(text1) => setEnteredText(text1)} />
                <h2 className="text-xl font-semibold text-red-700 m-4 p-2 shadow-md">nombre de rep</h2>
                <NumberInput onTextChange={(text2) => setEnteredText2(text2)} />
                <h2 className="text-xl font-semibold text-red-700 m-4 p-2 shadow-md">MAX</h2>
                <p>{getMatrixValue(parseFloat(enteredText), parseInt(enteredText2, 10) - 1, parseInt(enteredText3, 10))}</p>
            </div>

        );
    } else {
        // Ce que vous voulez afficher si caller n'est pas 'MAX'
        return (
            <div className="App">
                <h2 className="text-xl font-semibold text-red-700 m-4 p-2 shadow-md">Charge</h2>
                <NumberInput onTextChange={(text3) => setEnteredText3(text3)} />
                <h2 className="text-xl font-semibold text-red-700 m-4 p-2 shadow-md">RPE</h2>
                <NumberInput onTextChange={(text1) => setEnteredText(text1)} />
                <h2 className="text-xl font-semibold text-red-700 m-4 p-2 shadow-md">nombre de rep</h2>
                <NumberInput onTextChange={(text2) => setEnteredText2(text2)} />
                <h2 className="text-xl font-semibold text-red-700 m-4 p-2 shadow-md" >MAX estimer</h2>
                <p>{getMaxestimer(parseFloat(enteredText3), parseFloat(enteredText), parseInt(enteredText2, 10) - 1)}</p>
            </div>
        );
    }



}

export default Calculator;
