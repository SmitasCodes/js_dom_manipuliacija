function pagrindine() {
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
    // gaunama data
    let today = new Date();
    let dateTime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();;
    // kintamieji 
    let inputSkaicius = 0;
    // Objektas atspaudinimui
    arr = [{ p: "p" },
    { subject: subject.value },
    { priority: priority.value },
    { due: due.value },
    { status: status.value },
    { percent: percent.value },
    { modified: dateTime }];

    // Ciklas kuris tikrina ar forma uzpildyta
    for (let key in arr) {
        for (let key2 in arr[key]) {
            if (arr[key][key2].length == 0 || arr[key][key2] == "disabled") {
                alert('Prasome uzpildyti forma pilnai');
                istrinimas();
                return;
            } else if (inputSkaicius != 6) {
                inputSkaicius++;
            } else {
                for (let key in arr) {
                    for (let key2 in arr[key]) {
                        spausdinimas(key2, arr[key][key2]);
                        arr[key][key2] = "";
                    }
                }
            }
        }
    }

    // Funkcija kuri atspausdins duomenis
    function spausdinimas(subjektas, verte) {
        tbody.appendChild(tr);
        tr.classList.add('row')
        let td = document.createElement('td');
        td.classList.add(subjektas + '-table');
        td.innerHTML = verte;
        if (subjektas == "percent") {
            let container = document.createElement('div');
            container.classList.add("container");
            let bar = document.createElement('div');
            bar.classList.add('percent-bar');
            container.appendChild(bar);
            td.appendChild(container);
            switch (verte) {
                case '0':
                    bar.classList.add('percent0');
                    break;
                case '25':
                    bar.classList.add('percent25');
                    break;
                case '50':
                    bar.classList.add('percent50');
                    break;
                case '75':
                    bar.classList.add('percent75');
                    break;
                case '100':
                    bar.classList.add('percent100');
                    break;
            }
        } else if (subjektas == "modified") {
            let img = document.createElement("img");
            img.src = "./icons/close.png";
            img.classList.add("close");
            img.onclick = function () {
                tr.innerHTML = "";
            };
            td.appendChild(img)
        }
        tr.appendChild(td);
    }

    function istrinimas() {
        for(let key in arr){
            for(let key2 in arr[key]){
                arr[key][key2] = "";
            }
        }
    }

}

// { p: "p" },