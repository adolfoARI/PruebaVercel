const Operaciones = require('../controllers/Math');

test('Suma 1 + 2 debe ser 3', ()=>{
    expect(Operaciones.Sumar(1,2)).toBe(3);
})

test('Suma de -1 y -4 debe ser -5', ()=>{
    expect(Operaciones.Sumar(-1,-4)).toBe(-5)
})

test('Suma de -1 y -4 debe ser -5', ()=>{
    expect(Operaciones.Sumar(-1,3)).toBe(2)
})

test('Resta de 6 y 1 debe ser 5', ()=>{
    expect(Operaciones.Restar(6,1)).toBe(5)
})