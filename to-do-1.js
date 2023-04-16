// PUSH AL FRENTE
const pushAlFrente = (arr, valor) => {
    // Desplazamos todos los valores una posicion hacia la derecha del arreglo
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }

    // Asignamos el nuevo valor al principio del arreglo
    arr[0] = valor;

    return arr;
};

// Ejemplo de uso
// const miArreglo1 = [5, 6, 8, 9, 4, 1, 2, 6, 15, 20];
// const insertado = pushAlFrente(miArreglo1, 0);
// console.log(insertado);

// **********************************************************************

// POP AL FRENTE
const popAlFrente = arr => {
    // Guardamos el primer valor del arreglo
    let primero = arr[0];

    const arrInvertido = [];
    let j = 0;
    // Guardamos nuestro arreglo de forma invertida
    for (let i = arr.length - 1; i >= 0; i--) {
        arrInvertido[j] = arr[i];
        j++;
    }

    // Hacemos un pop() al arreglo para que su longitud decremente
    arr.pop();
    // Elminamos el primer elemento
    arrInvertido.pop();

    j = 0;
    // Devolvemos al arreglo sin el primer elemento
    for (let i = arrInvertido.length - 1; i >= 0; i--) {
        arr[j] = arrInvertido[i];
        j++;
    }


    return primero;
}

// // Ejemplo de uso
// const miArreglo2 = [5, 6, 8, 9, 4, 1, 2, 6, 15, 20];
// console.log(miArreglo2);
// const eliminado = popAlFrente(miArreglo2);
// console.log(miArreglo2);
// console.log(eliminado);

// **********************************************************************

// INSERTAR EN
const insertAt = (arr, indice, valor) => {
    if(indice <= (arr.length - 1) && indice >= 0 ){
        // Codigo aqui
    } else {
        console.log('El indice no es correcto...');
    }
}