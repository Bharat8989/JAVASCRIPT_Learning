document.getElementsByClassName('h1')[0].innerHTML = 'Logical Operators';
document.getElementsByClassName('ol1')[0].innerHTML = '&& (And)';
document.getElementsByClassName('ol2')[0].innerHTML = '|| (Or)';
document.getElementsByClassName('ol3')[0].innerHTML = '! (Not)';

// And operators 
document.getElementById('h11').innerHTML = "And Operators";
let ans;
ans = (3 > 2) && (6 < 9);
console.log(ans);
document.write("\n" + ans);
let results = document.getElementById('results');
results.innerHTML += "<h2>And Operators</h2>";

ans = (3 > 2) && (6 < 9);
console.log(ans);
results.innerHTML += ans + "<br>";

ans = (34 > 32) && (90 < 34);
console.log(ans);
document.write("<br>" + ans);

ans = (45 > 46) && (68 > 5);
console.log(ans);
document.write("<br>" + ans + "<br>");

ans = (34 > 35) && (45 > 78);
console.log(ans);
document.write(ans + "<br>");

// Or Operators
document.getElementById('h111').innerHTML = "Or Operators";
ans = (3 > 2) || (6 < 9);
console.log(ans);
document.write("\n" + ans);

ans = (34 > 32) || (90 < 34);
console.log(ans);
document.write("<br>" + ans);

ans = (45 > 46) || (68 > 5);
console.log(ans);
document.write("<br>" + ans + "<br>");

ans = (34 > 35) || (45 > 78);
console.log(ans);
document.write(ans+ "<br>");

// Not Operators
document.getElementById('h12').innerHTML = "Not Operators";

ans = !(3 > 2);
console.log(ans);
document.write("\n" + ans);

ans = !(34 < 32);
console.log(ans);
document.write("<br>" + ans);
