function count(scores, s): number {
    return scores.reduce((partialCount, a) => (partialCount += a == s), 0);
}

function count_at_least(scores, s): number {
    return scores.reduce((partialCount, a) => (partialCount += a >= s), 0);
}

/**
 * Question 1 (MC) conversion
 * @Brief Converts raw Gradescope grade (0,1) to numerical ESNU (3,2,1,0)
 * @CustomFunction
 */
function QUESTION_1(rows: number[][]): number {
    var scores = rows[0];
    var sum = scores.reduce((partialSum, a) => partialSum + a, 0);
    if (sum == 5) return 3;
    else if (sum >= 3) return 2;
    else if (sum >= 1) return 1;
    else return 0;
}

/**
 * Module 0
 * @CustomFunction
 */
function MODULE_0(rows: number[][]): number {
    var scores = rows[0];
    if (
        count(scores, 3) == 2 || // Both E
        (count_at_least(scores, 3) >= 1 &&
            count_at_least(
                scores.filter((s) => s != 3),
                2
            ) >= 1)
    ) {
        // At least one E and one S
        return 3;
    } else if (count_at_least(scores, 2) >= 1) {
        // At least one S
        return 2;
    } else if (count_at_least(scores, 1) >= 1) {
        // Attempted at least one problem
        return 1;
    } else {
        return 0;
    }
}

/**
 * Module 1
 * @CustomFunction
 */
function MODULE_1(rows: number[][]): number {
    var scores = rows[0];
    if (
        (count(scores, 3) == 1 &&
            count_at_least(
                scores.filter((s) => s != 3),
                2
            ) >= 3) || // 1E + 3S
        (count(scores, 3) == 2 &&
            count_at_least(
                scores.filter((s) => s != 3),
                2
            ) >= 1) || // 2E + 1S
        count_at_least(scores, 2) == 5
    ) {
        //5S+
        return 3;
    } else if (count_at_least(scores, 2) >= 3) {
        // at least 3 of 5 S
        return 2;
    } else if (count_at_least(scores, 1) >= 3) {
        // Attempted at least 3 problems
        return 1;
    } else {
        return 0;
    }
}

/**
 * Module 2
 * @CustomFunction
 */
function MODULE_2(rows: number[][]): number {
    var scores = rows[0];
    if (
        count(scores, 3) == 3 || // 3E
        (count(scores, 3) == 2 &&
            count_at_least(
                scores.filter((s) => s != 3),
                2
            ) >= 1) || // 2E + 1S
        (count(scores, 3) == 1 &&
            count_at_least(
                scores.filter((s) => s != 3),
                2
            ) >= 2) || // 1E + 2S
        count_at_least(scores, 2) == 4
    ) {
        // 4S+
        return 3;
    } else if (count_at_least(scores, 2) >= 3) {
        // 3S or better
        return 2;
    } else if (count_at_least(scores, 1) >= 2) {
        // Attempted at least 2 problems
        return 1;
    } else {
        return 0;
    }
}

/**
 * Final Score
 * @CustomFunction
 */
function FINAL(rows: number[][]): number {
    var scores = rows[0];
    var num_E = count(scores, 3);
    var num_S = count(scores, 2);
    var num_N = count(scores, 1);
    var num_U = count(scores, 0);

    // E
    if (1.5 * num_E + num_S >= 9) return 3;
    // S
    else if (2 * num_E + num_S >= 7) return 2;
    // N
    else if (num_E + num_S + num_N >= 6) return 1;
    // U
    else return 0;
}