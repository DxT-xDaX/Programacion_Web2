const os = require('node:os');
console.log('Informacion del sistema operativo:');
console.log('----------------------------------');
console.log(`Nombre del sistema operativo: ${os.platform()}`);
console.log('Arquitectura:', os.arch());  
console.log('Memoria total:', os.totalmem()/1024/1024);