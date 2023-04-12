let digitalElement = document.querySelector('.digital'); //selecionei o relogio digital
let sElement = document.querySelector(".p_s"); // selecionei o ponteiro de segundoss
let mElement = document.querySelector(".p_m"); // selecionei o ponteiro de minutos
let hElement = document.querySelector(".p_h"); //selecionei o ponteiro de horas

function updateClock(){

     let now  = new Date();
     let hour = now.getHours();
     let minute = now.getMinutes();
     let second = now.getSeconds();

     digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

     //controlando os ponteiros de segundos, minutos e horas

     let sDeg = ((360/60) * second) - 90 ; // o angulo dos segundos vai ser 360 divido por 60, vezes a quantidade de segundos  
     let mDeg = ((360/60) * minute) - 90 ;
     let hDeg = ((360/12) * hour) - 90 ; // tenho que fazer 360 graus dividido pelo número de horas (como o relógio só tem 12 ponteiros, divide por 12)




     sElement.style.transform = `rotate(${sDeg}deg)`;
     mElement.style.transform = `rotate(${mDeg}deg)`;
     hElement.style.transform = `rotate(${hDeg}deg)`;

}

function fixZero(time){ // essa função é para corrigir o bug que não deixa os segundos de 0 à 9 ter dois digitos (ex: aparece assim '9' e não '09')

    if(time <  10 ){ //se o tempo for menor que 10 
        return '0' + time // retorna o 0+tempo (ex 09)
    } else{

        return time //senão retorna a hora normal
    }

}

setInterval(updateClock, 1000) // essa função vai atualizar o relógio a cada 1s
updateClock() // para acabar com o dalay quandoa tualizo a tela