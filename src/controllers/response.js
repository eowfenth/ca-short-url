const response = (ctx, code, dados) => {
  const status = code >= 200 && code <= 399 ? "sucesso" : "erro";
  ctx.status = code;
  ctx.body = {
    status: status,
    dados: dados,
  };
};

module.exports = response;
