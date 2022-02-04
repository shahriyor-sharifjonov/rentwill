import * as functions from "./modules/functions.js";

functions.isWebp();

window.openPopup = function(popup){
    const item = document.getElementById(popup);
   item.classList.add('active');
   document.body.style.overflowY = "hidden";
}

window.popupClose = function(){
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.classList.remove('active');
    });
    document.body.style.overflowY = "visible";
}

let activeQuiz = 1
const quiz = document.querySelector('.quiz__body');
const quizs = document.querySelector('.quiz');
const thanks = document.querySelector('.thanks');
const quizTitle = document.querySelector('.quiz__title');
const progress = document.querySelector('.quiz__progress-track');
const prev = document.querySelector('.quiz__prev');
const next = document.querySelector('.quiz__next');
const item = document.querySelectorAll('.quiz__item');
const check = document.querySelectorAll('.quiz__check');
window.reloadQuiz = function(){
    if(activeQuiz == 1){
        quizTitle.innerHTML = '1. Где планируете ремонт?'
        prev.classList.add('hidden');
        progress.style.width = '14.2857142857%';
        item.forEach(el => {
            el.classList.remove('active');
        });
        document.querySelector('.quiz__1').classList.add('active');
    }else if(activeQuiz == 2){
        quizTitle.innerHTML = 'Какой тип ремонта Вас интересует?'
        prev.classList.remove('hidden');
        progress.style.width = '28.5714285714%';
        item.forEach(el => {
            el.classList.remove('active');
        });
        document.querySelector('.quiz__2').classList.add('active');
    }else if(activeQuiz == 3){
        quizTitle.innerHTML = 'Какая площадь требуется к ремонту?'
        prev.classList.remove('hidden');
        progress.style.width = '42.8571428571%';
        item.forEach(el => {
            el.classList.remove('active');
        });
        document.querySelector('.quiz__3').classList.add('active');
    }else if(activeQuiz == 4){
        quizTitle.innerHTML = 'Есть ли у Вас дизайн проект?'
        prev.classList.remove('hidden');
        progress.style.width = '57.1428571428%';
        item.forEach(el => {
            el.classList.remove('active');
        });
        document.querySelector('.quiz__4').classList.add('active');
    }else if(activeQuiz == 5){
        quizTitle.innerHTML = 'Требуется ли Вам помощь с подбором материала?'
        prev.classList.remove('hidden');
        progress.style.width = '71.4285714285%';
        item.forEach(el => {
            el.classList.remove('active');
        });
        document.querySelector('.quiz__5').classList.add('active');
    }else if(activeQuiz == 6){
        quizTitle.innerHTML = 'Когда планируете начать ремонт?'
        prev.classList.remove('hidden');
        progress.style.width = '85.7142857142%';
        item.forEach(el => {
            el.classList.remove('active');
        });
        document.querySelector('.quiz__6').classList.add('active');
    }else if(activeQuiz == 7){
        quizTitle.innerHTML = 'Выберите Ваш подарок'
        prev.classList.remove('hidden');
        progress.style.width = '100%';
        item.forEach(el => {
            el.classList.remove('active');
        });
        document.querySelector('.quiz__7').classList.add('active');
    }else if(activeQuiz == 8){
        console.log('fasfa');
        thanks.classList.add('active')
        quiz.classList.add('hidden') 
        quizs.classList.add('pb0')
    }
}
reloadQuiz()
next.addEventListener('click', function(){
    if(next.classList.contains('can')){
        activeQuiz ++;
        reloadQuiz()
        next.classList.remove('can');
    }
})
prev.addEventListener('click', function(){
    activeQuiz --;
    reloadQuiz()
    next.classList.add('can');
})

check.forEach(element => {
    element.addEventListener('click', function(){
        next.classList.add('can'); 
    })
});



let activeQuiz2 = 1
const quiz2 = document.querySelector('.quiz-2__body');
const quiz2s = document.querySelector('.quiz-2');
const quizTitle2 = document.querySelector('.quiz-2__title');
const progress2 = document.querySelector('.quiz-2__progress-track');
const prev2 = document.querySelector('.quiz-2__prev');
const next2 = document.querySelector('.quiz-2__next');
const item2 = document.querySelectorAll('.quiz-2__item');
const check2 = document.querySelectorAll('.quiz-2__check');
const thanks2 = document.querySelector('.thanks2');
window.reloadQuiz2 = function(){
    if(activeQuiz2 == 1){
        quizTitle2.innerHTML = '1. Где планируете ремонт?'
        prev2.classList.add('hidden');
        progress2.style.width = '14.2857142857%';
        item2.forEach(el => {
            el.classList.remove('active');
        });
        document.querySelector('.quiz-2__1').classList.add('active');
    }else if(activeQuiz2 == 2){
        quizTitle2.innerHTML = 'Какой тип ремонта Вас интересует?'
        prev2.classList.remove('hidden');
        progress2.style.width = '28.5714285714%';
        item2.forEach(el => {
            el.classList.remove('active');
        });
        document.querySelector('.quiz-2__2').classList.add('active');
    }else if(activeQuiz2 == 3){
        quizTitle2.innerHTML = 'Какая площадь требуется к ремонту?'
        prev2.classList.remove('hidden');
        progress2.style.width = '42.8571428571%';
        item2.forEach(el => {
            el.classList.remove('active');
        });
        document.querySelector('.quiz-2__3').classList.add('active');
    }else if(activeQuiz2 == 4){
        quizTitle2.innerHTML = 'Есть ли у Вас дизайн проект?'
        prev2.classList.remove('hidden');
        progress2.style.width = '57.1428571428%';
        item2.forEach(el => {
            el.classList.remove('active');
        });
        document.querySelector('.quiz-2__4').classList.add('active');
    }else if(activeQuiz2 == 5){
        quizTitle2.innerHTML = 'Требуется ли Вам помощь с подбором материала?'
        prev2.classList.remove('hidden');
        progress2.style.width = '71.4285714285%';
        item2.forEach(el => {
            el.classList.remove('active');
        });
        document.querySelector('.quiz-2__5').classList.add('active');
    }else if(activeQuiz2 == 6){
        quizTitle2.innerHTML = 'Когда планируете начать ремонт?'
        prev2.classList.remove('hidden');
        progress2.style.width = '85.7142857142%';
        item2.forEach(el => {
            el.classList.remove('active');
        });
        document.querySelector('.quiz-2__6').classList.add('active');
    }else if(activeQuiz2 == 7){
        quizTitle2.innerHTML = 'Выберите Ваш подарок'
        prev2.classList.remove('hidden');
        progress2.style.width = '100%';
        item2.forEach(el => {
            el.classList.remove('active');
        });
        document.querySelector('.quiz-2__7').classList.add('active');
    }else if(activeQuiz2 == 8){
        thanks2.classList.add('active')
        quiz2.classList.add('hidden')
        quiz2s.classList.add('pb0')
    }
}
reloadQuiz2()
next2.addEventListener('click', function(){
    if(next2.classList.contains('can')){
        activeQuiz2 ++;
        reloadQuiz2()
        next2.classList.remove('can');
    }
})
prev2.addEventListener('click', function(){
    activeQuiz2 --;
    reloadQuiz2()
    next2.classList.add('can');
})

check2.forEach(element => {
    element.addEventListener('click', function(){
        next2.classList.add('can'); 
    })
});
