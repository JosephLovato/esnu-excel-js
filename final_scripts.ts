function count(scores, s): number {
  return scores.reduce((partialCount, a) => (partialCount += a == s), 0);
}

function count_at_least(scores, s): number {
  return scores.reduce((partialCount, a) => (partialCount += a >= s), 0);
}

/**
 * Question 1 (MC) conversion
 * @CustomFunction
 */
function QUESTION_1(rows: number[][]): number {
  var scores = rows[0];
  var sum = scores.reduce((partialSum, a) => partialSum + (a == 3 ? 1 : 0), 0);
  if (sum == 4) return 3; // E
  else if (sum == 3) return 2; // S
  else return 1; // N
}

/**
* Question 3 (BigO) conversion
* @CustomFunction
*/
function QUESTION_3(rows: number[][]): number {
  return QUESTION_1(rows);
}

/**
 * Module 0 - 2 questions
 * @CustomFunction
 */
export function MODULE_0(rows: number[][]): number {
  var scores = rows[0];
  if (
    count(scores, 3) == 2 || // Both E
    (count_at_least(scores, 3) >= 1 && count_at_least(scores.filter((s) => s != 3), 2) >= 1)) { // At least one E and one S
    return 3;
  } else if (count_at_least(scores, 2) >= 1) { // At least one S
    return 2;
  } else if (count_at_least(scores, 1) >= 1) { // Attempted at least one problem
    return 1;
  } else {
    return 0;
  }
}

/**
 * Module 1 - 4 questions
 * @CustomFunction
 */
export function MODULE_1(rows: number[][]): number {
  var scores = rows[0];
  if (
    count(scores, 3) == 3 || // 3E
    (count(scores, 3) == 2 && count_at_least(scores.filter((s) => s != 3), 2) >= 1) || // 2E + 1S
    count_at_least(scores, 2) == 4) { // 4 S+ 
    return 3;
  } else if (
    count_at_least(scores, 3) >= 2 || // 2E
    count_at_least(scores, 2) >= 3) { // 3S+
    return 2;
  } else if (count_at_least(scores, 1) >= 2) { // 2 or more N
    return 1;
  } else {
    return 0;
  }
}

/**
 * Module 2 - 2 questions
 * @CustomFunction
 */
export function MODULE_2(rows: number[][]): number {
  var scores = rows[0];
  if (count(scores, 3) == 2) { // Both E
    return 3;
  } else if (
    count_at_least(scores, 3) == 1 || // 1E
    count_at_least(scores, 2) == 2) { // 2S+
    return 2;
  } else if (count_at_least(scores, 1) >= 1) { // Attempted at least one problem
    return 1;
  } else {
    return 0;
  }
}

/**
 * Module 3 - 3 questions
 * @CustomFunction
 */
export function MODULE_3(rows: number[][]): number {
  var scores = rows[0];
  if ( // EEE, EES, ESS
    count(scores, 3) == 3 || // 3 E
    (count(scores, 3) == 2 && count(scores, 2) == 1) || // 2E + 1S
    (count(scores, 3) == 1 && count(scores, 2) == 2)) { // 1E + 2S
    return 3;
  } else if ( // SSS, ESN, SSN, EEN
    count(scores, 2) == 3 || // 3S
    count_at_least(scores, 2) == 2 && count_at_least(scores.filter((s) => s < 2), 1) >= 1) { // 2S + 1N
    return 2;
  } else if (count_at_least(scores, 1) >= 2) { // 2 or more N
    return 1;
  } else {
    return 0;
  }
}

/**
 * Module 4 - 2 questions
 * @CustomFunction
 */
function MODULE_4(rows: number[][]): number {
  return MODULE_0(rows)
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
  if (((1.5 * num_E) + num_S) >= 12) return 3;
  // S
  else if (((2 * num_E) + num_S) >= 10) return 2;
  // N
  else if ((num_E + num_S + num_N) >= 10) return 1;
  // U
  else return 0;
}

/**
 * Final Score in terms of module scores
 * @CustomFunction
 */
export function FINAL_MODULE_BASED(rows: number[][]): number {
  var scores = rows[0];

  // E
  if (count_at_least(scores, 2) == 5) {
    if (count(scores, 3) >= 2) return 3;
    else return 2;
  }
  else return 1;
}
