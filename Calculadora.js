var resultado,
  n1,
  n2,
  historico,
  valores,
  paragrafo,
  historicoResultados,
  span,
  quebra,
  txt,
  convert,
  allResults,
  recNumb,
  excNumb;

resultado = document.getElementById('resultado');
n1 = document.getElementById('numero1');
n2 = document.getElementById('numero2');
historico = document.getElementById('historico');
valores = [];

//Constructor Function

function Valor(n1, n2) {
  this.n1 = n1;
  this.n2 = n2;
}

Valor.prototype.somar = function () {
  resultado.value = parseFloat(n1.value) + parseFloat(n2.value);
  valores.push(parseFloat(n1.value) + parseFloat(n2.value));
};

Valor.prototype.subtrair = function () {
  resultado.value = parseFloat(n1.value) - parseFloat(n2.value);
  valores.push(parseFloat(n1.value) - parseFloat(n2.value));
};

Valor.prototype.multiplicar = function () {
  resultado.value = parseFloat(n1.value) * parseFloat(n2.value);
  valores.push(parseFloat(n1.value) * parseFloat(n2.value));
};

Valor.prototype.dividr = function () {
  resultado.value = parseFloat(n1.value) / parseFloat(n2.value);
  valores.push(parseFloat(n1.value) / parseFloat(n2.value));
};

Valor.prototype.porcentagem = function () {
  n2.value = (parseFloat(n1.value) / 100) * parseFloat(n2.value);
  valores.push(parseFloat(n2.value));
};

Valor.prototype.qtsPorcento = function () {
  resultado.value = (parseFloat(n2.value) / parseFloat(n1.value)) * 100;
  valores.push((parseFloat(n2.value) / parseFloat(n1.value)) * 100);
};

Valor.prototype.quadrado = function () {
  n1.value = Math.pow(parseFloat(n1.value), 2);
  n2.value = Math.pow(parseFloat(n2.value), 2);
  if (n1.value != '') {
    valores.push(n1.value);
  }
  if (n2.value != '') {
    valores.push(n2.value);
  }
};

Valor.prototype.cubo = function () {
  n1.value = Math.pow(parseFloat(n1.value), 3);
  n2.value = Math.pow(parseFloat(n2.value), 3);
  if (n1.value != '') {
    valores.push(n1.value);
  }
  if (n2.value != '') {
    valores.push(n2.value);
  }
};

Valor.prototype.potenciacao = function () {
  resultado.value = Math.pow(parseFloat(n1.value), parseFloat(n2.value));
  valores.push(Math.pow(parseFloat(n1.value), parseFloat(n2.value)));
};

Valor.prototype.raiz = function () {
  n1.value = Math.sqrt(parseFloat(n1.value));
  n2.value = Math.sqrt(parseFloat(n2.value));
  if (n1.value != '') {
    valores.push(n1.value);
  }
  if (n2.value != '') {
    valores.push(n2.value);
  }
};

Valor.prototype.raizCubica = function () {
  n1.value = Math.cbrt(parseFloat(n1.value));
  n2.value = Math.cbrt(parseFloat(n2.value));
  if (n1.value != '') {
    valores.push(n1.value);
  }
  if (n2.value != '') {
    valores.push(n2.value);
  }
};

Valor.prototype.indiceRaiz = function () {
  resultado.value = Math.pow(parseFloat(n1.value), 1.0 / parseFloat(n2.value));
  valores.push(Math.pow(parseFloat(n1.value), 1.0 / parseFloat(n2.value)));
};

Valor.prototype.preencherHistorico = function () {
  paragrafo = document.createElement('p');
  historicoResultados = document.createElement('span');
  span = document.createElement('span');
  quebra = document.createElement('br');

  //Setar atributos da tag paragrafo que criamos com a variavel paragrafo

  paragrafo.setAttribute('style', 'cursor: pointer');
  paragrafo.setAttribute('class', 'result');

  //Setar atributos da tag span criada com a variavel historicoResultados

  historicoResultados.setAttribute('class', 'historicoResultados');
  historicoResultados.setAttribute('style', 'padding-left: 15px;');
  historicoResultados.innerHTML = valores[valores.length - 1];

  //Setar atributos da tag span criada com a variavel span

  span.setAttribute('class', 'fechar');
  span.setAttribute('style', 'padding-right: 15px');
  span.innerHTML = 'x';

  //Inserir dentro da div historico os elementos seguidos um do outro sempre um abaixo do outro

  historico.insertBefore(paragrafo, historico.firstChild);
  paragrafo.appendChild(historicoResultados);
  paragrafo.appendChild(span);
  paragrafo.appendChild(quebra);

  allResults = document.querySelectorAll('.result');
  recNumb = document.querySelectorAll('.historicoResultados');
  excNumb = document.querySelectorAll('.fechar');

  recNumb.forEach((r) => {
    r.addEventListener('click', () => {
      txt = r.textContent;
      convert = Number(txt);
      n1.value = convert;
    });
  });

  excNumb.forEach((e, index) => {
    e.addEventListener('click', () => {
      allResults[index].remove();
    });
  });
};
Valor.prototype.preencherHistorico2 = function () {
  paragrafo = document.createElement('p');
  historicoResultados = document.createElement('span');
  span = document.createElement('span');
  quebra = document.createElement('br');
  paragrafo2 = document.createElement('p');
  historicoResultados2 = document.createElement('span');
  span2 = document.createElement('span');
  quebra2 = document.createElement('br');

  //Setar atributos da tag paragr??ofo que criamos com a variavel paragrafo

  paragrafo.setAttribute('style', 'cursor: pointer');
  paragrafo.setAttribute('class', 'result');
  paragrafo2.setAttribute('style', 'cursor: pointer');
  paragrafo2.setAttribute('class', 'result');

  //Setar atributos da tag span criada com a variavel historicoResultados

  historicoResultados.setAttribute('class', 'historicoResultados');
  historicoResultados.setAttribute('style', 'padding-left: 15px;');
  historicoResultados.innerHTML = valores[valores.length - 1];
  historicoResultados2.setAttribute('class', 'historicoResultados');
  historicoResultados2.setAttribute('style', 'padding-left: 15px;');
  historicoResultados2.innerHTML = valores[valores.length - 2];

  //Setar atributos da tag span criada com a variavel span

  span.setAttribute('class', 'fechar');
  span.setAttribute('style', 'padding-right: 15px');
  span.innerHTML = 'x';
  span2.setAttribute('class', 'fechar');
  span2.setAttribute('style', 'padding-right: 15px');
  span2.innerHTML = 'x';

  //Inserir dentro da div historico os elementos seguidos um do outro sempre um abaixo do outro

  historico.insertBefore(paragrafo2, historico.firstChild);
  paragrafo2.appendChild(historicoResultados2);
  paragrafo2.appendChild(span2);
  paragrafo2.appendChild(quebra2);
  historico.insertBefore(paragrafo, historico.firstChild);
  paragrafo.appendChild(historicoResultados);
  paragrafo.appendChild(span);
  paragrafo.appendChild(quebra);

  allResults = document.querySelectorAll('.result');
  recNumb = document.querySelectorAll('.historicoResultados');
  excNumb = document.querySelectorAll('.fechar');

  recNumb.forEach((r) => {
    r.addEventListener('click', () => {
      txt = r.textContent;
      convert = Number(txt);
      n1.value = convert;
    });
  });

  excNumb.forEach((e, index) => {
    e.addEventListener('click', () => {
      allResults[index].remove();
    });
  });
};

//Eventos onlick

document.getElementById('somar').addEventListener('click', () => {
  var soma = new Valor(n1, n2);
  if (n1.value == '' || n2.value == '') {
    $('#Erro').modal('show');
  } else {
    soma.somar();
    soma.preencherHistorico();
  }
});

document.getElementById('subtrair').addEventListener('click', () => {
  var subtrair = new Valor(n1, n2);
  if (n1.value == '' || n2.value == '') {
    $('#Erro').modal('show');
  } else {
    subtrair.subtrair();
    subtrair.preencherHistorico();
  }
});

document.getElementById('multiplicar').addEventListener('click', () => {
  var multiplicar = new Valor(n1, n2);
  if (n1.value == '' || n2.value == '') {
    $('#Erro').modal('show');
  } else {
    multiplicar.multiplicar();
    multiplicar.preencherHistorico();
  }
});

document.getElementById('dividir').addEventListener('click', () => {
  var dividir = new Valor(n1, n2);
  if (n1.value == '' || n2.value == '') {
    $('#Erro').modal('show');
  } else {
    dividir.dividr();
    dividir.preencherHistorico();
  }
});

document.getElementById('porcentagem').addEventListener('click', () => {
  var porcentagem = new Valor(n1, n2);
  if (n1.value == '' || n2.value == '') {
    $('#Erro').modal('show');
  } else {
    porcentagem.porcentagem();
    porcentagem.preencherHistorico();
  }
});

document.getElementById('qtsPorcento').addEventListener('click', () => {
  var qtsPorcento = new Valor(n1, n2);
  if (n1.value == '' || n2.value == '') {
    $('#Erro').modal('show');
  } else {
    qtsPorcento.qtsPorcento();
    qtsPorcento.preencherHistorico();
  }
});

document.getElementById('quadrado').addEventListener('click', () => {
  var quadrado = new Valor(n1, n2);
  if (n1.value == '' && n2.value == '') {
    $('#Erro').modal('show');
  } else {
    quadrado.quadrado();
    if (n1.value == '' || n2.value == '') {
      quadrado.preencherHistorico();
    }
    if (n1.value != '' && n2.value != '') {
      quadrado.preencherHistorico2();
    }
  }
});

document.getElementById('cubo').addEventListener('click', () => {
  var cubo = new Valor(n1, n2);
  if (n1.value == '' && n2.value == '') {
    $('#Erro').modal('show');
  } else {
    cubo.cubo();
    if (n1.value == '' || n2.value == '') {
      cubo.preencherHistorico();
    }
    if (n1.value != '' && n2.value != '') {
      cubo.preencherHistorico2();
    }
  }
});

document.getElementById('potenciacao').addEventListener('click', () => {
  var potenciacao = new Valor(n1, n2);
  if (n1.value == '' || n2.value == '') {
    $('#Erro').modal('show');
  } else {
    potenciacao.potenciacao();
    potenciacao.preencherHistorico();
  }
});

document.getElementById('raizQuadrada').addEventListener('click', () => {
  var raiz = new Valor(n1, n2);
  if (n1.value == '' && n2.value == '') {
    $('#Erro').modal('show');
  } else {
    raiz.raiz();
    if (n1.value == '' || n2.value == '') {
      raiz.preencherHistorico();
    }
    if (n1.value != '' && n2.value != '') {
      raiz.preencherHistorico2();
    }
  }
});

document.getElementById('raizCubica').addEventListener('click', () => {
  var raizCubica = new Valor(n1, n2);
  if (n1.value == '' && n2.value == '') {
    $('#Erro').modal('show');
  } else {
    raizCubica.raizCubica();
    if (n1.value == '' || n2.value == '') {
      raizCubica.preencherHistorico();
    }
    if (n1.value != '' && n2.value != '') {
      raizCubica.preencherHistorico2();
    }
  }
});

document.getElementById('indiceRaiz').addEventListener('click', () => {
  var indiceRaiz = new Valor(n1, n2);
  if (n1.value == '' || n2.value == '') {
    $('#Erro').modal('show');
  } else {
    indiceRaiz.indiceRaiz();
    indiceRaiz.preencherHistorico();
  }
});

$('#limpar').click(function () {
  $('#numero1').val('');
  $('#numero2').val('');
  $('#resultado').val('');
  valores.length = [];
  $('.result').remove();
});

document.getElementById('darkTheme').addEventListener('click', () => {
  if (document.body.classList.contains('lightTheme')) {
    document.body.classList.remove('lightTheme');
    document.body.classList.add('darktheme');
  } else if (document.body.classList.contains('darktheme')) {
    document.body.classList.remove('darktheme');
    document.body.classList.add('lightTheme');
  }
});

function date() {
  var campoData = document.getElementById('data');
  var d = new Date();
  var dia = d.getDate();
  var mes = d.getMonth();
  var ano = d.getFullYear();
  var meses = [
    'Janeiro',
    'Fevereiro',
    'Mar??o',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  dia = dia < 10 ? '0' + dia : dia;
  campoData.innerHTML = `${dia} de ${meses[mes]} de ${ano}`;
}

function hora() {
  var d = new Date();
  var hora = d.getHours();
  var minuto = d.getMinutes();
  var segundo = d.getSeconds();
  hora = hora < 10 ? '0' + hora : hora;
  minuto = minuto < 10 ? '0' + minuto : minuto;
  segundo = segundo < 10 ? '0' + segundo : segundo;
  document.getElementById('hora').innerHTML = `${hora}:${minuto}:${segundo}`;
}

//Bootstrap Tour

var tour = new Tour({
  steps: [
    {
      element: '#n1',
      title: '<b>Campo N??mero 1</b>',
      content: 'Aqui voc?? preenche com n??mero inicial',
      placement: 'bottom',
    },
    {
      element: '#n2',
      title: '<b>Campo N??mero 2</b>',
      content: 'Aqui voc?? preenche com n??mero que voc?? ir??o efetuar a opera????o',
      placement: 'bottom',
    },
    {
      element: '#somar',
      title: '<b>Bot??o Soma</b>',
      content:
        'Aperte esse bot??o para efetuar a soma entre os dois digitos preenchidos, o resultado ser??o apresentado no campo <b>Resultado</b>',
      placement: 'bottom',
    },
    {
      element: '#subtrair',
      title: '<b>Bot??o Subtrair</b>',
      content:
        'Aperte esse bot??o para efetuar a subtra????o entre os dois digitos preenchidos, o resultado ser??o apresentado no campo <b>Resultado</b>',
      placement: 'bottom',
    },
    {
      element: '#multiplicar',
      title: '<b>Bot??o Multiplicar</b>',
      content:
        'Aperte esse bot??o para efetuar a multiplica????o entre os dois digitos preenchidos, o resultado ser??o apresentado no campo <b>Resultado</b>',
      placement: 'bottom',
    },
    {
      element: '#dividir',
      title: '<b>Bot??o Dividir</b>',
      content:
        'Aperte esse bot??o para efetuar a divis??o entre os dois digitos preenchidos, o resultado ser??o apresentado no campo <b>Resultado</b>',
      placement: 'bottom',
    },
    {
      element: '#porcentagem',
      title: '<b>Bot??o Porcentagem</b>',
      content:
        'Aperte esse bot??o para verificar o percentual preenchido no n??mero 2 relacionado ao n??mero 1, o resultado ir??o ser apresentado no <b>pr??prio campo do n??mero 2</b>',
      placement: 'bottom',
    },
    {
      element: '#qtsPorcento',
      title: '<b>Bot??os descobrir porcentagem</b>',
      content:
        'Insira o valor total no campo n??mero 1 e o valor que voc?? quer saber quantos % ele ???? do primeiro n??mero no campo n??mero 2. O resultado ser??o apresentado no campo Resultado',
      placement: 'bottom',
    },
    {
      element: '#quadrado',
      title: '<b>Bot??o elevar ao quadrado</b>',
      content:
        'Aperte esse bot??o para elevar um n??mero ao quadrado, o resultado ser??o apresentado no pr??prio campo que for preenchido o n??mero.',
      placement: 'bottom',
    },
    {
      element: '#cubo',
      title: '<b>Bot??o elevar ao cubo</b>',
      content:
        'Aperte esse bot??o para elevar um n??mero ao cubo, o resultado ser??o apresentado no pr??prio campo que for preenchido o n??mero',
      placement: 'bottom',
    },
    {
      element: '#potenciacao',
      title: '<b>Bot??o Potencia????o</b>',
      content:
        'Aperte esse bot??o para efetuar o calculo de um n??mero a x potencia, para isso preencher o campo Numero 1 com o n??mero que quer ser elevado e o campo N??mero 2 com a potencia a ser elevada o primeiro n??mero. O resultado ser??o apresentado no campo <b>Resultado</b>',
      placement: 'bottom',
    },
    {
      element: '#raizQuadrada',
      title: '<b>Bot??o Raiz Quadrada</b>',
      content:
        'Aperte esse bot??o para verificar o valor da raiz quadrada de um n??mero. Preencher o campo N??mero 1 ou o campo N??mero 2. O resultado ser??o apresentado no pr??prio campo preenchido.',
      placement: 'top',
    },
    {
      element: '#raizCubica',
      title: '<b>Bot??o Raiz C??bica</b>',
      content:
        'Aperte esse bot??o para verificar o valor da raiz c??bica de um n??mero. Preencher o campo N??mero 1 ou o campo N??mero 2. O resultado ser??o apresentado no pr??prio campo preenchido.',
      placement: 'top',
    },
    {
      element: '#indiceRaiz',
      title: '<b>Bot??o Raiz com ????ndice</b>',
      content:
        'Aperte esse bot??o para efetuar o calculo da radializa????o de um n??mero de acordo com x ????ndice, para isso preencher o campo Numero 1 com o n??mero que quer ser radicalizado e o campo N??mero 2 com o indice relacionado ao primeiro n??mero. O resultado ser??o apresentado no campo <b>Resultado</b>',
      placement: 'top',
    },
    {
      element: '#limpar',
      title: '<b>Bot??o Limpar</b>',
      content: 'Aperte esse bot??o para limpar todos os campos.',
      placement: 'top',
    },
    {
      element: '#historico',
      title: '<b>Hist??rico de resultados</b>',
      content:
        'Aqui ser??o apresentados todos os resultados que voc?? obteve. Ao clicar no n??mero, o campo <b>N??mero 1</b> ser??o preenchido com o respectivo n??mero selecionado. Ao clicar no <b>x</b> esse n??mero ser??o excluido',
      placement: 'bottom',
    },
  ],
  keyboard: false,
  storage: false,
  backdrop: true,
  template:
    '<div class="popover" role="tooltip"> <div class="arrow"></div> <h3 class="popover-title" style="font-weight: bold"></h3> <div class="popover-content"></div> <div class="popover-navigation"> <div class="btn-group"> <button class="btn btn-sm btn-default" data-role="prev">&laquo; Anterior</button> <button class="btn btn-sm btn-default" data-role="next">Pr??ximo &raquo;</button> <button class="btn btn-sm btn-default" data-role="pause-resume" data-pause-text="Pause" data-resume-text="Resume">Pause</button> </div> <button class="btn btn-sm btn-primary" data-role="end" onclick="javascript:tour.restart(true)">Finalizar <i class="glyphicon glyphicon-thumbs-up"></i></button> </div> </div>',
});

window.onload = function () {
  date();
  hora();
  setInterval(hora, 1000);
};
