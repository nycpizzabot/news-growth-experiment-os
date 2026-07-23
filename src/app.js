import { DEFAULT_WEIGHTS, buildBrief, rankExperiments } from './core.js';

let experiments = [
  { id: 1, title: 'Story-aware follow-up module', action: 'offer an editor-reviewed developing-story newsletter after relevant reads', metric: '7-day activation', rationale: 'the offer matches a demonstrated reader need', success: '+8% qualified activation', guardrail: 'Unsubscribes ≤ +0.15 pp', review: 'Audience editor approves clusters weekly', reach: 80, impact: 8, confidence: 72, effort: 4, aiFit: 8 },
  { id: 2, title: 'AI onboarding subject-line assist', action: 'generate three voice-safe subject-line candidates for new subscribers', metric: 'first-issue open rate', rationale: 'relevance can improve without automating editorial judgment', success: '+5% first-open rate', guardrail: 'No spam-complaint increase', review: 'Newsletter editor chooses final copy', reach: 65, impact: 5, confidence: 68, effort: 2, aiFit: 6 },
  { id: 3, title: 'Reader question digest', action: 'summarize recurring reader questions for a weekly service newsletter', metric: 'newsletter retention', rationale: 'the newsletter can resolve known information gaps', success: '+3% 30-day retention', guardrail: 'Topic diversity maintained', review: 'Reporter verifies claims and links', reach: 40, impact: 7, confidence: 55, effort: 5, aiFit: 9 }
];
let weights = { ...DEFAULT_WEIGHTS };
let selectedId = 1;
const $ = selector => document.querySelector(selector);

function render() {
  const ranked = rankExperiments(experiments, weights);
  $('#backlog').innerHTML = ranked.map(x => `<button class="row ${x.id === selectedId ? 'selected' : ''}" data-id="${x.id}"><span><strong>${x.title}</strong><small>${x.success} · ${x.guardrail}</small></span><b>${x.score}</b></button>`).join('');
  const selected = experiments.find(x => x.id === selectedId) || ranked[0];
  selectedId = selected.id;
  const brief = buildBrief(selected);
  $('#brief').innerHTML = `<p class="eyebrow">EXPERIMENT BRIEF</p><h2>${brief.title}</h2><h3>Hypothesis</h3><p>${brief.hypothesis}</p><div class="cards"><div><span>Success</span><strong>${brief.success}</strong></div><div><span>Guardrail</span><strong>${brief.guardrail}</strong></div></div><h3>Human review</h3><p>${brief.review}</p>`;
  document.querySelectorAll('.row').forEach(el => el.onclick = () => { selectedId = Number(el.dataset.id); render(); });
}

document.querySelectorAll('[data-weight]').forEach(input => input.oninput = () => { weights[input.dataset.weight] = Number(input.value); render(); });
$('#experiment-form').onsubmit = event => {
  event.preventDefault(); const data = new FormData(event.currentTarget);
  const title = String(data.get('title')).trim(); if (!title) return;
  experiments.push({ id: Date.now(), title, action: String(data.get('action')).trim() || 'test a reader-relevant intervention', metric: String(data.get('metric')).trim() || 'activation', rationale: String(data.get('rationale')).trim() || 'it better serves a reader need', success: String(data.get('success')).trim() || 'Define success before launch', guardrail: 'No material negative reader impact', review: 'Growth and editorial review', reach: Number(data.get('reach')) || 50, impact: Number(data.get('impact')) || 5, confidence: Number(data.get('confidence')) || 50, effort: Number(data.get('effort')) || 3, aiFit: Number(data.get('aiFit')) || 5 });
  selectedId = experiments.at(-1).id; event.currentTarget.reset(); render();
};
render();
