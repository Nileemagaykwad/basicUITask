function Function01() {
  var x = document.getElementById("01");
  if (x.className === "col-6 classBlack") {
    x.className = "col-6 class01";
  } else {
    x.className = "col-6 classBlack";
  }
}
function Function02() {
  var x = document.getElementById("02");
    if (x.className === "col-6 classBlack") {
    x.className = "col-6 class02";
  } else {
    x.className = "col-6 classBlack";
  }
}
function Function11() {
  var x = document.getElementById("11");
  if (x.className === "col-4 classBlack") {
    x.className = "col-4 class11";
  } else {
    x.className = "col-4 classBlack";
  }
}
function Function12() {
  var x = document.getElementById("12");
  var colorObj = {
    'captainAmarica': 'blue',
    'ironMan': 'red',
    'blackWidow': 'gray',
    'blackPanther': 'BlueViolet',
    'drStrange': 'yellow',
    'groot': 'brown',
    'thanos': 'purple'
  }
  var keys = Object.keys(colorObj)
  rColor = colorObj[keys[ keys.length * Math.random() << 0]];
  var first = document.getElementById("11");
  var second = document.getElementById("21");
  var third = document.getElementById("22");
  if ((x.className === "col-4 class12") && (x.style.backgroundColor === 'purple')) {
    first.style.backgroundColor = "white";
    first.style.animation = "fadeMe 5s"
    second.style.backgroundColor = "white";
    second.style.animation = "fadeMe 5s"
    third.style.backgroundColor = "white";
    third.style.animation = "fadeMe 5s"
    x.style.backgroundColor = rColor;
  } else if((x.className === "col-4 class12") &&(x.style.backgroundColor === 'red')) {
    first.style.backgroundColor = 'yellow',
    first.style.animation = "fadeMeY 5s"
    second.style.backgroundColor = 'BlueViolet',
    first.style.animation = "fadeMeV 5s"
    third.style.backgroundColor = 'brown'
    first.style.animation = "fadeMeB 5s"
    x.style.backgroundColor = rColor;
  } else if(x.className === "col-4 class12") {
    x.style.backgroundColor = rColor;
  }  else {
    x.className = "col-4 classRandom";
  }
}
function Function13() {
  var x = document.getElementById("13");
    if (x.className === "col-4 classBlack") {
    x.className = "col-4 class13";
  } else {
    x.className = "col-4 classBlack";
  }
}
function Function21() {
  var x = document.getElementById("21");
    if (x.className === "col-6 classBlack") {
    x.className = "col-6 class21";
  } else {
    x.className = "col-6 classBlack";
  }
}
function Function22() {
  var x = document.getElementById("22");
    if (x.className === "col-6 classBlack") {
    x.className = "col-6 class22";
  } else {
    x.className = "col-6 classBlack";
  }
}

function randomColor() {
  var colorObj = {
    'captainAmarica': 'blue',
    'ironMan': 'red',
    'blackWidow': 'gray',
    'blackPanther': 'BlueViolet',
    'drStrange': 'yellow',
    'groot': 'brown',
    'thanos': 'purple'
  }
    var keys = Object.keys(colorObj)
    rColor = colorObj[keys[ keys.length * Math.random() << 0]];
    console.log(rColor, '----------------------------');
    return rColor
};
