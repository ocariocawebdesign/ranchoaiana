senha = '123456';
senhadig = prompt("Digite a senha", "")
if (senha != senhadig) {
  alert('Acesso negado!');
  top.location.href = 'erro.htm';
