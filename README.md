# News Growth Experiment OS

A product-management portfolio prototype for an AI-enabled news team: turn audience insights into a prioritized, measurable experiment backlog.

![Status](https://img.shields.io/badge/status-prototype-5B5BD6) ![No build step](https://img.shields.io/badge/build-none-success)

## Why this exists
News growth teams often receive a flood of plausible ideas—better onboarding, smarter newsletter recommendations, personalized paywalls—without a shared way to compare them. This prototype makes the trade-offs explicit:

- **Reach:** how many eligible readers the idea can affect
- **Impact:** expected movement in a north-star metric
- **Confidence:** strength of evidence, not enthusiasm
- **Effort:** engineering/design/ops cost
- **AI fit:** whether AI creates a meaningful advantage, with human review intact

The app ranks candidates with a transparent RICE-style score and produces a compact experiment brief a cross-functional team can debate.

## Product case study
**Problem:** editorial and growth teams need to decide which AI-assisted ideas deserve a two-week experiment.

**Primary user:** growth PM / audience editor.

**North-star metric:** qualified newsletter subscriber activation (a subscriber who opens at least one issue in their first seven days).

**Guardrails:** unsubscribe rate, spam complaints, editorial workload, and recommendation diversity.

**MVP decision:** prioritize a human-reviewed “follow this developing story” newsletter module over a black-box personalization system. It is smaller, explainable, and testable.

See [`docs/product-brief.md`](docs/product-brief.md) for assumptions, metrics, and the discovery plan.

## Run locally
No package install is required.

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Or open `index.html` directly in a modern browser.

## Test

```bash
node --test tests/core.test.mjs
```

## What to look at

| File | Purpose |
| --- | --- |
| `index.html` | usable prototype with seed backlog |
| `src/core.js` | ranking, score, and experiment-brief logic |
| `src/app.js` | thin UI layer and accessible interactions |
| `docs/product-brief.md` | PM framing, hypotheses, and measurement |
| `tests/core.test.mjs` | executable business-rule tests |

## Demo workflow
1. Adjust the importance weights in the control panel.
2. Add an experiment with the short form.
3. Select a row to inspect its generated brief.
4. Use the score as a conversation starter—not an automatic roadmap.

## Portfolio talking points
- I translated ambiguous AI-news opportunities into an explicit prioritization model.
- I paired a growth metric with reader and editorial guardrails.
- I kept the AI role bounded: assistance and recommendations, with accountability remaining human.
- I made the scoring logic testable and inspectable rather than hiding it behind a dashboard.

## Next iterations
- Import anonymized newsletter cohort data.
- Add a pre-registration checklist and experiment status workflow.
- Connect to a warehouse/query layer and show confidence intervals.
- Run usability sessions with an audience editor and lifecycle marketer.

## License
MIT. Demo data is fictional and intended only for portfolio use.
