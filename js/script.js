/* menu for mobile */
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');
    menuBtn.classList.toggle('open');
}


const tab1 = document.getElementById('tab-1');
const tab2 = document.getElementById('tab-2');
const tab3 = document.getElementById('tab-3');

const view1 = document.getElementById('view-1')
const view2 = document.getElementById('view-2')
const view3 = document.getElementById('view-3')


tab1.addEventListener('click', toggleView1Hide2and3);
tab2.addEventListener('click', toggleView2Hide1and3);
tab3.addEventListener('click', toggleView3Hide1and2);

function toggleView1Hide2and3(e) {
    console.log(e);
    view1.classList.remove('hidden');
    view1.classList.add('flex');

    view2.classList.remove('flex');
    view2.classList.add('hidden');

    view3.classList.remove('flex');
    view3.classList.add('hidden');
    document.getElementById('tab-1').classList.add('border-carnation', 'border-b-4');
    document.getElementById('tab-2').classList.remove('border-carnation', 'border-b-4');
    document.getElementById('tab-3').classList.remove('border-carnation', 'border-b-4');
        
}

function toggleView2Hide1and3(e) {
    view2.classList.remove('hidden');
    view2.classList.add('flex');

    view1.classList.remove('flex');
    view1.classList.add('hidden');

    view3.classList.remove('flex');
    view3.classList.add('hidden');
    document.getElementById('tab-2').classList.add('border-carnation', 'border-b-4');
    document.getElementById('tab-1').classList.remove('border-carnation', 'border-b-4');
    document.getElementById('tab-3').classList.remove('border-carnation', 'border-b-4');
        
}

function toggleView3Hide1and2(e) {
    console.log(e);
    view3.classList.remove('hidden');
    view3.classList.add('flex');

    view1.classList.remove('flex');
    view1.classList.add('hidden');

    view2.classList.remove('flex');
    view2.classList.add('hidden');
    document.getElementById('tab-3').classList.add('border-carnation', 'border-b-4');
    document.getElementById('tab-1').classList.remove('border-carnation', 'border-b-4');
    document.getElementById('tab-2').classList.remove('border-carnation', 'border-b-4');
        
}

/* USING forEach */

const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer');

questions.forEach((question) => question.addEventListener('click', questionClicked));


function questionClicked(e) {
   const clickedQuestion = e.target.closest('.question');
   const theAnswer = clickedQuestion.nextElementSibling;
   const arrowImage = clickedQuestion.querySelector('arrow')

   if (theAnswer && theAnswer.classList.contains('answer')) {
    theAnswer.classList.toggle('hidden');
    clickedQuestion.classList.toggle('border-b-2')
   }

   answers.forEach((answer) => {
    if (answer !== theAnswer) {
        answer.classList.add('hidden');
    }
   })
}
