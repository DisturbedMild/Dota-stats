export function calculateWilsonScore(successes: number, total: number, confidence = 0.95): number {
  if (total === 0) return 0;

  const z = getZScore(confidence)!;
  const p = successes / total;

  const score = (p + ((z * z) / (2 * total)) - (z * Math.sqrt((p * (1 - p)) / total + (z * z) / (4 * total * total)))) /
    (1 + ((z * z) / total));

  return Number((score * 100 + 1).toFixed(0));
}

function getZScore(confidence: number) {
  // Значення z для 95% довіри
  if (confidence === 0.95) {
    return 1.96;
  } else {
    return null;
  }
}

// Example:
// const successes = 50; success results
// const total = 100;  experiments
// const confidence = 0.95;  confidence level
// const wilsonScore = calculateWilsonScore(successes, total, confidence);
