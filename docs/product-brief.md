# Product brief: AI-assisted growth experiment prioritization

## Context
A regional news publisher has steady article traffic but weak conversion from occasional readers to retained newsletter subscribers. The team has six competing ideas and one quarterly engineering allocation.

## Opportunity statement
How might we help a growth team select AI-enabled experiments that improve early newsletter activation **without** increasing unsubscribes, creating filter bubbles, or asking editors to maintain opaque automation?

## Users and jobs
- **Growth PM:** compare competing bets, document rationale, and align stakeholders.
- **Audience editor:** protect usefulness, voice, and editorial standards.
- **Lifecycle marketer:** launch variants and diagnose funnel performance.

## Hypothesis
If readers can opt into an AI-assisted, editor-reviewed developing-story follow-up after reading relevant coverage, then seven-day newsletter activation will increase by **8%**, because the offer connects to a demonstrated information need.

## Measurement plan
| Type | Metric | Decision rule |
| --- | --- | --- |
| Primary | 7-day qualified activation | +8% relative lift with 90% confidence target |
| Funnel | module impression → opt-in | diagnose relevance and UX |
| Guardrail | unsubscribe rate | no increase >0.15 percentage points |
| Guardrail | topic diversity | no reduction versus control |
| Operational | editor review time | under 20 minutes/day |

## Experiment design
- **Population:** signed-in or consented readers of eligible local-news articles.
- **Variants:** control (generic newsletter offer); treatment (story-aware follow-up offer with reason label).
- **Duration:** two full newsletter cycles; stop early only for a guardrail breach.
- **Review:** editor approves topic clusters and exclusion rules weekly.

## Ethical/product risks
1. **Over-personalization:** show a “why this recommendation” label and preserve a general-news option.
2. **Sensitive inference:** exclude health, immigration, crime-victim, and other high-sensitivity topics from targeting.
3. **Editorial drift:** AI suggests clusters; humans approve the language and coverage boundaries.
4. **False precision:** the prototype's score ranks discussion inputs, not statistical truth.

## Discovery before build
- Review 12 reader interviews about why newsletter sign-ups feel useful or noisy.
- Audit existing unsubscribe verbatims and referral paths.
- Shadow an audience editor during a newsletter planning cycle.
- Validate that consent and first-party data constraints permit the proposed eligibility rules.
