const path = require('path') //Path es una dependencia nativa de node la cual nos ayuda a tener dependencias absolutas
const HtmlWebpackPlugin = require('html-webpack-plugin') //Debemops generar nuestros plugins como constantes y llamarlas


const rulesCSS = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'] //Podemos encadenar cuantos loader queramos para el archivo que le indicamos en nuestro regex.
    //En este caso, el style loader sirve para que javascript pueda entender el import y el css loader para que pueda entender el css
}
const rulesJavaScript = {
    test: /\.js$/, //Le indicamos que todos los archivos con dicha extension necesitan pasar por el loader
    loader: 'babel-loader'
};

const rules = [ rulesJavaScript, rulesCSS ];

module.exports = (env, argv) => {
    const {mode} = argv;
    const isProduction = mode === 'production';
    return { //Para empezar nuestra configuracion debemos tener un module.exports
            entry: './src/index.js',
            output: { //Nuestro output será la carpeta que cree webpack para empaquetar sus archivos. Los saca desde el index y los deja en la carpeta seleccionada a través de "dirname"
                filename: isProduction ? '[name].[contenthash].js' : 'main.js',
                path: path.resolve(__dirname, 'build'), //Build será la carpeta creada para que webpack deje sus archivos
                clean: true,
            },
            plugins: [ //Agregamos los plugin con un array ya que siempre serán más de uno
                new HtmlWebpackPlugin( {template: 'src/index.html'}),
            ],
            module: { rules }, //Le asignamos las reglas al modulo para que trabaje con los loaders
            devServer: {
                open: true, //Nos abre el navegador
                port: 3000,
                client: {
                    overlay: true,
                }
            },
        }
}