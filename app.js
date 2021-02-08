// Set the date we're counting down to
var countDownDate = new Date("Mar 20, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML =
    days + "Days " + hours + "Hours " + minutes + "Min " + seconds + "Sec ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

var profiles = {};
profiles["UNGA-DISEC"] = [
  "Choose...",
  "Afghanistan",
  "Australia",
  "Austria",
  "Bahrain",
  "Bangladesh",
  "Belgium",
  "Brazil",
  "Bulgaria",
  "Canada",
  "Central African Republic",
  "Chile",
  "China",
  "Colombia",
  "Czech Republic",
  "Denmark",
  "Egypt",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Islamic Republic of Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Kenya",
  "Democratic People's Republic of Korea",
  "Kuwait",
  "Lebanon",
  "Libya",
  "Malaysia",
  "Maldives",
  "Mexico",
  "Myanmar",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Russian Federation",
  "Saudi Arabia",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Sweden",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
];
profiles["UNHRC"] = [
  "Choose..",
  "Argentina",
  "Armenia",
  "Austria",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Bolivia",
  "Brazil",
  "Bulgaria",
  "Burkina Faso",
  "Cameroon",
  "China",
  "Côte d'Ivoire",
  "Cuba",
  "Czech Republic",
  "Denmark",
  "Eritrea",
  "Fiji",
  "France",
  "Gabon",
  "Germany",
  "India",
  "Indonesia",
  "Italy",
  "Japan",
  "Libya",
  "Malawi",
  "Marshall Islands",
  "Mauritania",
  "Mexico",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Pakistan",
  "Philippines",
  "Poland",
  "Republic of Korea",
  "Russian Federation",
  "Senegal",
  "Somalia",
  "Sudan",
  "Togo",
  "Ukraine",
  "United Kingdom ",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Australia (O)",
  "Chile (O)",
  "Egypt (O)",
  "Hungary (O)",
  "Iceland (O)",
  "Nigeria (O)",
  "Peru (O)",
  "Qatar (O)",
  "Saudi Arabia (O)",
  "Slovakia (O)",
  "South Africa (O)",
  "Spain (O)",
  "United States of America (O)",
];

profiles["WHA"] = [
  "Choose..",
  "Afghanistan",
  "Argentina",
  "Australia",
  "Austria",
  "Bangladesh",
  "Belgium",
  "Botswana",
  "Brazil",
  "Burkina Faso",
  "Canada",
  "China",
  "Colombia",
  "Denmark",
  "Finland",
  "France",
  "Ghana",
  "Grenada",
  "Guinea-Bissau",
  "Guyana",
  "Iceland",
  "India",
  "Iran",
  "Iraq",
  "Ireland",
  "Italy",
  "Japan",
  "Kenya",
  "Kuwait",
  "Lebanon",
  "Luxembourg",
  "Madagascar",
  "Malaysia",
  "Mauritius",
  "Mexico",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Paraguay",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Russia",
  "Singapore",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Tajikistan",
  "Tonga",
  "Tunisia",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
];

profiles["CTC"] = [
  "Choose..",
  "China",
  "Estonia",
  "France",
  "India",
  "Ireland",
  "Kenya",
  "Mexico",
  "Niger",
  "Norway",
  "Russian Federation",
  "Saint Vincent and the Grenadines",
  "Tunisia",
  "United Kingdom",
  "United States",
  "Vietnam",
];

profiles["AIPPM"] = [
  "Choose..",
  "Narendra Modi",
  "Amit Shah",
  "Rajnath Singh",
  "Nitin Jairam Gadkari",
  "Suresh Prabhu",
  "Smriti Irani",
  "Uma Bharati",
  "Maneka Sanjay Gandhi",
  "Ravi Shankar Prasad",
  "Nirmala Sitharaman",
  "Sambit Parta",
  "Meenakshi Lekhi",
  "Shahnawaz Hussain",
  "Jamyang Tsering",
  "Nupur Sharma",
  "Kirti Azad",
  "Yogi Adityanath",
  "Subramanian Swamy",
  "Sadhvi Pragya",
  "Sonia Gandhi",
  "Rahul Gandhi",
  "Manmohan Singh",
  "A. K. Antony",
  "Sharad Pawar",
  "Supriya Sule",
  "Jyotisraditya Scindia",
  "P. Chidambaram",
  "Kapil Sibal",
  "Anand Sharma",
  "Jairam Ramesh",
  "Harish Rawat",
  "Ghulam Nabi Azad",
  "Shashi Tharoor",
  "Asaduddin Owaisi",
  "Y. S. Chowdary",
  "Sharad Yadav",
  "Akhilesh Yadav",
  "Mehbooba Mufti",
  "Arvind Kejriwal",
  "Manish Sisodia",
  "Bhagwant Mann",
  "Atishi Marlena",
  "Sanjay Singh",
  "Raghav Chadha",
  "Babu Lal Marandi",
  "C.F. Thomas",
  "Tejaswi Yadav",
  "Mamta Banerjee",
  "Derek O Brien",
  "Mayawati",
  "Naveen Patnaik",
  "Neiphiu Rio",
  "Nitish Kumar",
  "Omar Abdullah",
  "Sitaram Yechury",
  "Prakash Karat",
  "Raj Thackeray",
  "Shibu Soren",
  "Sukhbir Singh Badal",
  "Harsimrat Kaur Badal",
  "Suvaram Sudhakar Reddy",
  "Kanhaiya Kumar",
  "T.J. Chandrachoodan",
  "Uddhav Thackeray",
  "Y.S. Jaganmohan Reddy",
  "S R Vijay kumar",
  "P. Venugopal",
  "T.G Venkatesh",
  "Conrad Sangma",
  "Sanjay Raut",
  "Aditya Thackeray",
];

function ChangecatList1() {
  console.log("OKAY");
  var catList = document.getElementById("committee1");
  var actList = document.getElementById("portfolio1");
  var selCat = catList.options[catList.selectedIndex].value;
  while (actList.options.length) {
    actList.remove(0);
  }
  var cats = profiles[selCat];
  if (cats) {
    var i;
    for (i = 0; i < cats.length; i++) {
      var cat = new Option(cats[i], i);
      actList.options.add(cat);
    }
  }
}

function ChangecatList2() {
  console.log("OKAY");
  var catList = document.getElementById("committee2");
  var actList = document.getElementById("portfolio2");
  var selCat = catList.options[catList.selectedIndex].value;
  while (actList.options.length) {
    actList.remove(0);
  }
  var cats = profiles[selCat];
  if (cats) {
    var i;
    for (i = 0; i < cats.length; i++) {
      var cat = new Option(cats[i], i);
      actList.options.add(cat);
    }
  }
}

function ChangecatList3() {
  console.log("OKAY");
  var catList = document.getElementById("committee3");
  var actList = document.getElementById("portfolio3");
  var selCat = catList.options[catList.selectedIndex].value;
  while (actList.options.length) {
    actList.remove(0);
  }
  var cats = profiles[selCat];
  if (cats) {
    var i;
    for (i = 0; i < cats.length; i++) {
      var cat = new Option(cats[i], i);
      actList.options.add(cat);
    }
  }
}
