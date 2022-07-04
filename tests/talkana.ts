import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Talkana } from "../target/types/talkana";

describe("talkana", () => {
  const provider = anchor.AnchorProvider.env()
  anchor.setProvider(provider)

  const program = anchor.workspace.Talkana as Program<Talkana>

  it("Send a new tweet!", async () => {
    const msg = anchor.web3.Keypair.generate()
    
    const tx = await program.rpc.sendMessage("solana", "I love solana!", {
      accounts: {
        message: msg.publicKey,
        author: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      },
      signers: [msg]
    })
    const msgAccount = await program.account.message.fetch(msg.publicKey)
    console.log(msgAccount);
    

  })
})