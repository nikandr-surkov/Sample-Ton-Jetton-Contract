# Sample Ton Jetton Contract

<div align="center">
  <img src="https://nikandr.com/og-image.jpg" alt="Nikandr - Premium Telegram Development Resources" width="600"/>
  
  🚀 **Looking to master Telegram Mini App development?**  
  Visit [nikandr.com](https://nikandr.com) for the best premium content and courses for Telegram developers.
</div>

---

This repository contains a blueprint project for creating and deploying a Jetton contract on the TON blockchain. The project includes the smart contract written in the Tact language and a deploy script that allows users to customize their Jetton token's attributes, such as name, description, symbol, and image.

Check my Youtube [Nikandr Surkov](https://www.youtube.com/@NikandrSurkov) for more tutorials and guides.

## Features

- **Ton Jetton Smart Contract**: Written in Tact language, the contract includes features such as minting, burning, and transferring tokens.
- **Deploy Script**: Easily customizable script to deploy your Jetton contract with personalized attributes.
- **Maximum Supply Control**: Ensure the total supply of tokens cannot exceed a specified limit.
- **Mintable Flag**: Control whether new tokens can be minted after deployment.
- **Owner Permissions**: Only the owner can mint new tokens and update certain contract parameters.

## Customizable Attributes

Before deploying the contract, you can update the following attributes in the deploy script:

- **Name**: The name of your Jetton token.
- **Description**: A brief description of your Jetton token.
- **Symbol**: The symbol representing your Jetton token.
- **Image**: A URL or IPFS link to an image representing your Jetton token.

## How to Use

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/nikandr-surkov/Sample-Ton-Jetton-Contract.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd sample-ton-jetton-contract
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```

4. **Build the Contract**:
    ```bash
    npx blueprint build
    ```

5. **Customize the Deploy Script**:
    - Open the `deploy.js` file.
    - Update the `name`, `description`, `symbol`, and `image` variables with your desired values.

6. **Deploy the Contract**:
    ```bash
    npx blueprint run
    ```

## Contract Overview

### Ton Jetton Contract

The Ton Jetton contract is based on the TEP-74 standard and includes the following features:

- **Minting**: Allows the owner to mint new tokens up to the maximum supply.
- **Burning**: Enables token holders to burn their tokens, reducing the total supply.
- **Transferring**: Supports transferring tokens between addresses.
- **Metadata**: Stores metadata such as name, description, symbol, and image URL.

### Example Initialization

```tact
init(owner: Address, content: Cell, max_supply: Int) {
    self.totalSupply = 0;
    self.owner = owner;
    self.mintable = true;
    self.content = content;
    self.max_supply = max_supply;
}
```

### Example Minting Function

```tact
receive(msg: Mint) {
    let ctx: Context = context();
    require(ctx.sender == self.owner, "Not Owner");
    require(self.mintable, "Can't Mint Anymore");
    self.mint(msg.receiver, msg.amount, self.owner);
}
```

## Author
### Nikandr Surkov
- 🌐 Website: https://nikandr.com
- 📺 YouTube: https://www.youtube.com/@NikandrSurkov
- 📢 Telegram Channel: https://t.me/NikandrApps
- 📱 Telegram: https://t.me/nikandr_s
- 💻 GitHub: https://github.com/nikandr-surkov
- 🐦 Twitter: https://x.com/NikandrSurkov
- 💼 LinkedIn: https://www.linkedin.com/in/nikandr-surkov/
- ✍️ Medium: https://medium.com/@NikandrSurkov

---

Built with ❤️ for the Telegram developer community
