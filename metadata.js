module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "message": "Project description",
      "default": "A Speike project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "serverPort": {
      "type": "string",
      "message": "server port",
      "default": "8360"
    }
  },
  "skipCompile": [
    "App/src/**/*.vue",
    "App/src/assets/*.png"
  ]
};