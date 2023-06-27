var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var form4 = document.getElementById("form4");
var conclusion = document.getElementById('conclusion');
var content = document.getElementById('content');
const surgery = [
                    'N. Лимфаденэктомия не показана',
                    'I. Биопсия сторожевого лимфатического узла со срочным гистологическим исследованием',
                    'II. Односторонняя поверхностная пахово-бедренная лимфаденэктомия',
                    'II. Двусторонняя поверхностная пахово-бедренная лимфаденэктомия',
                    'III. Операция Дюкена. Глубокая пахово-бедренная лимфаденэктомия',
                    'IV. Пахово-бедренно-подвздошная лимфаденэктомия',
                    'Операция окончена',
                    ];
function submitForm(event) {
    event.preventDefault();
    var msptlu = document.getElementById('msptlu-y').checked;
    var mspblu = document.getElementById('mspblu-y').checked;
    var depth = document.getElementById('depth').value;
    var size = document.getElementById('size').value;
    var dist = document.getElementById('dist').value;
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
    conclusion.style.display = "none";
    content.innerHTML = '';
    if (msptlu == true) {
        conclusion.style.display = "inline-grid";
        content.innerHTML += surgery[5];
        return;
    } else if (mspblu == true) {
        conclusion.style.display = "inline-grid";
        content.innerHTML += surgery[4];
        return;
    }
    if (size <= '2' && depth <= '1') {
        conclusion.style.display = "inline-grid";
            content.innerHTML += surgery[0];
            return;
    }
    if ((size > '2' && size < '4') || (size <= '2' && depth >'1')) {
        if (dist >= '2') {
            form2.style.display = "block";
            let x = document.querySelector('input[name=biopsy]:checked');
        if (x) {
            x.checked = false;
        }
            return;
        } else {
            conclusion.style.display = "inline-grid";
            content.innerHTML += surgery[3];
            form4.style.display = "block";
            let x = document.querySelector('input[name=damage]:checked');
        if (x) {
            x.checked = false;
        }
            return;
        }
    }
    if (size >= 4) {
        conclusion.style.display = "inline-grid";
        content.innerHTML += surgery[4];
        form4.style.display = "block";
        let x = document.querySelector('input[name=damage]:checked');
        if (x) {
            x.checked = false;
        }
        return;
    }
}
function biopsy(event) {
    event.preventDefault();
    var biopsy = document.getElementById('biopsy-y').checked;
    form3.style.display = "none";
    form4.style.display = "none";
    if (biopsy == true) {
        conclusion.style.display = "inline-grid";
        content.innerHTML = surgery[1];
        form3.style.display = "block";
        let x = document.querySelector('input[name=meta]:checked');
        if (x) {
            x.checked = false;
        }
        return;
    } else {
        conclusion.style.display = "inline-grid";
        content.innerHTML = surgery[2];
        form4.style.display = "block";
        let x = document.querySelector('input[name=damage]:checked');
        if (x) {
            x.checked = false;
        }
        return;
    }
}
function meta(event) {
    event.preventDefault();
    var meta = document.getElementById('meta-y').checked;
    if (meta == true) {
        conclusion.style.display = "inline-grid";
        content.innerHTML = surgery[4];
        return;
    } else {
        conclusion.style.display = "inline-grid";
        content.innerHTML = surgery[6];
        return;
    }
}
function damage(event) {    
    event.preventDefault();
    var damage = document.getElementById('damage-y').checked;
    if (damage == true) {
        conclusion.style.display = "inline-grid";
        content.innerHTML = surgery[4];
        return;
    } else {
        conclusion.style.display = "inline-grid";
        content.innerHTML = surgery[6];
        return;
    }
}
form1.addEventListener('submit', submitForm);
form2.addEventListener('submit', biopsy);
form3.addEventListener('submit', meta);
form4.addEventListener('submit', damage);