# Master Front End IX - Laboratorio - Módulo 2 - Lenguajes

### Antes de empezar

El proyecto contiene dependencias de desarrollo para transpilar typescript y ejecutar los tests, así que debemos instalarlas con:

```sh
npm install
```

## Ejecución de los tests

En el `package.json` se encuentran los scripts que ejecutan los tests y comprobar que los ejercicios funcionan correctamente.

```json
{
  "scripts": {
    "prepare": "npm run build",
    "build": "tsc",
    "test": "jest",
    "test-verbose": "jest --verbose",
    "test-array-operations": "npm run test -- tests/operations/array_operations.spec.ts",
    "test-clone-merge": "npm run test -- tests/operations/clone_merge.spec.ts",
    "test-concat": "npm run test -- tests/operations/concat.spec.ts",
    "test-books": "npm run test -- tests/exercises/read_books.spec.ts",
    "test-slot-machine": "npm run test -- tests/exercises/slot_machine.spec.ts"
  }
}
```

Se puede ejecutar todas las suites de tests a través de:

```sh
 npm run test # Si solo queremos ver si pasan o no
 npm run test-verbose # Si queremos info en detalle de cada test suite
```

Si por ejemplo queremos ejecutar únicamente los tests para el ejercicio de la SlotMachine solo tenemos que ejecutar en la raíz del proyecto `npm run <test-name>`

```sh
npm run test-slot-machine
```
