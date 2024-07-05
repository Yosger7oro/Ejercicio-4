export default class CL_Salon{
    constructor(){
        this.acumedad=0;
        this.contestudiantes=0;
        this.mayoredad=0;
        this.nombremayoredad="";
        this.contchicas=0;
        this.contchicasmayoredad=0;
    }

    procesarestudiante(es){
        this.acumedad+=es.edad;
        this.contestudiantes++;

        if(es.edad>this.mayoredad){
            this.mayoredad=es.edad;
            this.nombremayoredad=es.nombre;
        }

        if(es.sexo==='F'){
            this.contchicas++;
            
            if(es.edad>=18){
                this.contchicasmayoredad++;
            }
        }
    }

    promedioedad(){
        return this.acumedad/this.contestudiantes;
    }

    porchicasmayoredad(){
        return (this.contchicasmayoredad/this.contchicas)*100
    }
}
