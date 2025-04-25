export class Empleado {
        constructor(
          public id_empleado: string,
          public dni: string,
          public nombre: string,
          public apellido1: string,
          public apellido2: string,
          public cargo : string,
          public email: string,
          public telefono: string,
          public salario: string,
          public password: string,
        ) {}  
}
