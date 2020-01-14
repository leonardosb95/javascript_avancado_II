var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];


console.log(campos);
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();
    var tr = document.createElement('tr');

    campos.forEach(function (campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tbody.appendChild(tr);
    tr.appendChild(tdVolume);


    campos[0].value='';
    campos[1].value=1;
    camps[2].value=0;
    campos[0].focus();

});
