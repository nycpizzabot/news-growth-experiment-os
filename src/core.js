export const DEFAULT_WEIGHTS = Object.freeze({ reach: 1, impact: 1, confidence: 1, effort: 1, aiFit: 1 });

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, Number(value) || 0));
}

export function scoreExperiment(experiment, weights = DEFAULT_WEIGHTS) {
  const reach = clamp(experiment.reach, 0, 100) * weights.reach;
  const impact = clamp(experiment.impact, 0, 10) * weights.impact;
  const confidence = clamp(experiment.confidence, 0, 100) / 100 * weights.confidence;
  const effort = Math.max(0.5, clamp(experiment.effort, 0, 20)) * weights.effort;
  const aiFit = clamp(experiment.aiFit, 0, 10) / 10 * weights.aiFit;
  return Number(((reach * impact * confidence * (0.5 + aiFit)) / effort).toFixed(1));
}

export function rankExperiments(experiments, weights) {
  return [...experiments].map(item => ({ ...item, score: scoreExperiment(item, weights) }))
    .sort((a, b) => b.score - a.score || a.effort - b.effort);
}

export function buildBrief(experiment) {
  return {
    title: experiment.title,
    hypothesis: `If we ${experiment.action.toLowerCase()}, then ${experiment.metric} will improve because ${experiment.rationale.toLowerCase()}.`,
    success: experiment.success,
    guardrail: experiment.guardrail,
    review: experiment.review
  };
}
