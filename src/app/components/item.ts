export class Item{
    public contenido: string = ""
    public terminado: boolean = false

    constructor(contenido:string, terminado?:boolean){
        this.terminado = terminado ? terminado: false;
        this.contenido = contenido
    }
}