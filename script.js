function addAssignment() {

    let name = document.getElementById("assignmentName").value;
    let deadline = document.getElementById("deadline").value;

    if (name === "" || deadline === "") {
        alert("Please enter assignment name and deadline.");
        return;
    }

    let list = document.getElementById("assignmentList");

    let item = document.createElement("li");

    item.innerHTML = name + " - Deadline: " + deadline;

    list.appendChild(item);

    document.getElementById("assignmentName").value = "";
    document.getElementById("deadline").value = "";
}
