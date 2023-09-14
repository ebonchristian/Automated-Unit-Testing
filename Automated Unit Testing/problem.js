function grade(score) {
    if (score >= 98 && score <= 100) return 1.00;
    if (score >= 94 && score <= 97) return 1.25;
    if (score >= 90 && score <= 93) return 1.5;
    if (score >= 88 && score <= 89) return 1.75;
    if (score >= 85 && score <= 87) return 2.00;
    if (score >= 83 && score <= 84) return 2.25;
    if (score >= 80 && score <= 82) return 2.50;
    if (score >= 78 && score <= 79) return 2.75;
    if (score >= 75 && score <= 77) return 3.00;
    if (score < 75) return 5.00;
}

module.exports = { grade };