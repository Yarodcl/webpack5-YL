const path = require('path') //Path es una dependencia nativa de node la cual nos ayuda a tener dependencias absolutas

module.exports = { //Para empezar nuestra configuracion debemos tener un module.exports
    entry: './src/index.js',
    output: { //Nuestro outpur será la carpeta que cree webpack para empaquetar sus archivos. Los saca desde el index y los deja en la carpeta seleccionada a través de "dirname"
        path: path.resolve(__dirname, 'build') //Build será la carpeta creada para que webpack deje sus archivos
    }
}