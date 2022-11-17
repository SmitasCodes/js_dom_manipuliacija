// Global kintamieji, skirti gauti input reiksmes
// const subject = document.querySelector('#subject').value;
// const priority = document.querySelector('#priority').value;
// const due = document.querySelector('#due').value;
// const status = document.querySelector('#status').value;
// const percent = document.querySelector('#percent').value;


function pagrindine() {
    let spausdinimoFunkcija = false;
    // Funkcija kuri sustabdo forma nuo atsinaujimo paspaudus submit
    event.preventDefault();
    // Reikalingi kintamieji su html elementais
    const tbody = document.querySelector('tbody');
    // Elementai kurie bus sukurti
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    // Klases kurios yra pridedamos prie elementu
    tr.classList.add("row");
    // Gaunamos input vertes
    const subject = document.querySelector('#subject');
    const priority = document.querySelector('#priority');
    const due = document.querySelector('#due');
    const status = document.querySelector('#status');
    const percent = document.querySelector('#percent');
    // Input objektas
    arr = [{ subject: subject.value },
    { priority: priority.value },
    { due: due.value },
    { status: status.value },
    { percent: percent.value }];
    // Ciklas kuris tikrina ar forma uzpildyta
    for (let key in arr) {
        for (let key2 in arr[key]) {
            if (arr[key][key2].length == 0) {
                alert('Prasome uzpildyti forma pilnai');
                return;
            } else if (spausdinimoFunkcija != true) {
                spausdinimas();
                spausdinimoFunkcija = true;
            }
        }

    }
    // Funkcija kuri atspausdins table eilute su reikiamais elementais
    function spausdinimas() {
        tbody.appendChild(tr);
        console.log(key2)
    }
}


