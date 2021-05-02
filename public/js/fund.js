
function D5000() {
    var prevs = document.getElementById("tamount");
    var prev = prevs.innerHTML;
    console.log(prev);
    var prevint = parseInt(prev);
    var previntnew = prevint;
    var prevstr = toString(previntnew);
    var amount = document.getElementById("tamount")
    amount.innerHTML = "<div style='text-align: center; font-size: 3.5vw; font-weight: 600;' id='tamount'>5000</div>";
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(prevstr));
    ul.appendChild(li);
  }
  function D10000() {
    var amount = document.getElementById("tamount")
    amount.innerHTML = "<div style='text-align: center; font-size: 3.5vw; font-weight: 600;' id='tamount'>Rs. 10000</div>";
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("You donated Rs. 10000"));
    ul.appendChild(li);
  }
  function D500000() {
    var amount = document.getElementById("tamount")
    amount.innerHTML = "<div style='text-align: center; font-size: 3.5vw; font-weight: 600;' id='tamount'>Rs. 500000</div>";
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("  You donated Rs. 500000"));
    ul.appendChild(li);
  }
  function D1000000() {
    var amount = document.getElementById("tamount")
    amount.innerHTML = "<h1 style='text-align: center; font-size: 3.5vw; font-weight: 600;' id='tamount'>Rs. 1000000</h1>";
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("You donated Rs. 1000000"));
    ul.appendChild(li);
  }
  function donatenow () {
    var amount = document.getElementById("tamount")
    var inamount = document.getElementById("amount").value
    amount.innerHTML = "<div style='text-align: center; font-size: 3.5vw; font-weight: 600;' id='tamount'>Rs. " + inamount + "</div>";
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("You donated Rs. " + inamount));
    ul.appendChild(li);
  }