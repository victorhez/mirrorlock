# MirrorLock Architecture

## Principle
The LLM can reason, but it cannot override deterministic risk controls. Every proposed execution passes through the risk gate.

```text
Market / User thesis
        |
        v
Perception adapter -----> normalized MarketSnapshot
        |
        v
Trader Agent ------------> Proposal
        |
        v
Mirror Agent ------------> Counter-case
        |
        v
Risk Guardian -----------> deterministic PASS/WARN/BLOCK
        |
        v
Judge -------------------> EXECUTE / WAIT / REJECT
        |
        +----> Decision memory / replay / share card
        |
        +----> Paper execution adapter
```

## Production adapter boundary
`lib/market.ts` is the market adapter. Replace its demo provider with Bitget Agent Hub / Signal skill integration. `lib/ai.ts` is the LLM boundary. Add a Qwen adapter there. Keep `lib/engine.ts` deterministic and authoritative.

## Security
- Never expose exchange secrets to the browser.
- Never let LLM output directly place orders.
- Validate all server inputs with Zod.
- Keep paper mode as the default.
- Add auth/RLS before multi-user production deployment.
