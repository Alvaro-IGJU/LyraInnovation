solutionsTable = document.getElementById("solutions-body");
document.getElementById("searchBtn").addEventListener("click", function () {
    document.getElementById("solutions-table").style.display = "table";

    let solutions = startProgram();
    solutionsTable.innerHTML = ""; 

    solutions.forEach((solution, index) => {
        let row = document.createElement("tr");
        row.classList.add("solution-row");
        row.style.animationDelay = `${index * 0.1}s`;

        let sequenceCell = document.createElement("td");
        sequenceCell.textContent = solution.sequence;

        let numberCell = document.createElement("td");
        numberCell.textContent = solution.num_result;

        let resultCell = document.createElement("td");
        resultCell.classList.add("result-cell");
        resultCell.innerHTML = solution.is_possible ? "✅" : "❌";

        row.appendChild(sequenceCell);
        row.appendChild(numberCell);
        row.appendChild(resultCell);

        solutionsTable.appendChild(row);
    });
});

