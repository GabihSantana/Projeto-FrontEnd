/* Objetos que serão manipulados */ 

//Menu Responsivo
const obj_nav_list = document.querySelector('.nav_list');
const obj_mobile_menu = document.querySelector('.mobile_menu');
const array_nav_item = document.querySelectorAll('.nav_item');
//Conversor de Dólar
const obj_dolar = document.querySelector('#dolar')
const obj_valor = document.querySelector('#valor')
const obj_multi = document.querySelector('#multi')
const obj_resul = document.querySelector('#resul')
//Formulário Promoção
const obj_nome = document.querySelector('#nome')
const obj_email = document.querySelector('#email')
const obj_telefone = document.querySelector('#telefone')
const obj_cidade = document.querySelector('#cidade')
const obj_text = document.querySelector('#text')
const array_check = document.querySelectorAll('#check')
const obj_enviar = document.querySelector('#enviar')
/* Selos - Cartão */ 
const obj_coloca_selo = document.querySelector('#coloca_selo')
const obj_sel_selo = document.querySelector('#sel_selo')
/* Carimbos - Cartão */
const array_img_carimbo = document.querySelectorAll('.carimbo')
const obj_div_add_carimbo = document.querySelector('#add_carimbo')
/* Área de Texto - Cartão */
const obj_coloca_texto = document.querySelector('#coloca_texto')
const obj_texto_inserido = document.querySelector('#texto_inserido')
const obj_div_area_texto = document.querySelector('#div_area_texto')
/* Tema Claro - Escuro */
const obj_changeThemeBtn = document.querySelector('#change_theme')



/* Novos Objetos */

/* Carimbos - Cartão */
const obj_img_novo = document.createElement('img')


/* Eventos */

/* Menu Responsivo */
for (obj_nav_item of array_nav_item){
    obj_nav_list.addEventListener('click', FunFechaMenu)
}
obj_mobile_menu.addEventListener('click', FunAbreFechaMenu);
/* Conversor de Dólar */
obj_multi.addEventListener('click', FunMultiplica)
/* Formulário Promoção */
obj_enviar.addEventListener('click', FunEnviar)
for (obj_check of array_check){
}
/* Selos - cartão */ 
obj_sel_selo.addEventListener('change', FunColocaSelo)
/* Carimbos - Cartão */
for (obj_img of array_img_carimbo) {
    obj_img.addEventListener('click', function() { FunColocaCarimbo(this.src, this.alt) })
}
/* Área de Texto - Cartão */
obj_coloca_texto.addEventListener('click', FunMudaTexto)
/* Tema Claro - Escuro */
obj_changeThemeBtn.addEventListener('change', FunMudaTema)



/* Chamar Função */

/* Menu Responsivo */
function FunAbreFechaMenu() {
  obj_nav_list.classList.toggle('active');
}

function FunFechaMenu() {
  obj_nav_list.classList.remove('active');
}
/* Conversor de Dólar */
function FunMultiplica() {
    //caso não digitem nenhum número
    if(obj_dolar.value == '' || obj_valor.value == '')
    {
        alert('Preencha os dois valores!')
    }
    //caso o valor seja menor ou maior que o permitido
    else
        if(obj_dolar.value < 1 || obj_dolar.value > 10 || obj_valor.value < 1 || obj_valor.value > 10000){
            alert('Valores Inválidos!')
        }
        //se estiver tudo ok
        else {
        let resul = obj_dolar.value * obj_valor.value
        obj_resul.setAttribute('value', resul)
        }
}
/* Formulário Promoção */
function FunEnviar() {
    if(obj_nome.value == '' || obj_email.value == '' || obj_telefone.value == '' || obj_cidade.value == ''){
    alert("Preencha todos os campos!")
    }
    else
        if(obj_check.checked == false)
        {
            alert("Concorde com os termos!")
        }
    else {
        obj_enviar.value = "Enviado!"
        alert("Enviado com sucesso!")
        FunMudaTema()
        location.reload()
    }
}
/* Selos - cartão */ 
function FunColocaSelo() {
    obj_coloca_selo.setAttribute('src', 'Imagens/' + obj_sel_selo.value + '.png')
    obj_coloca_selo.setAttribute('alt', obj_sel_selo.value)
}
/* Carimbos - Cartão */
function FunColocaCarimbo(par_src, par_alt) {
    obj_img_novo.setAttribute('src', par_src)
    obj_img_novo.setAttribute('alt', par_alt)
    obj_img_novo.setAttribute('title', par_alt)
    obj_div_add_carimbo.appendChild(obj_img_novo)
}
/* Área de Texto - Cartão */
function FunMudaTexto () {
    if(obj_texto_inserido.value != '') {
        obj_div_area_texto.innerHTML = ' ' + obj_texto_inserido.value
    }
    else {
        alert('Digite algo')
    }
}
/* Tema Claro - Escuro */
function FunMudaTema() {
    document.body.classList.toggle("dark")
}
