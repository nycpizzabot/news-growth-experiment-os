import test from 'node:test';import assert from 'node:assert/strict';import { scoreExperiment, rankExperiments, buildBrief } from '../src/core.js';
const base={title:'Test',action:'improve relevance',metric:'activation',rationale:'it helps',success:'+8%',guardrail:'No harm',review:'Human review',reach:50,impact:6,confidence:80,effort:4,aiFit:8};
test('score rewards reach and discounts effort',()=>{assert.ok(scoreExperiment({...base,reach:80})>scoreExperiment({...base,reach:20}));assert.ok(scoreExperiment({...base,effort:8})<scoreExperiment({...base,effort:2}));});
test('rank returns a descending immutable list',()=>{const input=[{...base,id:1,reach:20},{...base,id:2,reach:90}];const ranked=rankExperiments(input);assert.equal(ranked[0].id,2);assert.equal(input[0].score,undefined);});
test('brief includes the decision criteria',()=>{const brief=buildBrief(base);assert.match(brief.hypothesis,/activation/);assert.equal(brief.guardrail,'No harm');});
