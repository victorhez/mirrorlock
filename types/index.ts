export type Side='BUY'|'SELL'|'HOLD';
export type Asset={symbol:string;name:string;price:number;change24h:number;volatility:number;category:'crypto'|'tokenized-stock'};
export type TradeIdea={asset:Asset;side:Side;confidence:number;thesis:string;amount:number};
export type Analysis={id:string;asset:Asset;side:Side;confidence:number;evidenceQuality:number;confidenceGap:number;verdict:'EXECUTE'|'WAIT'|'REJECT';headline:string;bullCase:string[];mirrorCase:string[];risks:string[];whatChangesMind:string[];entryLow:number;entryHigh:number;invalidation:number;maxRiskPct:number;rr:number;agents:{name:string;role:string;status:'PASS'|'WARN'|'BLOCK';summary:string}[];marketSnapshot:{price:number;change24h:number;volatility:number;volumeScore:number};createdAt:string};
