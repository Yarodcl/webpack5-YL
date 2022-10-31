const path = require('path') //Path es una dependencia nativa de node la cual nos ayuda a tener dependencias absolutas

const rulesJavaScript = {
    test: /\.js$/, //Le indicamos que todos los archivos con dicha extension necesitan pasar por el loader
    loader: 'babel-loader',
    options: {
        presets: [
            [
            '@babel/preset-react', //Le damos una configuración a babel para que el mismo entienda react
            {
                runtime: 'automatic' //Clasic, con este no necesitamos importar react de react
            }
            ]
] 
    }
};

const rules = [ rulesJavaScript ];

module.exports = { //Para empezar nuestra configuracion debemos tener un module.exports
    entry: './src/index.js',
    output: { //Nuestro output será la carpeta que cree webpack para empaquetar sus archivos. Los saca desde el index y los deja en la carpeta seleccionada a través de "dirname"
        path: path.resolve(__dirname, 'build') //Build será la carpeta creada para que webpack deje sus archivos
    },
    module: { rules } //Le asignamos las reglas al modulo para que trabaje con los loaders
}