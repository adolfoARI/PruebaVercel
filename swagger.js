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
        url: process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}/api`
          : "http://localhost:3000/api",
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

function swaggerDocs(app) 
{  
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
module.exports = { swaggerDocs }