import {Asset} from '@/types';

const base:Asset[]=[
  {symbol:'BTCUSDT',name:'Bitcoin',price:65000,change24h:2.3,volatility:46,category:'crypto'},
  {symbol:'ETHUSDT',name:'Ethereum',price:2700,change24h:-1.1,volatility:52,category:'crypto'},
  {symbol:'SOLUSDT',name:'Solana',price:145,change24h:4.8,volatility:74,category:'crypto'},
  {symbol:'NVDA',name:'NVIDIA',price:174.5,change24h:1.8,volatility:39,category:'tokenized-stock'},
  {symbol:'TSLA',name:'Tesla',price:338.2,change24h:-2.4,volatility:57,category:'tokenized-stock'},
  {symbol:'AAPL',name:'Apple',price:232.1,change24h:0.7,volatility:28,category:'tokenized-stock'}
];

export function getAssets(){
  return base.map(a=>({
    ...a,
    price:a.price*(1+(Math.random()-0.5)*0.004),
    change24h:a.change24h+(Math.random()-0.5)*0.4
  }));
}

export function getAsset(symbol:string){
  return getAssets().find(a=>a.symbol===symbol)||getAssets()[0];
}

function num(v:any,fallback:number):number{const n=typeof v==='string'?parseFloat(v):Number(v);return Number.isFinite(n)?n:fallback}

export async function getLiveAssets():Promise<Asset[]>{
  try{
    const r=await fetch('https://api.bitget.com/api/v2/spot/market/tickers',{cache:'no-store'});
    if(!r.ok)throw new Error('market fetch failed');
    const j=await r.json();
    const wanted=new Set(['BTCUSDT','ETHUSDT','SOLUSDT']);
    const live:(Asset[])=(j.data||[]).filter((x:any)=>wanted.has(x.symbol)).map((x:any)=>{
      const b=base.find(a=>a.symbol===x.symbol);
      if(!b)return null as any;
      const price=num(x.lastPrice,b.price);
      const change24h=num(x.price24hPcnt,b.change24h/100)*100;
      return {...b,price,change24h:Number.isFinite(change24h)?change24h:b.change24h,volatility:b.volatility};
    }).filter(Boolean);
    const xs=[...live,...base.filter(a=>!wanted.has(a.symbol))];
    return xs.length===base.length?xs:getAssets();
  }catch{return getAssets()}
}

export function resolveLiveAsset(xs:Asset[],symbol:string){
  return xs.find(a=>a.symbol===symbol)||getAsset(symbol);
}

export async function getLiveAsset(symbol:string):Promise<Asset>{
  const xs=await getLiveAssets();
  return resolveLiveAsset(xs,symbol);
}
