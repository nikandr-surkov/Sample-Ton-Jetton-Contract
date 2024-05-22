import { Address, toNano } from '@ton/core';
import { SampleJetton } from '../wrappers/SampleJetton';
import { NetworkProvider } from '@ton/blueprint';
import { buildOnchainMetadata } from '../utils/jetton-helpers';

export async function run(provider: NetworkProvider) {
    const jettonParams = {
        name: "Nikandr Token",
        description: "Official token of the Nikandr Surkov Youtube channel :) https://www.youtube.com/@NikandrSurkov",
        symbol: "NIKANDR",
        image: "https://violet-traditional-rabbit-103.mypinata.cloud/ipfs/QmUgZ3kWg36tCVSZeVKXkvsdXkn6dqigqjoBZto9Y8h37z",
    };

    // Create content Cell
    let content = buildOnchainMetadata(jettonParams);

    const sampleJetton = provider.open(await SampleJetton.fromInit(provider.sender().address as Address, content, 1000000000000000000n));

    await sampleJetton.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Mint',
            amount: 100000000000000000n,
            receiver: provider.sender().address as Address
        }
    );

    await provider.waitForDeploy(sampleJetton.address);

    // run methods on `sampleJetton`
}
