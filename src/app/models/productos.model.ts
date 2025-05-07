export class Productos {
  constructor(
    public id_producto: string,
    public nombre: string,
    public descripcion: string,
    public precio:  number,
    public stock: string,
    public categoria : string,
    public imagen :  string
  ){}
}
