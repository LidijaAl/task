window.addEventListener("load", () => {
  let employees = JSON.parse(localStorage.getItem("employees") || "[]");

  localStorage.removeItem("url");
  if (window.localStorage.getItem("employees") === null) {
    let exampleEmployees = [
      {
        image: "images/Silvia.jpg",
        empName: "Silvia Hernández",
        birth: "15.03.1988",
        email: "silvia_hernandez54@gmail.com",
        phone: "724-960-8923",
        salary: 1260,
        team: "ENGINEERING",
        completed: "5",
        pending: "2",
        taskDate: [
          "2023-02-05",
          "2023-01-25",
          "2023-03-01",
          "2023-03-02",
          "2023-03-03",
          "2023-03-01",
          "2023-03-02",
          "2023-03-03",
        ],
      },
      {
        image: "images/Jack.jpg",
        empName: "Jack Owens",
        birth: "12.05.1989",
        email: "jack_ovens89@gmail.com",
        phone: "708-769-7844",
        salary: 960,
        team: "PRODUCT",
        completed: "4",
        pending: "3",
        taskDate: [
          "2023-02-05",
          "2023-01-25",
          "2023-03-01",
          "2023-03-02",
          "2023-03-03",
          "2023-01-25",
          "2023-03-01",
          "2023-03-02",
        ],
      },
      {
        image: "images/Juliana.jpg",
        empName: "Juliana Hansch",
        birth: "23.10.1982",
        email: "juliana_hansh4@gmail.com",
        phone: "708-769-7844",
        salary: 1185,
        team: "DESIGN",
        completed: "6",
        pending: "1",
        taskDate: [
          "2023-02-05",
          "2023-01-25",
          "2023-03-01",
          "2023-03-02",
          "2023-03-03",
          "2023-03-01",
          "2023-03-02",
          "2023-03-03",
        ],
      },
      {
        image: "images/Thomas.jpg",
        empName: "Thomas Johnson",
        birth: "15.12.1967",
        email: "thomas_johnson2@gmail.com",
        phone: "719-200-7298",
        salary: 1585,
        team: "ENGINEERING",
        completed: "6",
        pending: "4",
        taskDate: [
          "2023-02-05",
          "2023-01-25",
          "2023-03-01",
          "2023-03-02",
          "2023-03-03",
          "2023-03-02",
          "2023-03-03",
        ],
      },
      {
        image: "images/Joseph.jpg",
        empName: "Joseph Miller",
        birth: "11.02.1969",
        email: "joseph_miller69@gmail.com",
        phone: "208-905-6915",
        salary: 1785,
        team: "ENGINEERING",
        completed: "7",
        pending: "3",
        taskDate: [
          "2023-02-05",
          "2023-01-25",
          "2023-03-01",
          "2023-03-02",
          "2023-03-03",
          "2023-03-02",
        ],
      },

      {
        image: "images/Lana.jpg",
        empName: "Lana Murphy",
        birth: "15.01.1990",
        email: "lana_Murphy90@gmail.com",
        phone: "208-905-6915",
        salary: 985,
        team: "PRODUCT",
        completed: "2",
        pending: "3",
        taskDate: [
          "2023-02-05",
          "2023-01-25",
          "2023-03-01",
          "2023-03-02",
          "2023-03-03",
          "2023-01-25",
          "2023-03-01",
        ],
      },

      {
        image: "images/Denise.jpg",
        empName: "Denise Rodriguez",
        birth: "26.04.1992",
        email: "denise_rodriguez92@gmail.com",
        phone: "512-622-4208",
        salary: 1236,
        team: "DESIGN",
        completed: "4",
        pending: "2",
        taskDate: [
          "2023-02-05",
          "2023-01-25",
          "2023-03-01",
          "2023-03-02",
          "2023-03-03",
          "2023-01-25",
          "2023-03-01",
          "2023-03-02",
        ],
      },
    ];

    localStorage.setItem("employees", JSON.stringify(exampleEmployees));
    location.reload();
  }

  employees.forEach((emp, index, array) => {
    const employees = document.getElementById("employees");
    const employee = document.createElement("div");
    employee.classList.add("employee");

    //IMAGE

    const image = document.createElement("div");
    image.classList.add("image");
    const profileImg = document.createElement("div");
    profileImg.classList.add("profile-img");
    const img = document.createElement("img");

    img.src = !emp.image ? "images/avatar.jpg" : emp.image;
    img.classList.add("myimg");
    profileImg.appendChild(img);
    image.appendChild(profileImg);
    employee.appendChild(image);

    //EDIT-REMOVE-BUTTONS
    const editRemoveBtns = document.createElement("div");
    editRemoveBtns.classList.add("edit-and-remove-buttons");
    const editBtn = document.createElement("div");
    editBtn.classList.add("edit-btn");
    const editLink = document.createElement("div");
    editLink.onclick = editEmployee;
    editLink.innerHTML = `<i class="fa fa-gear fa-lg"></i>`;
    editBtn.appendChild(editLink);
    editRemoveBtns.appendChild(editBtn);

    const removeBtn = document.createElement("div");
    removeBtn.classList.add("remove-btn");
    const removeLink = document.createElement("div");
    removeLink.innerHTML = `<i class="fa fa-close fa-lg"></i>`;
    removeBtn.appendChild(removeLink);
    editRemoveBtns.appendChild(removeBtn);
    image.appendChild(editRemoveBtns);
    removeBtn.onclick = openRemoveModal;

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
    employee.appendChild(about);
    employees.appendChild(employee);

    //EDIT EMPLOYEE

    const editModal = document.getElementById("edit-modal");
    const closeEditModal = document.getElementById("close-edit-modal");
    closeEditModal.addEventListener("click", () => {
      editModal.style.display = "none";
    });
    function editEmployee() {
      editModal.style.display = "flex";
      document
        .getElementById("editImagePreview")
        .setAttribute("src", `${emp.image}`);
      document.getElementById("editName").value = emp.empName;

      document.getElementById("editBirth").value = emp.birth
        .split(".")
        .reverse()
        .join("-");
      document.getElementById("editEmail").value = emp.email;
      document.getElementById("editPhone").value = emp.phone;
      document.getElementById("editSalary").value = emp.salary;
      document.getElementById("editTeam").value = emp.team;

      const editBtn = document.getElementById("editBtn");
      const editCancelBtn = document.getElementById("editCancelBtn");

      editCancelBtn.addEventListener("click", () => {
        editModal.style.display = "none";
        for (let i = 0; i < editError.length; i++) {
          editError[i].style.display = "none";
        }
        for (let i = 0; i < editInputs.length; i++) {
          editInputs[i].style.border = "none";
        }
      });

      editBtn.addEventListener("click", () => {
        if (
          !editErrorName.value ||
          !editErrorBirth.value ||
          !editErrorEmail.value ||
          !editErrorPhone.value ||
          !editErrorSalary.value ||
          !editTeamError.value
        ) {
        } else {
          editModal.style.display = "none";

          const employees = JSON.parse(localStorage.getItem("employees"));
          emp.image = document.getElementById("editImagePreview").src;
          emp.empName = document.getElementById("editName").value;
          emp.birth = document
            .getElementById("editBirth")
            .value.split("-")
            .reverse()
            .join(".");
          emp.email = document.getElementById("editEmail").value;
          emp.phone = document.getElementById("editPhone").value;
          emp.salary = document.getElementById("editSalary").value;
          emp.team = document.getElementById("editTeam").value.toUpperCase();

          img.src = emp.image;
          ename.innerHTML = emp.empName;
          birthP.innerHTML = emp.birth;
          emailP.innerHTML = emp.email;
          phoneP.innerHTML = emp.phone;
          salaryP.innerHTML = `$${emp.salary}`;
          teamP.innerHTML = emp.team;
          completedP.innerHTML = emp.completed;
          pendingP.innerHTML = emp.pending;

          employees.splice(index, 1, emp);
          localStorage.setItem("employees", JSON.stringify(employees));
        }
      });
    }
    //REMOVE EMPLOYEE
    const removeModal = document.getElementById("remove-modal");
    const removeName = document.getElementById("removeName");
    const removeYesBtn = document.getElementById("removeYesBtn");
    const removeNoBtn = document.getElementById("removeNoBtn");
    const closeRemoveModal = document.getElementById("close-remove-modal");
    closeRemoveModal.addEventListener("click", () => {
      removeModal.style.display = "none";
    });
    function openRemoveModal() {
      removeModal.style.display = "flex";
      removeName.innerHTML = emp.empName;

      removeNoBtn.addEventListener("click", () => {
        removeModal.style.display = "none";
      });

      removeYesBtn.addEventListener("click", () => {
        removeModal.style.display = "none";
        const employees = JSON.parse(localStorage.getItem("employees"));
        employees.splice(index, 1);
        localStorage.removeItem("employees");
        localStorage.setItem("employees", JSON.stringify(employees));

        employee.style.display = "none";
      });
    }
  });
});
//PROFILE IMAGE
const addImgFile = document.getElementById("add-img-file");
const addImagePreview = document.getElementById("addImagePreview");
const addErrorImg = document.getElementById("add-error-img");

addImgFile.addEventListener("change", () => {
  const add_fileSize = addImgFile.files.item(0).size;
  const add_fileMb = add_fileSize / 1024 ** 2;
  if (add_fileMb < 2) {
    addErrorImg.style.display = "none";
    const fileReader = new FileReader();

    fileReader.readAsDataURL(addImgFile.files[0]);

    fileReader.addEventListener("load", () => {
      const url = fileReader.result;
      addImagePreview.src = fileReader.result;
      localStorage.setItem("url", url);
    });
  } else {
    addErrorImg.style.display = "block";
    addImgFile.value = "";
  }
});
const editErrorImg = document.getElementById("edit-error-img");
const editImgFile = document.getElementById("edit-img-file");
const editImagePreview = document.getElementById("editImagePreview");

editImgFile.addEventListener("change", () => {
  const edit_fileSize = editImgFile.files.item(0).size;
  const edit_fileMb = edit_fileSize / 1024 ** 2;
  if (edit_fileMb < 2) {
    editErrorImg.style.display = "none";
    const fileReader = new FileReader();

    fileReader.readAsDataURL(editImgFile.files[0]);

    fileReader.addEventListener("load", () => {
      const url = fileReader.result;
      editImagePreview.src = fileReader.result;
      localStorage.setItem("url", url);
    });
  } else {
    editImagePreview.src = "images/avatar.jpg";
    editErrorImg.style.display = "block";
    editImgFile.value = "";
  }
});

//

//ADD EMPLOYEE

const addModal = document.getElementById("add-modal");
const addNewBtn = document.getElementById("addNewBtn");
const closeAddModal = document.getElementById("close-add-modal");
closeAddModal.addEventListener("click", () => {
  addModal.style.display = "none";
});
addNewBtn.addEventListener("click", openAddModal);
function openAddModal() {
  addModal.style.display = "flex";
}

const doneBtn = document.getElementById("addBtn");
const cancelBtn = document.getElementById("addCancelBtn");

cancelBtn.addEventListener("click", () => {
  addModal.style.display = "none";
  addImagePreview.src = "images/avatar.jpg";
  addImgFile.value = "";
  for (let i = 0; i < addInputs.length; i++) {
    addInputs[i].value = "";
  }
  document.getElementById("team").value = "select";
});

doneBtn.addEventListener("click", () => {
  if (
    !addErrorName.value ||
    !addErrorBirth.value ||
    !addErrorEmail.value ||
    !addErrorPhone.value ||
    !addErrorSalary.value ||
    !addTeamError.value
  ) {
    addErrorMessage.style.display = "block";
  } else {
    addEmployee();
  }
});

function addEmployee() {
  location.reload();
  addModal.style.display = "none";

  class Employee {
    constructor(
      image,
      name,
      birth,
      email,
      phone,
      salary,
      team,
      completed,
      pending,
      taskDate
    ) {
      (this.image = image),
        (this.empName = name),
        (this.birth = birth),
        (this.email = email),
        (this.phone = phone),
        (this.salary = salary),
        (this.team = team),
        (this.completed = completed),
        (this.pending = pending);
      this.taskDate = taskDate;
    }
  }

  let empImage = localStorage.getItem("url");
  let empName = document.getElementById("empName").value;
  let empbirth = document
    .getElementById("birth")
    .value.split("-")
    .reverse()
    .join(".");
  let empEmail = document.getElementById("email").value;
  let empPhone = document.getElementById("phone").value;
  let empSalary = document.getElementById("salary").value;
  let empTeam = document.getElementById("team").value.toUpperCase();
  let empCompleted = "";
  let empPending = "";
  let empTaskDate = [];

  let employees = JSON.parse(localStorage.getItem("employees") || "[]");
  const newEmployee = new Employee(
    empImage,
    empName,
    empbirth,
    empEmail,
    empPhone,
    empSalary,
    empTeam,
    empCompleted,
    empPending,
    empTaskDate
  );

  employees.push(newEmployee);

  localStorage.setItem("employees", JSON.stringify(employees));
}

//VALIDATION ADD EMPLOYEE

const addErrorName = document.getElementById("empName");
const addErrorBirth = document.getElementById("birth");
const addErrorEmail = document.getElementById("email");
const addErrorPhone = document.getElementById("phone");
const addErrorSalary = document.getElementById("salary");
const addErrorMessage = document.getElementById("add-error-message");

const addInputs = document.querySelectorAll(".addInput");
const addError = document.querySelectorAll(".add-error");
const telformat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const addTeamError = document.getElementById("team");
const addTeamErrorP = document.getElementById("addTeamErrorP");

function validateAddForm() {
  for (let i = 0; i < addInputs.length; i++) {
    addInputs[i].addEventListener("blur", () => {
      if (addInputs[i].value === "") {
        addError[i].style.display = "block";
        addInputs[i].style.borderColor = "red";
        addInputs[i].placeholder = addInputs[i].placeholder;
      } else {
        addError[i].style.display = "none";
      }
    });
    addInputs[2].addEventListener("blur", () => {
      if (addInputs[2].value.match(mailformat)) {
        addError[2].style.display = "none";
      } else {
        addInputs[2].value = "";
        addError[2].style.display = "block";
        addInputs[2].style.borderColor = "red";
        addInputs[2].placeholder = "email@example/com";
      }
    });
    addInputs[3].addEventListener("blur", () => {
      if (addInputs[3].value.match(telformat)) {
        addError[3].style.display = "none";
      } else {
        addInputs[3].value = "";
        addError[3].style.display = "block";
        addInputs[3].style.borderColor = "red";
        addInputs[3].placeholder = addInputs[3].placeholder;
      }
    });
    addInputs[i].addEventListener("focus", () => {
      addError[i].style.display = "none";
      addInputs[i].style.borderColor = "white";
    });
  }
  addTeamError.addEventListener("blur", () => {
    if (addTeamError.value === "select") {
      addTeamErrorP.style.display = "block";
      addTeamError.style.borderColor = "red";
    } else {
      addTeamErrorP.style.display = "none";
      addTeamError.style.borderColor = "white";
    }
  });
}

validateAddForm();

//VALIDATION EDIT EMPLOYEE

const editErrorName = document.getElementById("editName");
const editErrorBirth = document.getElementById("editBirth");
const editErrorEmail = document.getElementById("editEmail");
const editErrorPhone = document.getElementById("editPhone");
const editErrorSalary = document.getElementById("editSalary");
const editErrorMessage = document.getElementById("edit-error-message");

const editInputs = document.querySelectorAll(".editInput");
const editError = document.querySelectorAll(".edit-error");
const editTeamError = document.getElementById("editTeam");
const editTeamErrorP = document.getElementById("editTeamErrorP");

function validateEditForm() {
  for (let i = 0; i < editInputs.length; i++) {
    editInputs[i].addEventListener("blur", () => {
      if (editInputs[i].value === "") {
        editError[i].style.display = "block";
        editInputs[i].style.borderColor = "red";
        editInputs[i].placeholder = editInputs[i].placeholder;
      } else {
        editError[i].style.display = "none";
      }
    });
    editInputs[2].addEventListener("blur", () => {
      if (editInputs[2].value.match(mailformat)) {
        editError[2].style.display = "none";
      } else {
        editInputs[2].value = "";
        editError[2].style.display = "block";
        editInputs[2].style.borderColor = "red";
        editInputs[2].placeholder = "email@example/com";
      }
    });
    editInputs[3].addEventListener("blur", () => {
      if (editInputs[3].value.match(telformat)) {
        editError[3].style.display = "none";
      } else {
        editInputs[3].value = "";
        editError[3].style.display = "block";
        editInputs[3].style.borderColor = "red";
        editInputs[3].placeholder = editInputs[3].placeholder;
      }
    });
    editInputs[i].addEventListener("focus", () => {
      editError[i].style.display = "none";
      editInputs[i].style.borderColor = "white";
    });
  }
  editTeamError.addEventListener("blur", () => {
    if (editTeamError.value === "select") {
      editTeamErrorP.style.display = "block";
      editTeamError.style.borderColor = "red";
    } else {
      editTeamErrorP.style.display = "none";
      editTeamError.style.borderColor = "white";
    }
  });
}

validateEditForm();

//NAVBAR
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const links = document.querySelectorAll(".navigation li");
const employeesWrapper = document.querySelector(".employees-wrapper");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

hamburger.addEventListener("click", () => {
  employeesWrapper.classList.toggle("noshow");
  navigation.style.zIndex = "1";
});
