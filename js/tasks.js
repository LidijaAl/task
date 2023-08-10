window.addEventListener("load", () => {
  let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  if (window.localStorage.getItem("tasks") === null) {
    let exampleTasks = [
      {
        title: "Implement responsive design",
        description:
          "Implement a responsive design for a website. Make sure that the website is optimized for performance on all devices and accessible to users with disabilities.",
        image: "/htmls/images/Silvia.jpg",
        name: "Silvia Hernández",
        date: "10.04.2023",
        completed: "false",
      },
      {
        title: "Conduct user research",
        description:
          "Conduct user research for a new feature that is being considered for a software product. Analyze the data collected and create a report",
        image: "/htmls/images/Jack.jpg",
        name: "Jack Owens",
        date: "15.04.2023",
        completed: "false",
      },
      {
        title: "Design a mobile app",
        description:
          "Design a mobile app for a fitness startup. Come up with an innovative design that is easy to navigate and visually appealing.",
        image: "/htmls/images/Juliana.jpg",
        name: "Juliana Hansch",
        date: "20.04.2023",
        completed: "false",
      },
    ];
    localStorage.setItem("tasks", JSON.stringify(exampleTasks));
    location.reload();
  }
  let employees = JSON.parse(localStorage.getItem("employees"));

  tasks.forEach((tas, index, array) => {
    const tasks = document.getElementById("tasks");
    const task = document.createElement("div");
    task.classList.add("task");

    task.style.display.opacity = tas.opacity;
    //IMAGE
    const image = document.createElement("div");
    image.classList.add("image");
    const taskImg = document.createElement("div");
    taskImg.classList.add("task-img");
    const img = document.createElement("img");
    img.src = "/htmls/images/taskI.jpg";

    img.classList.add("myimg");
    taskImg.appendChild(img);
    image.appendChild(taskImg);
    task.appendChild(image);

    //EDIT-REMOVE-BUTTONS
    const editRemoveBtns = document.createElement("div");
    editRemoveBtns.classList.add("edit-and-remove-buttons");
    const editBtn = document.createElement("div");
    editBtn.classList.add("edit-btn");
    const editLink = document.createElement("div");
    editLink.onclick = editTask;
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

    //TITLE
    const title = document.createElement("div");
    title.classList.add("title");
    title.innerHTML = tas.title;
    about.append(title);

    //INFO
    const info = document.createElement("div");
    info.classList.add("info");

    //DESCRIPTION
    const tDescription = document.createElement("div");
    tDescription.classList.add("description");
    const descriptionH = document.createElement("h2");
    descriptionH.innerHTML = "Description: ";
    const descriptionP = document.createElement("p");
    descriptionP.innerHTML = tas.description;
    tDescription.append(descriptionH, descriptionP);
    info.appendChild(tDescription);

    //ASSIGNEE

    const tAssignee = document.createElement("div");
    tAssignee.classList.add("assignee");
    const assigneeH = document.createElement("h2");
    assigneeH.innerHTML = "Assigned to: ";

    const aImage = document.createElement("div");
    aImage.classList.add("a-image");
    const asImg = document.createElement("div");
    asImg.classList.add("as-img");
    const aImg = document.createElement("img");
    aImg.src = tas.image;
    aImg.classList.add("a-img");
    asImg.appendChild(aImg);
    aImage.appendChild(asImg);

    const asName = document.createElement("div");
    asName.classList.add("a-name");
    const asNameP = document.createElement("p");
    asNameP.innerHTML = tas.name;
    asName.appendChild(asNameP);
    aImage.appendChild(asName);
    tAssignee.append(assigneeH, aImage);

    //DUE DATE

    const tDate = document.createElement("div");
    tDate.classList.add("date");
    const dateH = document.createElement("h2");
    dateH.innerHTML = "Due date: ";
    const dateP = document.createElement("p");
    dateP.innerHTML = tas.date;
    tDate.append(dateH, dateP);

    //COMPLETED BUTTON

    const tButton = document.createElement("div");
    tButton.classList.add("completed-button");
    const compBtn = document.createElement("p");
    compBtn.classList.add("comp-btn");
    compBtn.innerHTML = "COMPLETED";
    tButton.onclick = taskCompleted;
    tButton.appendChild(compBtn);

    //FINAL APPENDS
    info.append(tDescription, tAssignee, tDate, tButton);
    about.append(info);
    task.append(about);
    tasks.appendChild(task);

    if (tas.completed === "true") {
      task.style.display = "none";
    }
    //EDIT TASK
    const editModal = document.getElementById("edit-modal");
    const closeEditModal = document.getElementById("close-edit-modal");
    closeEditModal.addEventListener("click", () => {
      editModal.style.display = "none";
    });

    function editTask() {
      editModal.style.display = "flex";

      const editChosenAssignee = document.getElementById("editChosenAssignee");
      const editContainer = document.getElementById("editContainer");
      const editContImage = document.getElementById("editContImageImg");
      const editContName = document.getElementById("editContName");

      editContImage.src = tas.image;
      editContName.innerHTML = tas.name;

      const editAssignButton = document.getElementById("editAssignBtn");

      const editBtn = document.getElementById("editBtn");
      const editCancelBtn = document.getElementById("editCancelBtn");

      editCancelBtn.addEventListener("click", () => {
        editModal.style.display = "none";
      });

      editAssignButton.addEventListener("click", editSelectAssignee);

      function editSelectAssignee() {
        editContainer.style.display = "none";
        const assignModalWrapper = document.createElement("div");
        assignModalWrapper.classList.add("assign-modal-wrapper");

        const assignModal = document.createElement("div");
        assignModal.classList.add("assign-modal");

        const assigneeList = document.createElement("ul");
        assigneeList.classList.add("assignee-list");

        employees.forEach((emp, index, array) => {
          const assigneeItem = document.createElement("li");
          const radioButton = document.createElement("input");
          radioButton.type = "radio";
          radioButton.name = "assignee";

          const assigneeProfileName = document.createElement("div");
          assigneeProfileName.classList.add("assigneeProfileName");
          const assigneeProfileNameP = document.createElement("p");
          assigneeProfileNameP.innerHTML = emp.empName;
          assigneeProfileName.appendChild(assigneeProfileNameP);

          const assigneeProfileImage = document.createElement("div");
          assigneeProfileImage.classList.add("assigneeProfileImage");
          const assigneeProfileImg = document.createElement("img");
          assigneeProfileImg.classList.add("assigneeProfileImg");
          assigneeProfileImg.src = emp.image;
          assigneeProfileImage.appendChild(assigneeProfileImg);

          assigneeItem.append(
            radioButton,
            assigneeProfileImage,
            assigneeProfileName
          );
          assigneeList.appendChild(assigneeItem);
          assignModalWrapper.appendChild(assignModal);
        });

        //BUTTONS
        const assignBtnContainer = document.createElement("div");
        assignBtnContainer.classList.add("assignBtnContainer");

        const assignDoneBtn = document.createElement("div");
        assignDoneBtn.classList.add("assignDoneBtn");
        const assignDoneBtnP = document.createElement("p");
        assignDoneBtnP.innerHTML = "Done";
        assignDoneBtn.appendChild(assignDoneBtnP);

        const assignCancelBtn = document.createElement("div");
        assignCancelBtn.classList.add("assignCancelBtn");
        assignCancelBtn.onclick = closeEditAssignModal;
        const assignCancelBtnP = document.createElement("p");
        assignCancelBtnP.innerHTML = "Cancel";
        assignCancelBtn.appendChild(assignCancelBtnP);

        function closeEditAssignModal() {
          assignModalWrapper.style.display = "none";
        }

        assignDoneBtn.addEventListener("click", () => {
          editChosenAssignee.style.display = "flex";
          let asModal = document.querySelector(".assign-modal-wrapper");
          asModal.style.display = "none";
          let editChoose = document.querySelector(".edit-choose");
          editChoose.style.display = "none";
          const selectedRadioButton = document.querySelector(
            "input[name='assignee']:checked"
          );

          if (selectedRadioButton) {
            const selectedAssignee = employees.find(
              (emp) =>
                emp.empName ===
                selectedRadioButton.nextSibling.nextSibling.textContent
            );

            const chosenAssigneeContainer = document.createElement("div");
            chosenAssigneeContainer.classList.add("chosenAssigneeContainer");

            //ASSIGNEE IMAGE
            const chosenAssigneeImage = document.createElement("div");
            chosenAssigneeImage.classList.add("chosenAssigneeImage");
            const chosenAssigneeImg = document.createElement("img");
            chosenAssigneeImg.classList.add("chosenAssigneeImg");
            chosenAssigneeImg.src = selectedAssignee.image;
            chosenAssigneeImage.appendChild(chosenAssigneeImg);

            //ASSIGNEE NAME
            const chosenAssigneeName = document.createElement("div");
            chosenAssigneeName.classList.add("chosenAssigneeName");
            const chosenAssigneeNameP = document.createElement("p");
            chosenAssigneeNameP.innerHTML = selectedAssignee.empName;
            chosenAssigneeName.appendChild(chosenAssigneeNameP);

            chosenAssigneeContainer.append(
              chosenAssigneeImage,
              chosenAssigneeName
            );
            editChosenAssignee.appendChild(chosenAssigneeContainer);
          }
        });
        //FINAL APPENDS
        assignBtnContainer.append(assignDoneBtn, assignCancelBtn);
        editModal.appendChild(assignModalWrapper);
        assignModal.append(assigneeList, assignBtnContainer);
      }

      document.getElementById("editTitle").value = tas.title;
      document.getElementById("editDescription").value = tas.description;
      document.getElementById("editDate").value = tas.date
        .split(".")
        .reverse()
        .join("-");

      editBtn.addEventListener("click", () => {
        location.reload();
        if (
          !editErrorTitle.value ||
          !editErrorDescription.value ||
          !editErrorDate.value ||
          !document.getElementById("editContImageImg").src
        ) {
          editErrorMessage.style.display = "block";
        } else {
          editModal.style.display = "none";

          const tasks = JSON.parse(localStorage.getItem("tasks"));
          tas.name = !document.querySelector(".chosenAssigneeName p")
            ? document.getElementById("editContName").innerHTML
            : document.querySelector(".chosenAssigneeName p").innerHTML;
          tas.image = !document.querySelector(".chosenAssigneeImg")
            ? document.getElementById("editContImageImg").src
            : document.querySelector(".chosenAssigneeImg").src;
          tas.title = document.getElementById("editTitle").value;
          tas.description = document.getElementById("editDescription").value;
          tas.date = document
            .getElementById("editDate")
            .value.split("-")
            .reverse()
            .join(".");

          title.innerHTML = tas.title;
          aImg.src = tas.image;
          asNameP.innerHTML = tas.name;
          dateP.innerHTML = tas.date;
          descriptionP.innerHTML = tas.description;

          tasks.splice(index, 1, tas);
          localStorage.setItem("tasks", JSON.stringify(tasks));
        }
      });
    }
    //TASK COMPLETED
    function taskCompleted() {
      location.reload();
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      tas.completed = "true";
      tasks.splice(index, 1, tas);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      const empIndex = employees.findIndex((emp) => emp.empName === tas.name);
      const taskEmployee = employees.find((empl) => empl.empName === tas.name);
      taskEmployee.completed = Number(taskEmployee.completed) + 1;
      taskEmployee.pending = Number(taskEmployee.pending) - 1;
      employees.splice(empIndex, 1, taskEmployee);

      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().slice(0, 10);

      taskEmployee.taskDate.push(formattedDate);

      localStorage.setItem("employees", JSON.stringify(employees));
    }

    //REMOVE TASK
    const removeModal = document.getElementById("remove-modal");
    const removeYesBtn = document.getElementById("removeYesBtn");
    const removeNoBtn = document.getElementById("removeNoBtn");
    const closeRemoveModal = document.getElementById("close-remove-modal");
    closeRemoveModal.addEventListener("click", () => {
      removeModal.style.display = "none";
    });

    function openRemoveModal() {
      removeModal.style.display = "flex";
      removeNoBtn.addEventListener("click", () => {
        removeModal.style.display = "none";
      });
      removeYesBtn.addEventListener("click", () => {
        location.reload();
        removeModal.style.display = "none";
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
      });
      const taskEmployee = employees.find((empl) => empl.empName === tas.name);
      taskEmployee.pending = Number(taskEmployee.pending) - 1;
      localStorage.setItem("employees", JSON.stringify(employees));
    }
  });
});

//ADD TASKS

const addModal = document.getElementById("add-modal");
const addNewBtn = document.getElementById("addNewBtn");
const closeAddModal = document.getElementById("close-add-modal");

closeAddModal.addEventListener("click", () => {
  location.reload();
  addModal.style.display = "none";
});

addNewBtn.addEventListener("click", openAddModal);
function openAddModal() {
  addModal.style.display = "flex";
}

const doneBtn = document.getElementById("addBtn");
const cancelBtn = document.getElementById("addCancelBtn");

cancelBtn.addEventListener("click", () => {
  location.reload();
  addModal.style.display = "none";
});

const chosenAssignee = document.getElementById("chosenAssignee");
const assignBtn = document.getElementById("assignBtn");

assignBtn.addEventListener("click", selectAssignee);

//SELECT ASSIGNEE
function selectAssignee() {
  let employees = JSON.parse(localStorage.getItem("employees"));
  const assignModalWrapper = document.createElement("div");
  assignModalWrapper.classList.add("assign-modal-wrapper");

  const assignModal = document.createElement("div");
  assignModal.classList.add("assign-modal");

  const assigneeList = document.createElement("ul");
  assigneeList.classList.add("assignee-list");

  employees.forEach((emp, index, array) => {
    const assigneeItem = document.createElement("li");
    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "assignee";

    const assigneeProfileName = document.createElement("div");
    assigneeProfileName.classList.add("assigneeProfileName");
    const assigneeProfileNameP = document.createElement("p");
    assigneeProfileNameP.innerHTML = emp.empName;
    assigneeProfileName.appendChild(assigneeProfileNameP);

    const assigneeProfileImage = document.createElement("div");
    assigneeProfileImage.classList.add("assigneeProfileImage");
    const assigneeProfileImg = document.createElement("img");
    assigneeProfileImg.classList.add("assigneeProfileImg");
    assigneeProfileImg.src = emp.image ? emp.image : "/htmls/images/taskI.jpg";
    assigneeProfileImage.appendChild(assigneeProfileImg);

    assigneeItem.append(radioButton, assigneeProfileImage, assigneeProfileName);
    assigneeList.appendChild(assigneeItem);
    assignModalWrapper.appendChild(assignModal);
  });

  //BUTTONS
  const assignBtnContainer = document.createElement("div");
  assignBtnContainer.classList.add("assignBtnContainer");

  const assignDoneBtn = document.createElement("div");
  assignDoneBtn.classList.add("assignDoneBtn");
  const assignDoneBtnP = document.createElement("p");
  assignDoneBtnP.innerHTML = "Done";
  assignDoneBtn.appendChild(assignDoneBtnP);

  const assignCancelBtn = document.createElement("div");
  assignCancelBtn.classList.add("assignCancelBtn");
  assignCancelBtn.onclick = closeAddAssignModal;
  const assignCancelBtnP = document.createElement("p");
  assignCancelBtnP.innerHTML = "Cancel";
  assignCancelBtn.appendChild(assignCancelBtnP);

  function closeAddAssignModal() {
    assignModalWrapper.style.display = "none";
  }
  assignDoneBtn.addEventListener("click", (e) => {
    e.preventDefault();
    chosenAssignee.style.display = "flex";
    let asModal = document.querySelector(".assign-modal-wrapper");
    asModal.style.display = "none";
    let choose = document.querySelector(".choose");
    choose.style.display = "none";
    const selectedRadioButton = document.querySelector(
      "input[name='assignee']:checked"
    );

    if (selectedRadioButton) {
      const selectedAssignee = employees.find(
        (emp) =>
          emp.empName ===
          selectedRadioButton.nextSibling.nextSibling.textContent
      );

      const chosenAssigneeContainer = document.createElement("div");
      chosenAssigneeContainer.classList.add("chosenAssigneeContainer");

      //ASSIGNEE IMAGE
      const chosenAssigneeImage = document.createElement("div");
      chosenAssigneeImage.classList.add("chosenAssigneeImage");
      const chosenAssigneeImg = document.createElement("img");
      chosenAssigneeImg.classList.add("chosenAssigneeImg");
      chosenAssigneeImg.src = selectedAssignee.image
        ? selectedAssignee.image
        : "/htmls/images/taskI.jpg";
      chosenAssigneeImage.appendChild(chosenAssigneeImg);

      //ASSIGNEE NAME
      const chosenAssigneeName = document.createElement("div");
      chosenAssigneeName.classList.add("chosenAssigneeName");
      const chosenAssigneeNameP = document.createElement("p");
      chosenAssigneeNameP.innerHTML = selectedAssignee.empName;
      chosenAssigneeName.appendChild(chosenAssigneeNameP);

      chosenAssigneeContainer.append(chosenAssigneeImage, chosenAssigneeName);
      chosenAssignee.appendChild(chosenAssigneeContainer);
    }
  });
  //FINAL APPENDS
  assignBtnContainer.append(assignDoneBtn, assignCancelBtn);
  addModal.appendChild(assignModalWrapper);
  assignModal.append(assigneeList, assignBtnContainer);
}

doneBtn.addEventListener("click", () => {
  if (
    !addErrorTitle.value ||
    !addErrorDescription.value ||
    !document.querySelector(".chosenAssigneeImg").src ||
    !addErrorDate.value
  ) {
    addErrorMessage.style.display = "block";
  } else {
    addTask();
  }
});

function addTask() {
  try {
    location.reload();
    addModal.style.display = "none";

    class Task {
      constructor(title, description, image, name, date, completed) {
        (this.title = title),
          (this.description = description),
          (this.image = image),
          (this.name = name),
          (this.date = date),
          (this.completed = completed);
      }
    }
    let taskTitle = document.getElementById("title").value;
    let taskDescription = document.getElementById("description").value;
    let asImage = document.querySelector(".chosenAssigneeImg").src;
    let asName = document.querySelector(".chosenAssigneeName p").innerHTML;
    let taskDate = document
      .getElementById("date")
      .value.split("-")
      .reverse()
      .join(".");
    let taskCompleted = "";

    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    const newTask = new Task(
      taskTitle,
      taskDescription,
      asImage,
      asName,
      taskDate,
      taskCompleted
    );

    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    let employees = JSON.parse(localStorage.getItem("employees"));

    const index = employees.findIndex((emp) => emp.empName === asName);

    const employeeTask = employees.find((emp) => emp.empName === asName);

    employeeTask.pending = Number(employeeTask.pending) + 1;

    employees.splice(index, 1, employeeTask);

    localStorage.setItem("employees", JSON.stringify(employees));
  } catch (error) {
    console.log(error);
  }
}

//VALIDATION ADD TASK

const addErrorMessage = document.getElementById("add-error-message");
const addErrorTitle = document.getElementById("title");
const addErrorDescription = document.getElementById("description");
const addErrorDate = document.getElementById("date");
const addInputs = document.querySelectorAll(".addInput");
const addError = document.querySelectorAll(".add-error");

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

    addInputs[i].addEventListener("focus", () => {
      addError[i].style.display = "none";
      addInputs[i].style.borderColor = "white";
    });
  }
}

validateAddForm();

//VALIDATION ADD TASK

const editErrorMessage = document.getElementById("edit-error-message");
const editErrorTitle = document.getElementById("editTitle");
const editErrorDescription = document.getElementById("editDescription");
const editErrorContImage = document.getElementById("editErrorContImage");
const editErrorDate = document.getElementById("editDate");
const editInputs = document.querySelectorAll(".editInput");
const editError = document.querySelectorAll(".edit-error");

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

    editInputs[i].addEventListener("focus", () => {
      editError[i].style.display = "none";
      editInputs[i].style.borderColor = "white";
    });
  }
}

validateEditForm();

//NAVBAR
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const links = document.querySelectorAll(".navigation li");
const tasksWrapper = document.querySelector(".tasks-wrapper");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

hamburger.addEventListener("click", () => {
  tasksWrapper.classList.toggle("noshow");
  navigation.style.zIndex = "1";
});
