opcoes.style.display = "none"

const cmen = document.getElementById("cmsg");
const dive = document.getElementById("opcoes");

cmen.addEventListener("change", function() {
    if (cmen.checked) {
        dive.style.display = "block"
    } else {
        dive.style.display = "none"
    }
});

const btn = document.getElementById("botao");
const seme = document.getElementById("smsg")

seme.addEventListener("change", function() {
    if (seme.checked) {
        btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", "true");
    }
});

const bot = document.getElementById("botao");
const come = document.getElementById("cmsg")

come.addEventListener("change", function() {
    if (come.checked) {
        bot.removeAttribute("disabled");
    } else {
        bot.setAttribute("disabled", "true");
    }
});

document.getElementById('email').addEventListener('keyup', function(e) {
    var email = document.getElementById('email').value;
    if (email.search('darkpou@666.com') !== -1) {
        alert('MMM is not allowed!');
    }
    if (email.search('XXX') !== -1) {
        alert('XXX is not allowed!');
    }
    email = email.replace(/MMM/g,'');
    email = email.replace(/XXX/g,'');
    document.getElementById('email').value = text;
},false);

var banned = ['darkpou@666.com','XXX'];
document.getElementById('email').addEventListener('keyup', function(e) {
    var email = document.getElementById('email').value;
    for (var x=0;x<banned.length;x++) {
        if (email.search(banned[x]) !== -1) {
            alert(banned[x]+' is not allowed!');
        }
        var regExp = new RegExp(banned[x]);
        email = email.replace(regExp,'BAN');
    }
    document.getElementById('email').value = text;
},false);

document.getElementById("meuSelect").addEventListener("change", function() {
    
    var selectedOption = this.value;

    if (selectedOption) {
      window.location.href = selectedOption;
    }
  });