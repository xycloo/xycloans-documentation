---
sidebar_position: 1
---

# xycLoans
### Flash Loans and Liquidity Protocol on Soroban

XycLoans is a flash loans protocol implemented for the Soroban Virtual Machine. The protocol manages its liquidity through its vaults, where lenders provide liquidity in exchange of yield generated from flash loan fees. The protocol allows contracts to flash loan any available amount of liquidity as long as they repay the debt within the same transaction. The protocol is structured in pools, an abstract concept for a flash loan + vault pair, which are implemeted as a closed circuit to keep the funds as safe and liquidity provider-controlled as possible.

:::tip Learning more about xycLoans

You'll be able to read more about the core's structure in the Whitepaper, which we are finishing to write. In the meantime, you can start playing around with xycLoans on futurenet.

:::
