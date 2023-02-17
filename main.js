const os=require('./Modulos/os');
const funciones=require('./Modulos/funciones');
console.table(os.frecuencia.slice(0,1).map((registro)=> registro.times));
console.log("sist Operativo: "+os.SO);
console.log("ram disponible",os.ramdisp,"Byte");
console.log("ram en GB",funciones.disporam(os.ramdisp),"GB");
console.log("ram total",os.ramtot,"Byte");
console.log("ram total en GB",funciones.totalram(os.ramtot),"GB");