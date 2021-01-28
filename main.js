var cliques = 0

function gerar_aleatorio(max) {
    return Math.floor(Math.random() * max + 1)
}

do {
    var num = parseFloat(gerar_aleatorio(10))
    var operacao = parseFloat(gerar_aleatorio(10 + 1))
}
while ((num === 0 || num === 1) || (operacao === 0 || operacao === 1))


function clicar() {
    var comando = document.getElementById('ordem');
    switch (cliques) {
        case 0:
            comando.innerHTML = `<h3>Multiplica ele por ${operacao}</h3>`
            break;
        case 1:
            comando.innerHTML = `<h3>Soma ${num} </h3>`
            break;
        case 2:
            comando.innerHTML = `<h3>Divide ele por ${operacao}</h3>`
            break;
        case 3:
            comando.innerHTML = '<h3>Subtrai do resultado o número que você pensou na primeira vez</h3>'
            break;
        case 4:
            comando.innerHTML = `<h3>Deu ${num/operacao} </h3>`
            var pegar_ok = document.getElementById('ok').remove();
            var rec = document.createElement('div')
            rec.innerHTML = "<input id='recomecar' type='button' value='Recomeçar' onclick='recomecar()'>"
            rec.style = "text-align: center"
            document.body.appendChild(rec);
            break;
        default:
            break;
    }
    comando.style.body = 'text-align: center'
    cliques += 1;
}

function mostrar_texto() {
    var texto = document.getElementById('texto')
    texto.innerHTML = '<p>Para usar a calculadora clique em "ajuda"<p>'
}

function sumir() {
    var texto = document.getElementById('texto')
    texto.innerHTML = ''
}

function criar_numero(id) {
    var num = document.createElement('input')
    num.type = 'number'
    num.id = id
    document.body.appendChild(num)
}

function somar() {
    if (document.getElementById('result')) {
        document.getElementById('result').remove();
    }
    var pri = Number(document.getElementById('num1').value)
    var seg = Number(document.getElementById('num2').value)
    var result = document.createElement('p')
    result.id = 'result'
    result.innerHTML = `O resultado é <strong>${pri + seg}</strong>`
    document.body.appendChild(result)
}

function subtrair() {
    if (document.getElementById('result')) {
        document.getElementById('result').remove();
    }
    var pri = Number(document.getElementById('num1').value)
    var seg = Number(document.getElementById('num2').value)
    var result = document.createElement('p')
    result.id = 'result'
    result.innerHTML = `O resultado é <strong>${pri - seg}</strong>`
    document.body.appendChild(result)
}

function dividir() {
    if (document.getElementById('result')) {
        document.getElementById('result').remove();
    }
    var pri = Number(document.getElementById('num1').value)
    var seg = Number(document.getElementById('num2').value)
    var result = document.createElement('p')
    result.id = 'result'
    result.innerHTML = `O resultado é <strong>${pri / seg}</strong>`
    document.body.appendChild(result)
}

function mult() {
    if (document.getElementById('result')) {
        document.getElementById('result').remove();
    }
    var pri = Number(document.getElementById('num1').value)
    var seg = Number(document.getElementById('num2').value)
    var result = document.createElement('p')
    result.id = 'result'
    result.innerHTML = `O resultado é <strong>${pri * seg}</strong>`
    document.body.appendChild(result)
}

function calculadora() {
    document.getElementById("help").remove()
    document.getElementById('texto').remove()
    var calc = document.getElementById('calculadora')
    calc.style = 'display: block';
}

function recomecar() {
    location.reload()
}