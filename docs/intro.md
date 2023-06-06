---
sidebar_position: 1
---

# xycLoans
### Flash Loans and Liquidity Protocol on Soroban

:::warning

xycLoans is still under development and both its core and interface will undergo changes. As is, the code is unaudited and it shouldn't be used to determine standards or to use its logic to handle real assets.

:::

XycLoans is a flash loans protocol implemented for the Soroban Virtual Machine. The protocol manages its liquidity through its vaults, where lenders provide liquidity in exchange of yield generated from flash loan fees. The protocol allows contracts to flash loan any available amount of liquidity as long as they repay the debt within the same transaction. The protocol is structured in pools, an abstract concept for a flash loan + vault pair, which are implemeted as a closed circuit to keep the funds as safe and liquidity provider-controlled as possible.


### The release

This is the first release of xycLoans where we encourage users to try the protocol, and we do so offering documentation and the webapp. Don't hesitate to reach out and open an issue on Github if you experience errors, or think you found a vulnerability in the protocol.

Below are the appropriate pages to report issues/questions:
- [core](https://github.com/xycloo/xycloans) if the ticket relates to the protocol's contracts (also the receiver contract).
- [interface](https://github.com/xycloo/xycloans-interface) if the ticket relates to the interface.

If you have any questions about xycLoans, you are welcome to ask them in the [discord server](https://discord.com/invite/w7fBhSS34Q).
