window.addEventListener("load", () => {
  let employees = JSON.parse(localStorage.getItem("employees") || "[]");

  const designBtn = document.getElementById("designBtn");
  const engineeringBtn = document.getElementById("engineeringBtn");
  const productBtn = document.getElementById("productBtn");

  const design = document.getElementById("des-team");
  const engineering = document.getElementById("eng-team");
  const product = document.getElementById("pro-team");

  const landing = document.getElementById("landing");

  engineeringBtn.addEventListener("click", () => {
    landing.style.display = "none";
    product.style.display = "none";
    design.style.display = "none";
    engineering.style.display = "flex";
  });

  designBtn.addEventListener("click", () => {
    landing.style.display = "none";
    product.style.display = "none";
    engineering.style.display = "none";
    design.style.display = "flex";
  });

  productBtn.addEventListener("click", () => {
    landing.style.display = "none";
    design.style.display = "none";
    engineering.style.display = "none";
    product.style.display = "flex";
  });

  employees.forEach((emp, index, array) => {
    const engineeringTeam = document.getElementById("engineering-container");
    const designTeam = document.getElementById("design-container");
    const productTeam = document.getElementById("product-container");

    const member = document.createElement("div");
    member.classList.add("member");

    const image = document.createElement("div");
    image.classList.add("image");
    const profileImg = document.createElement("div");
    profileImg.classList.add("profile-img");
    const img = document.createElement("img");

    img.src = !emp.image ? "images/avatar.jpg" : emp.image;
    img.classList.add("myimg");
    profileImg.appendChild(img);
    image.appendChild(profileImg);
    member.appendChild(image);

    //ABOUT
    const about = document.createElement("div");
    about.classList.add("about");

    //NAME
    const ename = document.createElement("div");
    ename.classList.add("name");
    ename.innerHTML = emp.empName;
    about.append(ename);

    //EMPLOYEE INFO
    const empInfo = document.createElement("div");
    empInfo.classList.add("emp-info");

    //DATE OF BIRTH
    const ebirth = document.createElement("div");
    ebirth.classList.add("birth");
    const birthH = document.createElement("h2");
    birthH.innerHTML = "Date of birth: ";
    const birthP = document.createElement("p");
    birthP.innerHTML = emp.birth;
    ebirth.append(birthH, birthP);
    empInfo.appendChild(ebirth);

    //EMAIL
    const eemail = document.createElement("div");
    eemail.classList.add("email");
    const emailH = document.createElement("h2");
    emailH.innerHTML = "Email: ";
    const emailP = document.createElement("p");
    emailP.innerHTML = emp.email;
    eemail.append(emailH, emailP);
    empInfo.appendChild(eemail);

    //PHONE NUMBER
    const ephone = document.createElement("div");
    ephone.classList.add("phone");
    const phoneH = document.createElement("h2");
    phoneH.innerHTML = "Phone number: ";
    const phoneP = document.createElement("p");
    phoneP.innerHTML = emp.phone;
    ephone.append(phoneH, phoneP);
    empInfo.appendChild(ephone);

    //MONTHLY SALARY
    const esalary = document.createElement("div");
    esalary.classList.add("salary");
    const salaryH = document.createElement("h2");
    salaryH.innerHTML = "Monthly salary: ";
    const salaryP = document.createElement("p");
    salaryP.innerHTML = `$${emp.salary}`;
    esalary.append(salaryH, salaryP);
    empInfo.appendChild(esalary);

    //WORK INFO
    const workInfo = document.createElement("div");
    workInfo.classList.add("work-info");

    //TEAM
    const eteam = document.createElement("div");
    eteam.classList.add("team");
    const teamH = document.createElement("h2");
    teamH.innerHTML = "Team: ";
    const teamP = document.createElement("p");
    teamP.innerHTML = emp.team;
    eteam.append(teamH, teamP);
    workInfo.appendChild(eteam);

    //COMPLETED TASKS
    const ecompleted = document.createElement("div");
    ecompleted.classList.add("completed");
    const completedH = document.createElement("h2");
    completedH.innerHTML = "Completed tasks: ";
    const completedP = document.createElement("p");
    completedP.innerHTML = emp.completed;
    ecompleted.append(completedH, completedP);
    workInfo.appendChild(ecompleted);

    //PENDING TASKS
    const epending = document.createElement("div");
    epending.classList.add("pending");
    const pendingH = document.createElement("h2");
    pendingH.innerHTML = "Pending tasks: ";
    const pendingP = document.createElement("p");
    pendingP.innerHTML = emp.pending;
    epending.append(pendingH, pendingP);
    workInfo.appendChild(epending);

    //FINAL APPENDS
    about.append(empInfo, workInfo);
    member.appendChild(about);

    if (emp.team == "ENGINEERING") {
      engineeringTeam.appendChild(member);
    } else if (emp.team == "DESIGN") {
      designTeam.appendChild(member);
    } else {
      productTeam.appendChild(member);
    }
  });
});

//NAVIGATION

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const links = document.querySelectorAll(".navigation li");
const landing = document.querySelector(".landing");
const teamWrapper = document.querySelector(".team-wrapper");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

hamburger.addEventListener("click", () => {
  teamWrapper.classList.toggle("noshow");
  landing.classList.toggle("noshow");
  navigation.style.zIndex = "1";
});
