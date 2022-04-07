import '@testing-library/jest-dom';
import {formatNumberToPrice} from '../utility/methods';

describe('Prueba en el archivo methods.js', () => { 

    test('La conversion de caracteres debe ser un String', () => { 
        const valorReal =  "$ 70.000"; 
        const valorConvertido = formatNumberToPrice(70000); 
        //expect(typeof valorConvertido).toBe('string');
        expect(typeof valorConvertido).toEqual(typeof valorReal); 
    }) 

});
