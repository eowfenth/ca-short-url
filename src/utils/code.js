/**
 * Gera um novo código encurtado de URL;
 */
const gerarCódigo = () => Math.random().toString(32).substr(2, 9);

module.exports = gerarCódigo;
