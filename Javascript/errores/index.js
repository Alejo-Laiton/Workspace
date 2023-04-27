const logger = require('./logger')

// el .log() no se encuentra definido para la libreria winston
// logger.log("Hola estoy saliendo por pantalla")
logger.info("Hola esto es un mensae informativo")
logger.debug("Esto es un mensaje de debu")
logger.warn("Esto es un mensaje de advertencia")
logger.error("Esto es un error")