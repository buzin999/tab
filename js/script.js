/* Конфигурация */
let a = 'info-header-tab',
    b = 'info-header',
    c = 'info-tabcontent';

/* Функция табов */
function tabs(a, b, c) {
    let tab = document.querySelectorAll(`.${a}`),
        info = document.querySelector(`.${b}`),
        tabContent = document.querySelectorAll(`.${c}`);

    //Функция, которая скрывает табы
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    //Функция, которая отображает блок, который связан с нажатым табом
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    //Определяем какой таб был нажат
    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains(`${a}`)) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}
tabs(a, b, c);