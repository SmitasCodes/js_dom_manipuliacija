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
    // gaunama data
    let today = new Date();
    let dateTime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours()+"-"+today.getMinutes()+"-"+today.getSeconds();;
    
    
    // Objektas atspaudinimui
    arr =   [{ p: "p" },
            { subject: subject.value },
            { priority: priority.value },
            { due: due.value },
            { status: status.value },
            { percent: percent.value},
            { modified: dateTime }];

    // Ciklas kuris tikrina ar forma uzpildyta
    for (let key in arr) {
        for (let key2 in arr[key]) {
            if (arr[key][key2].length == 0) {
                alert('Prasome uzpildyti forma pilnai');
                return;
            } else(
                spausdinimas(key2,arr[key][key2])
            )
        }
    }
    // Funkcija kuri atspausdins duomenis
    function spausdinimas(raktas,verte){
        tbody.appendChild(tr);
        tr.classList.add('row')
        let td = document.createElement('td');
        td.classList.add(raktas + '-table');
        td.innerHTML = verte;
        if(raktas=="percent"){
            let container = document.createElement('div');
            container.classList.add("container");
            let bar = document.createElement('div');
            bar.classList.add('percent-bar');
            container.appendChild(bar);
            td.appendChild(container);
            console.log(verte)
            switch (verte){
                case 0:
                    bar.style.cssText = "width: 0;"
                    break;
                case 25:
                    bar.style.cssText = "width: 25%;"
                    break;
                case 50:
                    bar.style.cssText = "width: 50%;"
                    break;
                case 75:
                    bar.style.cssText = "width: 75%;"
                    break;
                case 100:
                    bar.style.cssText = "width: 100%;"
                    break;
            }
        }
        tr.appendChild(td);
    }

    
}





// document.body.appendChild(container)



// let container = document.createElement('div');
//             container.classList.add("container");
//             let bar = document.createElement('div');
//             bar.classList.add('percent-bar');
//             container.appendChild(bar)
//             td.innerHTML = verte;
//             tr.appendChild(td);

