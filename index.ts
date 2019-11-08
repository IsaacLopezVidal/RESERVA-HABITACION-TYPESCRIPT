import { questionInt,question } from "readline-sync";
var cuad = new Array();
var Habitacion:number=5
var pisos:number=7
var Abecedario:string[]=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var Piso:number[]=new Array(pisos)
inicializa()
muestraHotel()
var habitacion:string
var opcion:string[]
habitacion=question("Favor de ingresar la habitacion que desea (1,A): ")
habitacion=habitacion.toUpperCase()
opcion= habitacion.split(",")
var nivel:number=parseInt(opcion[0])
var cuarto:string=opcion[1].toUpperCase()
nivel=Piso.indexOf(nivel)
cuarto=Abecedario.indexOf(cuarto).toString()
buscaDisponibilidad(nivel,cuarto)
function inicializa(){
    console.clear()

    for (var x=0; x<pisos; x++)
    {
    cuad[x] = new Array(Habitacion);
    }
    cuad = inicializaHotel(cuad,"_")
    llenaHotel()
}

function inicializaHotel(cuad,caracter:string)
{
    for(var x=0; x<pisos;x++)
    {
    for (var y=0; y<Habitacion; y++)
        {
        cuad[x][y] = caracter;
        }
    }
    return cuad;
}
function muestraHotel(){
    var lix:number
    var liy:number
    var pisoAux:number=pisos
    var lsCadena:string="       "+cabeceras()
    for(lix=0;lix<pisos;lix++){
        lsCadena+="\nPiso "+pisoAux+" "
        Piso[lix]=pisoAux
        pisoAux--
        for(liy=0;liy<Habitacion;liy++){
            lsCadena+="|"+cuad[lix][liy]+"|"
        }
    }
    console.log(lsCadena)
}
function llenaHotel(){
    var NumeroMaximoHabitaciones:number=Habitacion*pisos
    var OcuparHabitaciones:number=Math.floor(Math.random() * NumeroMaximoHabitaciones) +  1
    if (OcuparHabitaciones==NumeroMaximoHabitaciones){
        cuad = inicializaHotel(cuad,"X")
    }else{
        for(var x=1; x<OcuparHabitaciones;x++)
        {
            var ocuparPiso:number=Math.floor(Math.random() * 7) + 0  
            var ocuparHab:number=Math.floor(Math.random() * 6) +  0
            cuad[ocuparPiso][ocuparHab]="X" 
        }
    }

}//65-90
function cabeceras():string{
    var lsCadena:string=""
    for(var i:number=0;i<Habitacion;i++){
        lsCadena+="|"+Abecedario[i]+"|"
    }
    lsCadena+="\n       "
    for(var i:number=0;i<Habitacion;i++){
        lsCadena+="---"
    }
    return lsCadena
}
function buscaDisponibilidad(piso,cuarto):void{
    var bandera:boolean=false
    var j:number
    var y:number=cuarto
    var i:number

    for( i=piso;!bandera;i--){
        for( j=y;j<Habitacion&&!bandera;j++){
                if(cuad[i][j]=="_"){
                    console.clear()
                    cuad[i][j]="?"
                    muestraHotel()
                    var reserva=questionInt("Se encontro la habitacion "+Piso[i]+","+Abecedario[j]+" disponible, ¿Desea reservar? \n1.-Si\n2.-No\nOpcion:")
                    if(reserva==1){
                        bandera=true
                        console.clear()
                        console.log(reservado())
                    }else{
                        bandera=false
                        console.clear()
                        cuad[i][j]="_"
                    }
                } 
                if(y==cuarto){
                    y=0
                }
            }
            if(i==0&&!bandera){
                i=pisos
                var confirma=questionInt("Ha recorrido todo el hotel, quiere seguir buscando?\n1-Si\n2.-No\nOpcion:")
                if(confirma==2){
                    bandera=true
                }
            } 
        }

}
function reservado():string{
    var cadena:string=""
    cadena+="+-+-+-+-+-+-+-+-+-+-+\n"
    cadena+="|B|i|e|n|v|e|n|i|d|o|\n"
    cadena+="+-+-+-+-+-+-+-+-+-+-+\n"
    return cadena
}