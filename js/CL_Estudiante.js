export default class CL_Estudiante{
    constructor(no,ed,se){
        this.nombre=no;
        this.edad=ed;
        this.sexo=se;
    }

    set nombre(n){
        return this._nombre=n;
    }
    get nombre(){
        return this._nombre;
    }

    set edad(e){
        return this._edad=+e;
    }
    get edad(){
        return this._edad;
    }

    set sexo(s){
        return this._sexo=s;
    }
    get sexo(){
        return this._sexo;
    }

}