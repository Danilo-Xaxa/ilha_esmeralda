document.addEventListener('DOMContentLoaded', function() {
    const allButtons = document.getElementsByTagName('button')

    // Clicou no correto
    let correct = document.querySelector('.correct');
    correct.addEventListener('click', function() {
        for (button of Array.from(allButtons)) {
            button.style.backgroundColor = '#80b060'
        }
        correct.style.backgroundColor = '#2E8B57'
        document.querySelector('#feedback1').innerHTML = 'Acertou!'
    });

    // Clicou em algum dos incorretos
    let incorrects = document.querySelectorAll('.incorrect');
    for (let x = 0; x < incorrects.length; x++) {
        incorrects[x].addEventListener('click', function() {
            for (button of Array.from(allButtons)) {
                button.style.backgroundColor = '#80b060'
            }
            incorrects[x].style.backgroundColor = '#ff4c4c'
            document.querySelector('#feedback1').innerHTML = 'Errou!'
        });
    }

    // Responde o palpite da questão aberta
    document.querySelector('#check').addEventListener('click', function() {
        let input = document.querySelector('input')
        if (['irlanda', 'republica da irlanda', 'república da irlanda'].includes(input.value.toLowerCase())) {
            input.style.backgroundColor = '#2E8B57'
            document.querySelector('#feedback2').innerHTML = 'Acertou!'
        } else {
            input.style.backgroundColor = '#ff4c4c'
            document.querySelector('#feedback2').innerHTML = 'Errou!'
        }
    })

})
