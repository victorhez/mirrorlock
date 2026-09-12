# Hackathon Submission Pack

## One-line pitch
MirrorLock is the AI that argues with your trade before you risk money.

## Problem
AI trading systems can make confident decisions from incomplete, contradictory, or already-priced-in information. Users need a way to challenge a thesis before execution.

## Solution
MirrorLock turns every trade idea into an adversarial review: Trader builds the case, Mirror attacks it, Risk Guardian enforces hard limits, and Judge produces a simple verdict.

## LLM role
The LLM is used for market/thesis interpretation, bull-case generation, counterargument generation, and plain-language explanations. It does not control hard risk limits or directly place orders.

## Validation
Use paper-trading run logs to measure: approval rate, blocked trade rate, confidence/evidence gap, simulated PnL, drawdown, false-positive rate, and how often Mirror objections predicted poor outcomes.

## Differentiator
Confidence Gap: the product explicitly compares how sure the user/agent feels against the quality of available evidence.

## Demo
The primary flow is: user trade idea → market snapshot → bull case → mirror case → risk gate → verdict → paper execution → decision memory.

## Social post template
Building MirrorLock — an AI that challenges your trade before the market does. It doesn't just ask “what should I buy?” It asks “why should I trust this decision?” #BitgetHackathon @Bitget_AI
