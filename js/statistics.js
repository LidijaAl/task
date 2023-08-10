let employees = JSON.parse(localStorage.getItem("employees"));
let totalTasks = 0;
let topEmp = [];

function updateTopEmp() {
  topEmp = employees.map((emp, index) => {
    const lastMonthDate = new Date();
    lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);

    let tasksLastMonth = emp.taskDate.filter((date) => {
      const tDate = new Date(date);

      return lastMonthDate < tDate;
    });
    totalTasks += tasksLastMonth.length;

    return {
      image: emp.image,
      name: emp.empName,
      tasksLastMonth: tasksLastMonth.length,
    };
  });
  topEmp.sort((a, b) => b.tasksLastMonth - a.tasksLastMonth);
}
updateTopEmp();
let topFive = topEmp.slice(0, 5);

topFive.forEach((employee) => {
  const employeesContainer = document.getElementById("employeesThisMonth");
  const employeeContainer = document.createElement("div");
  employeeContainer.classList.add("employeeContainer");

  const employeeImageContainer = document.createElement("div");
  employeeImageContainer.classList.add("employeeImageContainer");
  const employeeImage = document.createElement("img");
  employeeImage.src = employee.image;
  employeeImageContainer.appendChild(employeeImage);

  const employeeNameContainer = document.createElement("div");
  employeeNameContainer.classList.add("employeeNameContainer");
  const employeeName = document.createElement("p");
  employeeName.innerHTML = employee.name;
  employeeNameContainer.appendChild(employeeName);

  employeeContainer.append(employeeImageContainer, employeeNameContainer);
  employeesContainer.appendChild(employeeContainer);
});

const tasksThisMonth = document.getElementById("tasksThisMonth");

const tasksThisMonthContainer = document.createElement("div");
tasksThisMonthContainer.classList.add("tasksThisMonthContainer");

const tasksThisMonthP = document.createElement("p");
tasksThisMonthP.innerHTML = totalTasks;
tasksThisMonthContainer.appendChild(tasksThisMonthP);

tasksThisMonth.appendChild(tasksThisMonthContainer);

//NAVBAR
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const links = document.querySelectorAll(".navigation li");
const statisticsWrapper = document.querySelector(".statistics-wrapper");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

hamburger.addEventListener("click", () => {
  statisticsWrapper.classList.toggle("noshow");
  navigation.style.zIndex = "1";
});
