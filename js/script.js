/* ========================================= Typing Animation ========================================== */

var typed = new Typed('.typing', {
    strings: ["", "Web Developer", "Competitive Programmer", "STEM Enthusiast", "Calisthenics Athlete","Problem Solver"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/* ========================================= Aside ========================================== */

const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;
    for(let i = 0; i < totalNavList; i++)
    {
        const a = navList[i].querySelector('a');
        a.addEventListener('click', function(){
            removeBackSectionClass();
            for(let j = 0; j < totalNavList; j++)
            {
                if(navList[j].querySelector('a').classList.contains('active'))
                {
                    addBackSectionClass(j);
                    // allSection[j].classList.add('back-section');
                }
                navList[j].querySelector('a').classList.remove('active');
            }
            this.classList.add('active');
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSectionClass()
    {
        for(let i = 0; i < totalSection; i++)
        {
            allSection[i].classList.remove('back-section');
        }
    }
    function addBackSectionClass(num)
    {
        allSection[num].classList.add('back-section');
    }
    function showSection(element)
    {
        for(let i = 0; i < totalSection; i++)
        {
            allSection[i].classList.remove('active');
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
    }
    function updateNav(element)
    {
        for(let i = 0; i < totalNavList; i++)
        {
            navList[i].querySelector('a').classList.remove('active');
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector('a').getAttribute("href").split("#")[1])
            {
                navList[i].querySelector('a').classList.add('active');
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSectionClass();
        addBackSectionClass(sectionIndex);
    });
    const navTogglerBtn = document.querySelector('.nav-toggler'),
        aside = document.querySelector('.aside');
        navTogglerBtn.addEventListener('click', () => {
            asideSectionTogglerBtn();
        });
        function asideSectionTogglerBtn()
        {
            aside.classList.toggle('open');
            navTogglerBtn.classList.toggle('open');
            for(let i = 0; i < totalSection; i++)
            {
                allSection[i].classList.toggle('open');
            }
        }
// Storing user data in form efficiently
const formFields = ['user-name', 'user-email', 'subject', 'user-message'];

formFields.forEach(field => {
  const element = document.getElementById(field);
  const localStorageKey = field.replace('user-', 'user').replace('-', '');
  element.value = localStorage.getItem(localStorageKey) || '';
  element.onkeyup = () => {
    localStorage.setItem(localStorageKey, element.value);
  };
});

// Clear Form Data After Clicking the submit button and collect data
let submit = document.querySelector(".contact .contact-form .btn");

submit.onclick = function() {
  let formData = {};
  formFields.forEach(field => {
    const element = document.getElementById(field);
    const localStorageKey = field.replace('user-', 'user').replace('-', '');
    formData[localStorageKey] = element.value;
    element.value = '';
    localStorage.removeItem(localStorageKey);
  });
  console.log(formData); // You can send this data to your server here
};