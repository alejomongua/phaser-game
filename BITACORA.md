2021-07-13

Se inicia el proyecto.

    mkdir myFirstGame
    cd myFirstGame
    npm init -y
    git init .

Se instalan las dependencias: Webpack, tailwind, typescript, eslint y sus dependencias

    npm i webpack typescript ts-loader webpack-cli html-webpack-plugin \
        css-loader postcss-loader autoprefixer tailwindcss \
        mini-css-extract-plugin
    npm i -D webpack-dev-server eslint eslint-config-airbnb-base \
        eslint-config-standard eslint-plugin-import eslint-plugin-node \
        eslint-plugin-promise eslint-plugin-standard source-map-loader \
        @typescript-eslint/eslint-plugin @typescript-eslint/parser

Hay tres vulnerabilidades moderadas con webpack-dev-server, no se encuentra ninguna alternativa viable, como es solo para desarrollo se asume el riesgo

Se crea el gitignore    

    echo node_modules/ > .gitignore

Se crean los archivos de configuración de webpack, babel, typescript, tailwind y eslint

    npx tsc --init
    npx tailwindcss init
    # Los archivos webpack.config.js, .babelrc y .eslintrc.js se copian de otros proyectos

Se crea la carpeta src y se empieza a trabajar en el entry point index.ts

    mkdir src
    touch src/index.ts

Al crear el archivo de html

    mkdir src/html
    touch src/html/index.html

Obtengo un error en VSCode, ya que eslint intenta hacer linting al archivo html obteniendo:

    Parsing error: Expression expected

en el primer < en la primera línea

Se busca en stackoverflow y se encuentra la siguiente solución: https://stackoverflow.com/a/65503966/1339231

    npm i -D eslint-plugin-html
    # Agregar el plugin html a .eslintrc.js

Funciona

Se agrega el comando devServer a package.json

Se prueba que todo funcione:

    npm run devServer

Ahora que funciona le pongo tailwindcss

Creo el archivo de webpack de producción y el comando build en el package.json

agrego dist al .gitignore