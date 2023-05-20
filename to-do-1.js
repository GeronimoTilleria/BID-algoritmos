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
    // Comprobamos que el indice va en el rango de la longitud del arreglo
    if (indice <= (arr.length - 1) && indice >= 0) {
        // Añadir el valor al final de la matriz si el índice es igual a la longitud de la matriz
        if (indice === arr.length) {
            arr.push(valor);
        } else {
            // Desplazar los elementos de la matriz a la derecha para hacer espacio para el nuevo elemento
            for (let i = arr.length - 1; i >= indice; i--) {
                arr[i + 1] = arr[i];
            }

            // Insertar el nuevo elemento en el índice especificado
            arr[indice] = valor;
        }
    } else {
        console.log('El indice no es correcto...');
    }
}

// const miArreglo3 = [5, 6, 8, 9, 4];
// console.log(miArreglo3);
// insertAt(miArreglo3, 2, 15);
// console.log(miArreglo3);

// ELIMINA EN
const removeAt = (arr, indice) => {
    if(indice <= (arr.length - 1) && indice >= 0){

        // Si el indice es la posicion 0
        if(indice === 0){
            // Reutilizamos la funcion popAlFrente()
            return popAlFrente(arr);
        }
        // Si es al final utilizamos el pop()
        if(indice === arr.length - 1){
            let valor = arr[indice];
            arr.pop();
            return valor;
        }

        let eliminado = arr[indice];

        let aux = [];
        let j = 0;
        // Cargamos a un nuevo arreglo la matriz sin el elemento a eliminar
        for(let i = 0; i < arr.length; i++){
            if(i !== indice){
                aux[j] = arr[i];
                j++;
            }
        }

        arr.pop();

        // Lo reasignamos al arreglo original
        for(let i = 0; i < arr.length; i++){
            arr[i] = aux[i];
        }

        return eliminado;
    }
    
    console.log('El indice no es correcto...');
    return;
}

//removeAt(arr, 0)
// const miArreglo4 = [5, 6, 8, 9, 4];
// console.log(miArreglo4);
// const eliminado = removeAt(miArreglo4, 4);
// console.log(miArreglo4);
// console.log(eliminado);

// Pares de intercambio
const tradingPairs = arr => {
    let aux;
    // PReguntamos si es par la longitud
    if(arr.length%2 === 0){
        // Iteramos cada dos posicion para el intercambio
        for(let i = 0; i <= (arr.length / 2); i+=2){
            aux = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = aux;
        }
        return;
    }
    // En caso de que sea impar
    for(let i = 0; i <= ((arr.length - 1) / 2); i+=2){
        aux = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = aux;
    }
    return;
};

// const miArreglo5 = [5, 6, 8, 9, 10];
// console.log(miArreglo5);
// tradingPairs(miArreglo5);
// console.log(miArreglo5);

const eliminarDuplicados = arr => {
    let duplicados = [];
    // Iteramos sobre la matriz
    for(let i = 0; i < arr.length; i++) {
        // Verificamos si el elemento actual es diferente al siguiente elemento
        if(arr[i] !== arr[i + 1]){
            // Si son diferentes, agregamos el elemento actual al arreglo sin duplicados
            duplicados.push(arr[i]);
        }
    }

    return duplicados;
}

const miArreglo6 = [5, 5, 8, 8, 10];
console.log(miArreglo6);
const nuevoArreglo = eliminarDuplicados(miArreglo6);
console.log(nuevoArreglo);
