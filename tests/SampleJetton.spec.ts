import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { SampleJetton } from '../wrappers/SampleJetton';
import '@ton/test-utils';

describe('SampleJetton', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let sampleJetton: SandboxContract<SampleJetton>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        sampleJetton = blockchain.openContract(await SampleJetton.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await sampleJetton.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: sampleJetton.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and sampleJetton are ready to use
    });
});
