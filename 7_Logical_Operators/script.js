document.addEventListener('DOMContentLoaded', function() {
    // Update headings and list items
    document.querySelector('.h1').innerHTML = 'Logical Operators';
    document.querySelector('.ol1').innerHTML = '&& (And)';
    document.querySelector('.ol2').innerHTML = '|| (Or)';
    document.querySelector('.ol3').innerHTML = '! (Not)';
debugger
    // Get results container
    let results = document.getElementById('results');
    let results1 = document.getElementById('results1');

    // And Operators
    document.getElementById('h11').innerHTML = "And Operators";
    let ans;
    
    ans = (3 > 2) && (6 < 9);
    console.log(ans);
    results1.innerHTML += `<h3>Example: (3 > 2) && (6 < 9)</h3>`;
    results1.innerHTML += `${ans}<br>`;

    ans = (34 > 32) && (90 < 34);
    console.log(ans);
    results1.innerHTML += `<h3>Example: (34 > 32) && (90 < 34)</h3>`;
    results1.innerHTML += `${ans}<br>`;

    ans = (45 > 46) && (68 > 5);
    console.log(ans);
    results1.innerHTML += `<h3>Example: (45 > 46) && (68 > 5)</h3>`;
    results1.innerHTML += `${ans}<br>`;

    ans = (34 > 35) && (45 > 78);
    console.log(ans);
    results1.innerHTML += `<h3>Example: (34 > 35) && (45 > 78)</h3>`;
    results1.innerHTML += `${ans}<br>`;

    // Or Operators
    document.getElementById('h111').innerHTML = "Or Operators";
    ans = (3 > 2) || (6 < 9);
    console.log(ans);
    results.innerHTML += `<h3>Example: (3 > 2) || (6 < 9)</h3>`;
    results.innerHTML += `${ans}<br>`;

    ans = (34 > 32) || (90 < 34);
    console.log(ans);
    results.innerHTML += `<h3>Example: (34 > 32) || (90 < 34)</h3>`;
    results.innerHTML += `${ans}<br>`;

    ans = (45 > 46) || (68 > 5);
    console.log(ans);
    results.innerHTML += `<h3>Example: (45 > 46) || (68 > 5)</h3>`;
    results.innerHTML += `${ans}<br>`;

    ans = (34 > 35) || (45 > 78);
    console.log(ans);
    results.innerHTML += `<h3>Example: (34 > 35) || (45 > 78)</h3>`;
    results.innerHTML += `${ans}<br>`;

    // Not Operator
    document.getElementById('h12').innerHTML = "Not Operator";
    ans = !(3 > 2);
    console.log(ans);
    results.innerHTML += `<h3>Example: !(3 > 2)</h3>`;
    results.innerHTML += `${ans}<br>`;

    ans = !(34 < 32);
    console.log(ans);
    results.innerHTML += `<h3>Example: !(34 < 32)</h3>`;
    results.innerHTML += `${ans}<br>`;
});
