function geraSegundos(segundos){
    const data= new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR',
    {hours12:false,
        timeZone:'UTC'
    
    })

}

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0;
let timer ;

function iniciaRelogio() {
     timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = geraSegundos(segundos);
    },1000)
}

document.addEventListener('click', function(e){
const el = e.target;
if (el.classList.contains('iniciar')){
    relogio.classList.remove('pausado')
    clearInterval(timer);
    iniciaRelogio()
}else if(el.classList.contains('pausar')){
    clearInterval(timer);
    relogio.classList.add('pausado')
}else if(el.classList.contains('zerar')){
clearInterval(timer);
    relogio.classList.remove('pausado')
    relogio.innerHTML =  "00:00:00";
    segundos = 0;}
})




/**iniciar.addEventListener('click',function(a){
    relogio.classList.remove('pausado')
    clearInterval(timer);
    iniciaRelogio();
})
pausar.addEventListener('click',function(a){
    clearInterval(timer);
    relogio.classList.add('pausado')
})
zerar.addEventListener('click',function(a){
    clearInterval(timer);
    relogio.innerHTML =  "00:00:00";
    segundos = 0;
}) */