# News Growth Experiment OS

A product-management exercise for an AI-enabled news growth team. The prototype turns a pile of plausible ideas into an experiment backlog with visible assumptions about reach, impact, confidence, effort, and AI fit.

I built it to practice making prioritization logic inspectable. The score is not an oracle and it is not an automatic roadmap; it is a way for a PM, editor, designer, and engineer to disagree in the open.

## What this explores

- Transparent RICE-style prioritization
- Experiment briefs and measurable hypotheses
- News-specific guardrails such as unsubscribe rate and editorial workload
- Keeping AI assistance bounded by human review
- Testable product logic separated from the UI

## Run it

No package install is required:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Run the business-rule tests with:

```bash
node --test tests/core.test.mjs
```

## Files worth opening

- `src/core.js` — scoring and brief-generation rules
- `src/app.js` — the small UI layer
- `docs/product-brief.md` — the product reasoning behind the prototype

The data is fictional. The interesting part is the decision model, not the demo numbers.
