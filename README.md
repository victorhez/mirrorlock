# MirrorLock 🪞

**Challenge your trade before the market does.**

MirrorLock is an adversarial AI trading copilot for the Bitget hackathon. A user submits a trade idea, confidence, and thesis. MirrorLock builds the bull case, attacks the thesis, applies deterministic risk controls, and returns a clear `EXECUTE`, `WAIT`, or `REJECT` verdict. Approved ideas can be simulated in paper mode.

## What is included

- Premium responsive Next.js/TypeScript UI
- Guided Challenge a Trade flow
- BTC / ETH / SOL plus tokenized-stock placeholders
- Confidence Gap signature feature
- Trader / Mirror / Risk Guardian / Judge agent model
- Deterministic risk gate that is independent of the LLM
- Paper trade journal + CSV export
- Decision-memory insights
- API routes for challenge, market, paper trades and sharing
- Supabase schema for production persistence
- AI provider and exchange adapter boundaries
- Architecture and deployment notes

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

The default `AI_PROVIDER=demo` makes the entire product runnable without credentials. The market API uses Bitget public spot tickers when reachable and falls back to deterministic demo data. This is intentional: the hackathon demo should never break because an external model or exchange credential is unavailable.

## Connect Qwen

Implement the provider in `lib/ai.ts` and set `AI_PROVIDER=qwen`. The UI does not change. Preserve the deterministic gate in `lib/engine.ts`.

## Connect Bitget

Implement the market and execution adapters behind `lib/market.ts` and the paper-trade API route. Keep credentials server-side. Set `BITGET_PAPER=true` during the competition demo.

## Production persistence

Run `supabase/schema.sql`, configure Supabase variables, then replace browser `localStorage` in `lib/store.ts` with authenticated Supabase calls. Add RLS policies scoped to `auth.uid()` before enabling user accounts.


## Competition story

> **The most dangerous AI isn't the one that makes mistakes. It's the one that never questions itself.**

MirrorLock turns AI self-doubt into a risk-control layer.

## Safety

This project is paper-trading first and is not financial advice. Never connect live exchange credentials for a hackathon demo unless the competition explicitly requires it and the execution controls have been independently tested.

### Current integration notes

Bitget UTA v3 exposes public spot tickers at `/api/v3/market/tickers`; Bitget demo trading uses a Demo API key and the `paptrading: 1` header. The included `lib/bitget.ts` implements the signed demo spot order path; keep `BITGET_PAPER=true`.

Qwen Model Studio supports OpenAI-compatible chat completions. Set `AI_PROVIDER=qwen`, `QWEN_API_KEY`, `QWEN_BASE_URL`, and `QWEN_MODEL` to enable LLM enrichment. The deterministic risk verdict remains authoritative.
