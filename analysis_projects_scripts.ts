/**
 * Part Score
 * @Brief Calculates the score of a particular part (given list of ESNU scores)
 * Uses the following scheme:
 * E : |E| + |S| >= 0.85 AND |E| >= 0.4
 * S : |E| + |S| >= 0.7
 * N : |E| + |S| + |N| >= 0.6
 * U : otherwise
 * @CustomFunction
*/
function PARTSCORE(scores: string[][]): string {
    var row = scores[0];
    const freqs = {};
    var size = row.length;
    // calculate frequencies
    freqs["E"] = 0;
    freqs["S"] = 0;
    freqs["N"] = 0;
    freqs["U"] = 0;
    for (const s of row) {
        if (s != "E" && s != "S" && s != "N" && s != "U") {
            return "ERR";
        }
        freqs[s] = freqs[s] + 1;
    }
    // Check for "E" score
    if ((freqs["S"] + freqs["E"]) / size >= 0.85 && freqs["E"] / size >= 0.4) {
        return "E";
        // Check for "S" score
    } else if ((freqs["S"] + freqs["E"]) / size >= 0.7) {
        return "S";
        // Check for "N" score
    } else if ((freqs["S"] + freqs["E"] + freqs["N"]) / size >= 0.6) {
        return "N";
    } else {
        return "U";
    }
}
/**2
 * Final Score
 * @Brief Used for calculating the final score of the analysis assignment 
 * given parts a-c and style
 * Uses the following scheme:
 * E: S+ on part a, part b, style AND S+ on part c
 * S: S+ on all parts except part c
 * N: N+ on all parts except part c
 * U: otherwise 
 * @CustomFunction
 */
function FINALSCORE(parta: string, partb: string, partc: string, style:
    string): string {
    // Check for error
    const letters = new Set(["E", "S", "N", "U"]);
    if (!letters.has(parta) || !letters.has(partb) || !letters.has(partc) || !letters.has(style)) {
        return "ERR";
    }
    // Check for E (needs S or E on part c and S+ on others)
    if (
        parta == "S" &&
        (partb == "S" || partb == "E") &&
        (partc == "S" || partc == "E") &&
        (style == "S" || style == "E")
    ) {
        return "E";
    }
    // Check for S (must have S+ in everything but partc)
    if (parta == "S" && (partb == "S" || partb == "E") && (style == "S" || style == "E")) {
        return "S";
    }
    // Check for N (must have N+ in everything but partc, allowing one U at maximum)
    var freqs = {};
    freqs["E"] = 0;
    freqs["S"] = 0;
    freqs["N"] = 0;
    freqs["U"] = 0;
    var list = [parta, partb, style];
    for (const s of list) {
        freqs[s] = freqs[s] + 1;
    }
    if (freqs["U"] <= 1) {
        return "N";
    }
    return "U";
}
/**
 * Part Score
 * @Brief Calculates the score of a particular part (given list of ESNU scores)
 * Uses the following scheme:
 * E : |E| + |S| >= 0.8 AND |E| >= 0.4
 * S : |E| + |S| >= 0.6
 * N : |E| + |S| + |N| >= 0.6
 * U : otherwise
 * @Note used on project 3 forward during F22 (slight loosening of requirements)
 * @CustomFunction
 */
function PARTSCORE_P3(scores: string[][]): string {
    var row = scores[0];
    const freqs = {};
    var size = row.length;
    // calculate frequencies
    freqs["E"] = 0;
    freqs["S"] = 0;
    freqs["N"] = 0;
    freqs["U"] = 0;
    for (const s of row) {
        if (s != "E" && s != "S" && s != "N" && s != "U") {
            return "ERR";
        }
        freqs[s] = freqs[s] + 1;
    }
    // Check for "E" score
    if ((freqs["S"] + freqs["E"]) / size >= 0.8 && freqs["E"] / size >= 0.4) {
        return "E";
        // Check for "S" score
    } else if ((freqs["S"] + freqs["E"]) / size >= 0.6) {
        return "S";
        // Check for "N" score
    } else if ((freqs["S"] + freqs["E"] + freqs["N"]) / size >= 0.6) {
        return "N";
    } else {
        return "U";
    }
}
/**
 * Final Score
 * @Brief Used for calculating the final score of the analysis assignment 
 * given parts a-c and style
 * Uses the following scheme:
 * E: S+ on part ab and style AND S+ on part c
 * S: S+ on all parts except part c
 * N: N+ on all parts except part c
 * U: otherwise 
 * @Note used in F22 projects when parts a and b were too small to 
 * grade as individual parts and thus were combined
 * @CustomFunction
 */
function FINALSCORE_P3(partab: string, partc: string, style: string): string {
    // Check for error
    const letters = new Set(["E", "S", "N", "U"]);
    if (!letters.has(partab) || !letters.has(style) || !letters.has(style)) {
        return "ERR";
    }
    // Check for E (needs S or E on part c and S+ on others)
    if ((partab == "S" || partab == "E") && (style == "S" || style == "E") && (partc == "S" || partc == "E")) {
        return "E";
    }
    // Check for S (must have S+ in everything but partc)
    if ((partab == "S" || partab == "E") && (style == "S" || style == "E")) {
        return "S";
    }
    // Check for N (must have N+ in everything but partc, allowing one U at maximum)
    var freqs = {};
    freqs["E"] = 0;
    freqs["S"] = 0;
    freqs["N"] = 0;
    freqs["U"] = 0;
    var list = [partab, style];
    for (const s of list) {
        freqs[s] = freqs[s] + 1;
    }
    if (freqs["U"] <= 1) {
        return "N";
    }
    return "U";
}