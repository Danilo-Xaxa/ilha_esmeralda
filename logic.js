document.addEventListener('DOMContentLoaded', function() {

    // ...
    let correct = document.querySelector('.correct');
    correct.addEventListener('click', function() {
        correct.style.backgroundColor = '#2E8B57';
        document.querySelector('#feedback1').innerHTML = 'Acertou!';
    });

    // ...
    let incorrects = document.querySelectorAll('.incorrect');
    for (let x = 0; x < incorrects.length; x++) {
        incorrects[x].addEventListener('click', function() {
            incorrects[x].style.backgroundColor = '#ff4c4c';
            document.querySelector('#feedback1').innerHTML = 'Errou!';
        });
    }

    // ...
    document.querySelector('#check').addEventListener('click', function() {
        let input = document.querySelector('input');
        if (input.value === 'Irlanda') {
            input.style.backgroundColor = '#2E8B57';
            document.querySelector('#feedback2').innerHTML = 'Acertou!';
        } else {
            input.style.backgroundColor = '#ff4c4c';
            document.querySelector('#feedback2').innerHTML = 'Errou!';
        }
    });

});