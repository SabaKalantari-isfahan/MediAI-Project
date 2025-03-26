// <-------------------------------------------Navbar------------------------------------------->
$(".dropdownMenuButton").hover(function(){
   $(".dropdown-menu").slideDown();
   $(".nav-down-icon").removeClass("bi-caret-down-fill").addClass("bi-caret-up-fill");

});
$(window).click(function(event) {
   if (!$(event.target).closest('.dropdownMenuButton').length) {
       $(".dropdown-menu").slideUp();
       $(".nav-down-icon").removeClass("bi-caret-up-fill").addClass("bi-caret-down-fill");

   }
});
// <============================================================================================>


   
// <-------------------------------------------Home-Page---------------------------------------->

function bordar(){
    let triangle=document.getElementsByClassName("triangle-tab")[0].classList.add("d-none")
    let bordar=document.getElementsByClassName("bordar-tab")[0].classList.remove("d-none")
    let jabr=document.getElementsByClassName("jabr-tab")[0].classList.add("d-none")
}
function triangle(){
    let triangle=document.getElementsByClassName("triangle-tab")[0].classList.remove("d-none")
    let bordar=document.getElementsByClassName("bordar-tab")[0].classList.add("d-none")
    let jabr=document.getElementsByClassName("jabr-tab")[0].classList.add("d-none")
}
function jabr(){
    let triangle=document.getElementsByClassName("triangle-tab")[0].classList.add("d-none")
    let bordar=document.getElementsByClassName("bordar-tab")[0].classList.add("d-none")
    let jabr=document.getElementsByClassName("jabr-tab")[0].classList.remove("d-none")
}

function scroll_right(){
    let element = document.getElementsByClassName('box-cards-blogs')[0];
    $(".box-cards-blogs").animate({ scrollLeft: element.scrollLeft + 80 }, 500);
}

function scroll_left(){
    let element = document.getElementsByClassName('box-cards-blogs')[0];
    $(".box-cards-blogs").animate({ scrollLeft: element.scrollLeft - 80 }, 500);
}

$(document).ready(
    function(){
       $(".answer-q-home").slideUp()
    }
 )
 $(".box-q-home").click(
    function(){
       $(this).find(".answer-q-home").slideToggle()
       $(this).find(".q-home-icon").toggleClass("bi-caret-down-fill bi-caret-up-fill")
 
    }
 )

const symbols = ['+', '-', '\u00D7', '\u00F7', '\u221A', '\u03C0', 'e', 'x', 'y'];
function createMathSymbol() {
    const symbol = document.createElement('div');
    symbol.classList.add('math-symbol');
    symbol.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    symbol.style.left = `${Math.random() * 80 + 10}%`;
    symbol.style.top = '50%';
    document.getElementById('math-symbols').appendChild(symbol);
    setTimeout(() => symbol.remove(), 3000);
}
setInterval(createMathSymbol, 1000);

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#type-text", {
        strings: ["مزداهیک", "ریاضیات و ریاضیدانان در یک قاب!", "به دنیای دانش خوش آمدید!"],
        typeSpeed: 100, // سرعت تایپ
        backSpeed: 100, // سرعت پاک کردن
        loop: true // تکرار بی‌نهایت
    });
});

// گرفتن عنصر پیام خوش‌آمدگویی
document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessage = document.getElementById('welcome-message');

    // نمایش پیام خوش‌آمدگویی بعد از 1 ثانیه
    setTimeout(() => {
        welcomeMessage.classList.add('show-welcome-message');  // اضافه کردن کلاس برای نمایش پیام
    }, 1000);  // بعد از 1 ثانیه پیام از سمت راست وارد می‌شود

    // مخفی کردن پیام بعد از 5 ثانیه
    setTimeout(() => {
        welcomeMessage.classList.remove('show-welcome-message');  // حذف کلاس برای مخفی کردن پیام
    }, 6000);  // بعد از 6 ثانیه پیام ناپدید می‌شود
});

// <============================================================================================>



// <-------------------------------------------Darsyar-Page--------------------------------------->
function moveBox() {
    const x = parseInt(document.getElementById('xCoord').value);
    const y = parseInt(document.getElementById('yCoord').value);
    const box = document.getElementById('box');
    const playground = document.getElementById('playground');

    // تنظیم موقعیت با توجه به مقادیر x و y
    const playgroundWidth = playground.offsetWidth;
    const playgroundHeight = playground.offsetHeight;

    // محاسبه موقعیت جدید برای جعبه بر اساس مختصات وارد شده
    const newX = ((x + 200) / 400) * playgroundWidth;
    const newY = ((-y + 200) / 400) * playgroundHeight;

    // اعمال موقعیت جدید برای جعبه
    box.style.left = `${newX}px`;
    box.style.top = `${newY}px`;
}

function calculateAngles() {
    let n = parseInt(document.getElementById("sideCount").value);
    let result = document.getElementById("result");
    // بررسی که تعداد اضلاع باید حداقل 3 باشد
    if (isNaN(n) || n < 3) {
        result.innerHTML = "<span class='error'>تعداد اضلاع باید حداقل 3 باشد و عدد وارد شده معتبر باشد.</span>";
        return;
    }
    // محاسبه مجموع زوایای داخلی
    let internalSum = (n - 2) * 180;
    // محاسبه زاویه داخلی برای هر ضلع (در صورتی که چندضلعی منظم باشد)
    let internalAngle = internalSum / n;
    // محاسبه مجموع زوایای خارجی
    let externalSum = 360;
    // محاسبه زاویه خارجی برای هر ضلع
    let externalAngle = 180 - internalAngle;
    // محاسبه مجموع زوایای داخلی و خارجی
    let totalSum = internalSum + externalSum;

    result.innerHTML = `
        <strong class="mt-3">نتایج محاسبه:</strong><br>
        برای یک چندضلعی با ${n} ضلع: <br><br>
        - مجموع زوایای داخلی: <span>${internalSum} درجه</span><br>
        - مجموع زوایای خارجی: <span>${externalSum} درجه</span><br>
        - زاویه داخلی برای هر ضلع: <span>${internalAngle.toFixed(2)} درجه</span><br>
        - زاویه خارجی برای هر ضلع: <span>${externalAngle.toFixed(2)} درجه</span><br>
        - <strong>مجموع زوایای داخلی و خارجی:</strong> <span>${totalSum} درجه</span><br>
    `;
}
$(document).ready(function() {
    $("#checkButton").click(function() {
        let num = parseInt($("#numberInput").val());
        let result = $("#result-num");
        
        if (isNaN(num)) {
            result.text("لطفاً یک عدد معتبر وارد کنید");
            return;
        }
        
        if (num === 1) {
            result.text("عدد 1 نه اول است و نه مرکب");
            return;
        }
        
        let isPrime = num > 1 && [...Array(num - 2).keys()].map(i => i + 2).every(i => num % i);
        result.text(isPrime ? "عدد اول است" : "عدد مرکب است");
    });
});

function findVatar() {
    // گرفتن مقادیر از ورودی‌ها
    var side1 = parseFloat(document.getElementById("inp-vatar1").value);
    var side2 = parseFloat(document.getElementById("inp-vatar2").value);

    // محاسبه وتر با استفاده از فرمول فیثاغورس
    var vatar = Math.sqrt(side1 * side1 + side2 * side2);

    // نمایش نتیجه
    document.getElementById("result-vatar").innerText = "طول وتر: " + vatar.toFixed(2);
}

// <============================================================================================>



// <-------------------------------------------About-Page--------------------------------------->
function skill(){
   let skill=document.getElementsByClassName("skill")[0].classList.remove("d-none")
   let project=document.getElementsByClassName("project")[0].classList.add("d-none")
   let portfolio=document.getElementsByClassName("portfolio")[0].classList.add("d-none")
   var progress=0;
   for( var bar=0; bar<=6; bar++){
      let bars=document.getElementsByClassName("progress-bar")[bar]
      let barsnumber=parseInt(bars.innerText)
      var time =setInterval(() =>{
          if(progress < barsnumber){
              progress++;
              bars.style.width=progress+"%";
          }
      })
 }    
clearInterval(time);
}
function project(){
  let skill=document.getElementsByClassName("skill")[0].classList.add("d-none")
  let project=document.getElementsByClassName("project")[0].classList.remove("d-none")
  let portfolio=document.getElementsByClassName("portfolio")[0].classList.add("d-none")
} 
function portfolio(){
  let project=document.getElementsByClassName("project")[0].classList.add("d-none")
  let skill=document.getElementsByClassName("skill")[0].classList.add("d-none")
  let portfolio=document.getElementsByClassName("portfolio")[0].classList.remove("d-none")
}
// <============================================================================================>



// <-------------------------------------------Question-Bank------------------------------------>
function toggleDropdown() {
    let dropdown = document.querySelector('.dropdown-Questino');
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function filterQuestions(type) {
    document.getElementById('selected-filter').innerText = type === "all" ? "همه سطوح" :
        type === "easy" ? "آسان" : type === "hard" ? "سخت" : "تیمز";
    
    let questions = document.querySelectorAll('.box-question-timz');
    questions.forEach(q => {
        q.style.display = type === 'all' || q.classList.contains(type) ? "block" : "none";
    });

    document.querySelector('.dropdown-Questino').style.display = "none";
}

function toggleAnswer(element) {
    let answer = element.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
}
// <============================================================================================>


// <-------------------------------------------Calculator-Page------------------------------------>
document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".calculator-display");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.textContent;
            if (value === "C") {
                currentInput = "";
            } else if (value === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                } catch {
                    currentInput = "Error";
                }
            } else {
                currentInput += value;
            }
            display.textContent = currentInput || "0";
        });
    });
});
// <============================================================================================>



// <-------------------------------------------Test-Page------------------------------------>
const questions = [
    { question: "خوارزمی با تهیه جداول زیجی چه تأثیری در علم نجوم داشت؟", correctAnswer: "توسعه محاسبات نجومی" },
    { question: "اولین شخصی که به طور رسمی به عنوان یکی از پایه‌گذاران ریاضیات شناخته می‌شود، ...... است.", correctAnswer: "فیثاغورث" },
    { question: "ابوریحان بیرونی در کدام سده‌ها زندگی می‌کرد؟", correctAnswer: "سده‌های چهارم و پنجم" },
    { question: "توان در ریاضیات به چه معناست؟", correctAnswer: "ضرب تکراری یک عدد در خودش" },
    { question: "کتاب مهم خوارزمی در زمینه ریاضیات چیست؟", correctAnswer: "المختصر فی حساب الجبر و المقابله" },
    { question: "رابطه فیثاغورس یکی از معروف‌ترین قضایای هندسه است که در مثلث‌های ...... به کار می‌رود.", correctAnswer: "قائم‌الزاویه" },
    { question: "حکیم عمر خیام نیشابوری در چه زمینه‌هایی مشهور است؟", correctAnswer: "شعر، ریاضیات و نجوم" },
    { question: "فیثاغورس در کدام دوره زمانی زندگی می‌کرد؟", correctAnswer: "حدود 570 تا 495 قبل از میلاد" },
    { question: "مفهوم الگوریتم که اساس محاسبات رایانه‌ای امروزی است توسط چه کسی معرفی شده است؟", correctAnswer: "خوارزمی" },
    { question: "پدر علم جبر چه کسی است؟", correctAnswer: "خوارزمی" }
];

let isSubmitted = false;
let timeLeft = 120;
const timerElement = document.getElementById("timer");
let timerInterval;

function countdown() {
    if (timeLeft === 0) {
        document.querySelector(".text-timer").classList.remove("d-none");
        calculateScore();
        disableInputs();
        clearInterval(timerInterval);
    } else {
        timerElement.innerText = "تایمر : " +  timeLeft;
        timeLeft--;
    }
}

function disableInputs() {
    const inputs = document.querySelectorAll("input[type='radio']");
    inputs.forEach(input => {
        input.disabled = true;
    });
}

function calculateScore() {
    if (isSubmitted) {
        return;
    }

    let score = 0;

    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
            score++;
        }
    });

    TextAboutScore(score);
    document.getElementById("score").innerText = "نمره شما : " + score;
    isSubmitted = true;
    disableInputs();
    document.getElementById("submitBtn").disabled = true; // دکمه را غیرفعال کن
    clearInterval(timerInterval); // تایمر را متوقف کن
}

function TextAboutScore(score) {
    if (score >= 8) {
        document.querySelector(".text-timer-good").classList.remove("d-none");
    } 
    else if (score >= 5 && score < 8) {
        document.querySelector(".text-timer-not-bad").classList.remove("d-none");
    } 
    else if (score > 0 && score < 5) {
        document.querySelector(".text-timer-bad").classList.remove("d-none");
    } 
    else if (score === 0) {
        document.querySelector(".text-timer-zero").classList.remove("d-none");
    }
}    

window.onload = () => {
    timerInterval = setInterval(countdown, 1000); // شروع تایمر وقتی صفحه بارگذاری می‌شود
};
// <============================================================================================>

// <-------------------------------------------Darsyar-Page------------------------------------>
$(document).ready(function() {
    // وقتی دکمه کلیک می‌شود، مودال مربوطه را نمایش بده
    $('.btn-card-math-eight').click(function() {
      var target = $(this).data('target');
      $('#' + target).css('display', 'block');
    });

    // وقتی کاربر روی "x" کلیک می‌کند، مودال را پنهان کن
    $('.close').click(function() {
      $(this).closest('.modal').css('display', 'none');
    });

    // وقتی کاربر در جایی بیرون از مودال کلیک می‌کند، مودال را پنهان کن
    $(window).click(function(event) {
      if ($(event.target).hasClass('modal')) {
        $(event.target).css('display', 'none');
      }
    });
});    
// <============================================================================================>