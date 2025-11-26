const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentación generada automáticamente con Swagger',
    },
    servers: [
      {
        url: process.env.NODE_ENV === 'production'
          ? 'https://prueba-vercel-d3v304cmc-johel-adolfo-vargas-sandovals-projects.vercel.app/api'
          : 'http://localhost:3000/api',
      },
    ],
    components:{
      securitySchemes:{
        bearerAuth:{
          type: 'http',
          scheme: 'bearer',
          bearerFormat:'JWT',
        },
      },
    },
    security:[
      {
        bearerAuth:[],
      }
    ]
  },
  apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  if (process.env.NODE_ENV !== 'production') {
    console.log(`Swagger local listo en http://localhost:3000/api-docs`);
  }
}

module.exports = { swaggerDocs };
