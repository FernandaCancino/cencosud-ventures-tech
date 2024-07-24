# Cencosud Ventures Tech Test

Este proyecto es una prueba técnica que evalúa competencias en ES6/TypeScript, Next.js, Tailwind CSS, y el manejo de herramientas como Git y npm/yarn.

## Descripción

El proyecto consiste en una aplicación web construida con Next.js y TypeScript, que utiliza Tailwind CSS para el diseño y se enfoca en la gestión de usuarios. Las principales funcionalidades incluyen:

1. **Pantalla de inicio de sesión**: Permite al usuario acceder a una lista de usuarios.
2. **Lista de usuarios**: Muestra usuarios consumidos de una REST API.
3. **Detalle del usuario**: Muestra la información detallada de un usuario al hacer clic en "Ver detalle".

**Observación:** el login no esta conectado con ninguna base de datos por lo tanto puede acceder cualquier usuario que lo desee, siempre y cuando cumpla con las normas preestablecidas.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
```

## Scripts

- **Desarrollo**: Ejecuta `npm run dev` o `yarn dev` para iniciar el servidor de desarrollo.

- **Construcción**: Ejecuta `npm run build` o `yarn build` para construir la aplicación para producción.

- **Inicio**: Ejecuta `npm run start` o `yarn start` para iniciar la aplicación en modo producción.

- **Lint**: Ejecuta `npm run lint` o `yarn lint` para verificar problemas de estilo y errores con el linter.

- **Pruebas**: Ejecuta `npm test` o `yarn test` para ejecutar las pruebas unitarias utilizando Jest.

- **Pruebas en modo vigilancia**: Ejecuta `npm run test:watch` o `yarn test:watch` para ejecutar las pruebas en modo vigilancia.

## Dependencias

- **@heroicons/react**: Iconos para React.
- **clsx**: Utilidad para manejar clases condicionales.
- **next**: Framework React para aplicaciones web.
- **react** y **react-dom**: Biblioteca principal de React.
- **use-debounce**: Hook para debouncing en React.

## Dependencias de Desarrollo

- **@testing-library/jest-dom**: Extensiones para Jest para pruebas de DOM.
- **@testing-library/react**: Biblioteca para pruebas de componentes React.
- **@types/jest**, **@types/node**, **@types/react**, **@types/react-dom**: Tipos de TypeScript para Jest, Node.js, React y React DOM.
- **eslint** y **eslint-config-next**: Herramientas para el análisis de código estático.
- **jest** y **jest-environment-jsdom**: Framework de pruebas para JavaScript.
- **postcss**: Herramienta para el procesamiento de CSS.
- **tailwindcss**: Framework de utilidades CSS.
- **typescript**: Lenguaje de programación para el desarrollo con tipos estáticos.

## Contribuciones

Para contribuir a este proyecto, por favor crea un pull request en el repositorio de GitHub y sigue las pautas de contribución establecidas