// Run with: node tests/scoring-test.js
// Loads the pure scoring and palette code from js/app.js (no browser needed) and prints results.
const fs=require('fs'),path=require('path');
const src=fs.readFileSync(path.join(__dirname,'../js/app.js'),'utf8');
const a=src.indexOf('const SEASONS='),b=src.indexOf('const S={'),c=src.indexOf('const h2r='),d=src.indexOf('function run()');
const core=src.slice(a,b)+'const S={under:null,depth:null,age:null,traits:new Set()};\n'+src.slice(c,d)+'\nreturn {S,build,T};';
const {S,build,T}=new Function(core)();
function run(u,dp,ag,tr){S.under=u;S.depth=dp;S.age=ag;S.traits=new Set(tr);const r=build();return{primary:r.r.p,secondary:r.r.s,scores:r.r.sc,colours:r.base.length,value:+r.m.l.toFixed(1),chroma:+r.m.s.toFixed(1),coolness:Math.round(r.m.cool)}}
const cases=[
['Brief example',['warm','medium','adult',['Energetic','Passionate','Brave']]],
['Mysterious and intense',['cool','pale','adult',['Mysterious','Intense']]],
['Calm and elegant',['cool','pale','adult',['Calm','Elegant']]],
['Cute child',['warm','deep','child',['Cute','Energetic']]],
['Wise and royal elder',['cool','medium','elderly',['Wise','Royal']]],
['Contradictory traits',['warm','medium','adult',['Calm','Villainous']]],
['Single trait',['cool','deep','adult',['Earthy']]]];
for(const [n,args] of cases)console.log(n.padEnd(24),JSON.stringify(run(...args)));
console.log('\nAge effect (same traits, warm medium):');
for(const ag of['child','adult','elderly'])console.log(ag.padEnd(10),JSON.stringify(run('warm','medium',ag,['Energetic','Passionate','Brave'])));
console.log('\nSkin depth effect (same traits, warm adult):');
for(const dp of['pale','medium','deep'])console.log(dp.padEnd(10),JSON.stringify(run('warm',dp,'adult',['Energetic','Passionate','Brave'])));
console.log('\nTraits defined:',Object.keys(T).length);
