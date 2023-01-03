var show = document.getElementById("nav-links");
        function showMenu() {
            show.style.right = "0";
        }
        function closeMenu() {
            show.style.right = "-200px";
        }

//delclare player card variables        

var fullCardBoxRob = document.getElementById("fullCardBoxRob");
var fullCardBoxDan = document.getElementById("fullCardBoxDan");
var fullCardBoxBucky = document.getElementById("fullCardBoxBucky");
var fullCardBoxJared = document.getElementById("fullCardBoxJared");
var fullCardBoxJando = document.getElementById("fullCardBoxJando");
var fullCardBoxKelsey = document.getElementById("fullCardBoxKelsey");
var fullCardBoxZach = document.getElementById("fullCardBoxZach");
var fullCardBoxBrook = document.getElementById("fullCardBoxBrook");
var fullCardBoxKyle = document.getElementById("fullCardBoxKyle");
var fullCardBoxDrew = document.getElementById("fullCardBoxDrew");
var fullCardBoxCasey = document.getElementById("fullCardBoxCasey");
var fullCardBoxAdam = document.getElementById("fullCardBoxAdam");
var fullCardBoxRobbie = document.getElementById("fullCardBoxRobbie");
var fullCardBoxBill = document.getElementById("fullCardBoxBill");
var fullCardBoxAnnie = document.getElementById("fullCardBoxAnnie");
var fullCardBoxAlexis = document.getElementById("fullCardBoxAlexis");
var fullCardBoxLorrie = document.getElementById("fullCardBoxLorrie");
var fullCardBoxBaber = document.getElementById("fullCardBoxBaber");

// rob card 
function openFullCardRob() {
    fullCardBoxRob.style.display = "flex";
}
function closeFullCardRob() {
    fullCardBoxRob.style.display = "none";
}
// movement animation
const cardRob = document.querySelector('.card-rob');
const containerRob = document.querySelector('.container-rob');

// moving animation event

containerRob.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardRob.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerRob.addEventListener('mouseenter', (e) => {
    cardRob.style.transition = 'none';
});
containerRob.addEventListener('mouseleave', (e) => {
    cardRob.style.transition = 'all 0.4s ease';
    cardRob.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// dan card
function openFullCardDan() {
    fullCardBoxDan.style.display = "flex";
}
function closeFullCardDan() {
    fullCardBoxDan.style.display = "none";
}
// movement animation
const cardDan = document.querySelector('.card-dan');
const containerDan = document.querySelector('.container-dan');

// moving animation event

containerDan.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardDan.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerDan.addEventListener('mouseenter', (e) => {
    cardDan.style.transition = 'none';
});
containerDan.addEventListener('mouseleave', (e) => {
    cardDan.style.transition = 'all 0.4s ease';
    cardDan.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

///////////// bucky card
function openFullCardBucky() {
    fullCardBoxBucky.style.display = "flex";
}
function closeFullCardBucky() {
    fullCardBoxBucky.style.display = "none";
}
// movement animation
const cardBucky = document.querySelector('.card-bucky');
const containerBucky = document.querySelector('.container-bucky');

// moving animation event

containerBucky.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardBucky.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerBucky.addEventListener('mouseenter', (e) => {
    cardBucky.style.transition = 'none';
});
containerBucky.addEventListener('mouseleave', (e) => {
    cardBucky.style.transition = 'all 0.4s ease';
    cardBucky.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/////////// jared card
function openFullCardJared() {
    fullCardBoxJared.style.display = "flex";
}
function closeFullCardJared() {
    fullCardBoxJared.style.display = "none";
}
// movement animation
const cardJared = document.querySelector('.card-jared');
const containerJared = document.querySelector('.container-jared');

// moving animation event

containerJared.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardJared.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerJared.addEventListener('mouseenter', (e) => {
    cardJared.style.transition = 'none';
});
containerJared.addEventListener('mouseleave', (e) => {
    cardJared.style.transition = 'all 0.4s ease';
    cardJared.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/////////// jando card
function openFullCardJando() {
    fullCardBoxJando.style.display = "flex";
}
function closeFullCardJando() {
    fullCardBoxJando.style.display = "none";
}
// movement animation
const cardJando = document.querySelector('.card-jando');
const containerJando = document.querySelector('.container-jando');

// moving animation event

containerJando.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardJando.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerJando.addEventListener('mouseenter', (e) => {
    cardJando.style.transition = 'none';
});
containerJando.addEventListener('mouseleave', (e) => {
    cardJando.style.transition = 'all 0.4s ease';
    cardJando.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/////////// kelsey card
function openFullCardKelsey() {
    fullCardBoxKelsey.style.display = "flex";
}
function closeFullCardKelsey() {
    fullCardBoxKelsey.style.display = "none";
}
// movement animation
const cardKelsey = document.querySelector('.card-kelsey');
const containerKelsey = document.querySelector('.container-kelsey');

// moving animation event

containerKelsey.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardKelsey.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerKelsey.addEventListener('mouseenter', (e) => {
    cardKelsey.style.transition = 'none';
});
containerKelsey.addEventListener('mouseleave', (e) => {
    cardKelsey.style.transition = 'all 0.4s ease';
    cardKelsey.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/////////// zach card
function openFullCardZach() {
    fullCardBoxZach.style.display = "flex";
}
function closeFullCardZach() {
    fullCardBoxZach.style.display = "none";
}
// movement animation
const cardZach = document.querySelector('.card-zach');
const containerZach = document.querySelector('.container-zach');

// moving animation event

containerZach.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardZach.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerZach.addEventListener('mouseenter', (e) => {
    cardZach.style.transition = 'none';
});
containerZach.addEventListener('mouseleave', (e) => {
    cardZach.style.transition = 'all 0.4s ease';
    cardZach.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/////////// brook card
function openFullCardBrook() {
    fullCardBoxBrook.style.display = "flex";
}
function closeFullCardBrook() {
    fullCardBoxBrook.style.display = "none";
}
// movement animation
const cardBrook = document.querySelector('.card-brook');
const containerBrook = document.querySelector('.container-brook');

// moving animation event

containerBrook.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardBrook.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerBrook.addEventListener('mouseenter', (e) => {
    cardBrook.style.transition = 'none';
});
containerBrook.addEventListener('mouseleave', (e) => {
    cardBrook.style.transition = 'all 0.4s ease';
    cardBrook.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/////////// kyle card
function openFullCardKyle() {
    fullCardBoxKyle.style.display = "flex";
}
function closeFullCardKyle() {
    fullCardBoxKyle.style.display = "none";
}
// movement animation
const cardKyle = document.querySelector('.card-kyle');
const containerKyle = document.querySelector('.container-kyle');

// moving animation event

containerKyle.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardKyle.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerKyle.addEventListener('mouseenter', (e) => {
    cardKyle.style.transition = 'none';
});
containerKyle.addEventListener('mouseleave', (e) => {
    cardKyle.style.transition = 'all 0.4s ease';
    cardKyle.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/////////// drew card
function openFullCardDrew() {
    fullCardBoxDrew.style.display = "flex";
}
function closeFullCardDrew() {
    fullCardBoxDrew.style.display = "none";
}
// movement animation
const cardDrew = document.querySelector('.card-drew');
const containerDrew = document.querySelector('.container-drew');

// moving animation event

containerDrew.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardDrew.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerDrew.addEventListener('mouseenter', (e) => {
    cardDrew.style.transition = 'none';
});
containerDrew.addEventListener('mouseleave', (e) => {
    cardDrew.style.transition = 'all 0.4s ease';
    cardDrew.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/////////// casey card
function openFullCardCasey() {
    fullCardBoxCasey.style.display = "flex";
}
function closeFullCardCasey() {
    fullCardBoxCasey.style.display = "none";
}
// movement animation
const cardCasey = document.querySelector('.card-casey');
const containerCasey = document.querySelector('.container-casey');

// moving animation event

containerCasey.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardCasey.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerCasey.addEventListener('mouseenter', (e) => {
    cardCasey.style.transition = 'none';
});
containerCasey.addEventListener('mouseleave', (e) => {
    cardCasey.style.transition = 'all 0.4s ease';
    cardCasey.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/////////// adam card
function openFullCardAdam() {
    fullCardBoxAdam.style.display = "flex";
}
function closeFullCardAdam() {
    fullCardBoxAdam.style.display = "none";
}
// movement animation
const cardAdam = document.querySelector('.card-adam');
const containerAdam = document.querySelector('.container-adam');

// moving animation event

containerAdam.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardAdam.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerAdam.addEventListener('mouseenter', (e) => {
    cardAdam.style.transition = 'none';
});
containerAdam.addEventListener('mouseleave', (e) => {
    cardAdam.style.transition = 'all 0.4s ease';
    cardAdam.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/////////// robbie card
function openFullCardRobbie() {
    fullCardBoxRobbie.style.display = "flex";
}
function closeFullCardRobbie() {
    fullCardBoxRobbie.style.display = "none";
}
// movement animation
const cardRobbie = document.querySelector('.card-robbie');
const containerRobbie = document.querySelector('.container-robbie');

// moving animation event

containerRobbie.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardRobbie.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerRobbie.addEventListener('mouseenter', (e) => {
    cardRobbie.style.transition = 'none';
});
containerRobbie.addEventListener('mouseleave', (e) => {
    cardRobbie.style.transition = 'all 0.4s ease';
    cardRobbie.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/////////// bill card
function openFullCardBill() {
    fullCardBoxBill.style.display = "flex";
}
function closeFullCardBill() {
    fullCardBoxBill.style.display = "none";
}
// movement animation
const cardBill = document.querySelector('.card-bill');
const containerBill = document.querySelector('.container-bill');

// moving animation event

containerBill.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardBill.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerBill.addEventListener('mouseenter', (e) => {
    cardBill.style.transition = 'none';
});
containerBill.addEventListener('mouseleave', (e) => {
    cardBill.style.transition = 'all 0.4s ease';
    cardBill.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/////////// annie card
function openFullCardAnnie() {
    fullCardBoxAnnie.style.display = "flex";
}
function closeFullCardAnnie() {
    fullCardBoxAnnie.style.display = "none";
}
// movement animation
const cardAnnie = document.querySelector('.card-annie');
const containerAnnie = document.querySelector('.container-annie');

// moving animation event

containerAnnie.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardAnnie.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerAnnie.addEventListener('mouseenter', (e) => {
    cardAnnie.style.transition = 'none';
});
containerAnnie.addEventListener('mouseleave', (e) => {
    cardAnnie.style.transition = 'all 0.4s ease';
    cardAnnie.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/////////// alexis card
function openFullCardAlexis() {
    fullCardBoxAlexis.style.display = "flex";
}
function closeFullCardAlexis() {
    fullCardBoxAlexis.style.display = "none";
}
// movement animation
const cardAlexis = document.querySelector('.card-alexis');
const containerAlexis = document.querySelector('.container-alexis');

// moving animation event

containerAlexis.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardAlexis.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerAlexis.addEventListener('mouseenter', (e) => {
    cardAlexis.style.transition = 'none';
});
containerAlexis.addEventListener('mouseleave', (e) => {
    cardAlexis.style.transition = 'all 0.4s ease';
    cardAlexis.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/////////// lorrie card
function openFullCardLorrie() {
    fullCardBoxLorrie.style.display = "flex";
}
function closeFullCardLorrie() {
    fullCardBoxLorrie.style.display = "none";
}
// movement animation
const cardLorrie = document.querySelector('.card-lorrie');
const containerLorrie = document.querySelector('.container-lorrie');

// moving animation event

containerLorrie.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardLorrie.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerLorrie.addEventListener('mouseenter', (e) => {
    cardLorrie.style.transition = 'none';
});
containerLorrie.addEventListener('mouseleave', (e) => {
    cardLorrie.style.transition = 'all 0.4s ease';
    cardLorrie.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/////////// baber card
function openFullCardBaber() {
    fullCardBoxBaber.style.display = "flex";
}
function closeFullCardBaber() {
    fullCardBoxBaber.style.display = "none";
}
// movement animation
const cardBaber = document.querySelector('.card-baber');
const containerBaber = document.querySelector('.container-baber');

// moving animation event

containerBaber.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardBaber.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// pop back pop in

containerBaber.addEventListener('mouseenter', (e) => {
    cardBaber.style.transition = 'none';
});
containerBaber.addEventListener('mouseleave', (e) => {
    cardBaber.style.transition = 'all 0.4s ease';
    cardBaber.style.transform = `rotateY(0deg) rotateX(0deg)`;
});


