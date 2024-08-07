/*Cargar arreglos */
var arregloUtiles=['Lápiz','Tijera','Marcador','Regla']
document.write(arregloUtiles.join(' ')+'<br>')
/*Agregar un elemento en el primer indice:  */
arregloUtiles.unshift('Hojas A4')
document.write(arregloUtiles.join(' '))
/*Agregar un elemento en la última posición: */
arregloUtiles.push('Cartuchera')
document.write(arregloUtiles.join(' '))
/*Eliminar el último elemento: */
arregloUtiles.pop()
document.write(arregloUtiles.join(' '))
/*Eliminar el primer elemento del arreglo: */
arregloUtiles.shift()
document.write(arregloUtiles.join(' '))