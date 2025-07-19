
function searchSequence(num_sequence, num_result) {
    const maxAbsoluteSum = num_sequence.reduce((acc, n) => acc + n, 0);

    const MAX_SUM = (2 * maxAbsoluteSum) + 1;
    const OFFSET = maxAbsoluteSum;

    let possibleSums = new Array(MAX_SUM).fill(false);
    possibleSums[OFFSET + num_sequence[0]] = true; 
    possibleSums[OFFSET - num_sequence[0]] = true; 

    for (let i = 1; i < num_sequence.length; i++) {
        let nextPossibleSums = new Array(MAX_SUM).fill(false);
        for (let sum = 0; sum < MAX_SUM; sum++) {
            if (possibleSums[sum]) {
                nextPossibleSums[sum + num_sequence[i]] = true;
                nextPossibleSums[sum - num_sequence[i]] = true;
            }
        }
        possibleSums = nextPossibleSums;
    }

    return possibleSums[OFFSET + num_result] === true;
}


function generateCases(num_cases = 100) {
    let cases = [];

    for (let i = 0; i < num_cases; i++) {
        let sequence_length = Math.floor(Math.random() * 100) + 1;

        let sequence = "";
        for (let j = 0; j < sequence_length; j++) {
            sequence += Math.floor(Math.random() * 10);
        }

        let result = Math.floor(Math.random() * 2001) - 1000;

        cases.push({
            sequence: sequence,
            result: result
        });
    }

    return cases;
}

function startProgram() {
    let testCases = generateCases(); 
    let answers = []
    testCases.forEach((testCase, index) => {
        let num_sequence = testCase.sequence.split("").map(Number);
        let num_result = testCase.result;

        let isPossible = searchSequence(num_sequence, num_result);

        console.log(`${testCase.sequence} ${num_result}  ${isPossible ? "YES" : "NO"}`);

        answers.push({
            "sequence":testCase.sequence,
            "num_result": num_result,
            "is_possible": isPossible
        })
            
    });

    return answers;

}