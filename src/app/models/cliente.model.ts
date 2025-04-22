export class Cliente {
  constructor(
    public id: string,
    public nombre: string,
    public apellido1: string,
    public apellido2: string,
    public email: string,
    public password: string,
    public telefono: string,
    public direccion: string
  ) {}
}
