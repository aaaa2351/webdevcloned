const nav_link = document.querySelectorAll(".link");
const nav_links = document.querySelector(".links");
const searchForm = document.querySelector(".searchForm");
const searchinout = searchForm.querySelector("input");
const theme = document.querySelector(".theme");
const theme_btn = document.querySelector(".theme_btn");
const theme_dropdown = theme.querySelector(".dropdown");
const theme_icon = theme_btn.querySelector("i");
const lang = document.querySelectorAll(".lang");

const icon = theme_btn.querySelector("i");
const generalDropdown = document.querySelectorAll(".dropdown");
const droptOPt = document.querySelectorAll(".opt1");
const dark_btn = theme_dropdown.querySelector(".dark");
const light_btn = theme_dropdown.querySelector(".light");
const sys_bt = theme_dropdown.querySelector(".system");
const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");
const webdev = document.querySelectorAll(".webdev");
function checkSys() {
  if (sysDark) {
    document.documentElement.classList.remove("light_theme");
    icon.classList.replace("fa-sun", "fa-moon");
    webdev.forEach((webdv) => {
      webdv.src = "images/web.dev_dark.svg";
    });
  } else {
    document.documentElement.classList.add("light_theme");
    icon.classList.replace("fa-moon", "fa-sun");
    webdev.forEach((webdv) => {
      webdv.src = "images/web.dev.svg";
    });
  }
}

function setTheme(light) {
  if (light) {
    document.documentElement.classList.add("light_theme");
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
    webdev.forEach((webdv) => {
      webdv.src = "images/web.dev.svg";
    });
  } else {
    document.documentElement.classList.remove("light_theme");
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
    webdev.forEach((webdv) => {
      webdv.src = "images/web.dev_dark.svg";
    });
  }
}

if (savedTheme === "light") {
  setTheme(true);
  sys_bt.classList.remove("checked");
  light_btn.classList.add("checked");
} else if (savedTheme === "dark") {
  setTheme(false);
  sys_bt.classList.remove("checked");
  dark_btn.classList.add("checked");
} else {
  checkSys();
}

nav_link.forEach((link) => {
  if (link.classList.contains("has_caret")) {
    const caretIcon = document.createElement("i");
    caretIcon.classList.add("fa-solid", "fa-caret-down");
    link.appendChild(caretIcon);
  }
});

window.onclick = function () {
  generalDropdown.forEach((dropdown) => {
    if (!dropdown.classList.contains("hidden")) {
      dropdown.classList.add("hidden");
    }
  });
};

lang.forEach((droptQQ) => {
  const lang_btnq = droptQQ.querySelector(".language");
  const lang_dropdown = droptQQ.querySelector(".dropdown");
  if (lang_btnq && lang_dropdown) {
    lang_btnq.onclick = function (e) {
      e.stopPropagation();
      lang_dropdown.classList.toggle("hidden");
    };
  }
});

theme_btn.onclick = function (e) {
  e.stopPropagation();
  theme_dropdown.classList.toggle("hidden");
};

dark_btn.onclick = function () {
  setTheme(false);
};

light_btn.onclick = function () {
  setTheme(true);
};

sys_bt.onclick = function () {
  localStorage.removeItem("theme");
  checkSys();
};

generalDropdown.forEach((dropdown) => {
  const currentLang = document.querySelectorAll(".currentLang");
  const droptOPts = dropdown.querySelectorAll(".opt1");
  droptOPts.forEach((pts) => {
    const checkIcon = document.createElement("i");
    checkIcon.classList.add("fa-solid");
    checkIcon.classList.add("fa-check-circle");
    pts.addEventListener("click", (e) => {
      e.stopPropagation();
      droptOPts.forEach((other) => {
        other.classList.remove("checked");
        const otheCOn = other.querySelector(".fa-check-circle");
        if (otheCOn) {
          otheCOn.remove();
        }
      });

      pts.classList.add("checked");

      if (pts.classList.contains("checked")) {
        pts.appendChild(checkIcon);
        if (dropdown.closest(".lang")) {
          currentLang.forEach((dr) => {
            dr.textContent = pts.textContent;
          });
        }
        console.log(pts);
      }
    });
    if (pts.classList.contains("checked")) {
      pts.appendChild(checkIcon);
      if (dropdown.closest(".lang")) {
        currentLang.forEach((cl) => {
          cl.textContent = pts.textContent;
        });
      }
      console.log(pts);
    }
  });
});