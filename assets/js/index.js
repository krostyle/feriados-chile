$(document).ready(function() {
    const url = 'https://www.feriadosapp.com/api/holidays.json'
    const table = $('.holidays');
    $.ajax({
        type: 'GET',
        url,
        dataType: 'json',
        success: function(datos) {
            const { data } = datos;
            data.forEach(element => {
                const law = element.law.join(',')
                table.append( /* HTML*/ `
                <tr>
                    <th scope="row">${element.date}</th>
                    <td>${element.title}</td>
                    <td>${element.extra}</td>
                    <td>${law}</td>
                 </tr>
                `)
            });
        },
        error: function(data) {},
        async: true
    })

});