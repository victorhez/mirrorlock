import {Analysis} from '@/types';
const key='mirrorlock-runs';
export function saveRun(a:Analysis){if(typeof window==='undefined')return; const xs:Analysis[]=JSON.parse(localStorage.getItem(key)||'[]'); localStorage.setItem(key,JSON.stringify([a,...xs].slice(0,100)));}
export function getRuns():Analysis[]{if(typeof window==='undefined')return []; try{return JSON.parse(localStorage.getItem(key)||'[]')}catch{return[]}}
export function savePaperTrade(t:any){if(typeof window==='undefined')return; const k='mirrorlock-paper'; const xs=JSON.parse(localStorage.getItem(k)||'[]'); localStorage.setItem(k,JSON.stringify([t,...xs].slice(0,100)));}
export function getPaperTrades(){if(typeof window==='undefined')return [];try{return JSON.parse(localStorage.getItem('mirrorlock-paper')||'[]')}catch{return[]}}
