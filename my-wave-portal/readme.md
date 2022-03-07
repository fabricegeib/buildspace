# my wave portal
Build a Web3 App with Solidity + Ethereum Smart Contracts
by buildspace.so

[Lien du project](https://app.buildspace.so/projects/CO02cf0f1c-f996-4f50-9669-cf945ca3fb0b)

Project réalisé et documenté par [Fabrice Geib](https://fabricegeib.com)

### Create the project

- Créer le dossier ```my-wave-portal```
- Crée un fichier ```.gitignore``` et y ajouter ```node_modules/```
- Initialiser npm
- Installer hardhat

```shell
mkdir my-wave-portal
cd my-wave-portal
npm init -y
npm install --save-dev hardhat
```

### Hardhat sample

Créer un exemple basique de projet avec Hardhat
```
npx hardhat
```

- Sélectionner l'option "Create a basic sample project"
- Confirmer et valider le chemin du projet "Hardhat project root"
- Ajouter ou non hardhat à ```.gitignore``` (Y/n)

Les paquets / dépendances qu'il faut installer afin de lancer le projet :
(You need to install these dependencies to run the sample project)

```shell
npm install --save-dev "hardhat@^2.9.1" "@nomiclabs/hardhat-waffle@^2.0.0" "ethereum-waffle@^3.0.0" "chai@^4.2.0" "@nomiclabs/hardhat-ethers@^2.0.0" "ethers@^5.0.0"
```

Les paquets / dépendances à installer ils n'ont pas été automatiquement ajouter ou proposé
```shell
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
npx hardhat accounts
```


Cela doit retourner plusieurs chaînes comme celle-ci : ```0xa0Ee7A142d267C1f36714E4a8F75612F20a79720```

Dans mon cas cela me retourne :
```
0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
0x70997970C51812dc3A010C7d01b50e0d17dc79C8
0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
0x90F79bf6EB2c4f870365E785982E1f101E93b906
0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65
0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc
0x976EA74026E726554dB657fA54763abd0C3a0aa9
0x14dC79964da2C08b23698B3D3cc7Ca32193d9955
0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f
0xa0Ee7A142d267C1f36714E4a8F75612F20a79720
0xBcd4042DE499D14e55001CcbB24a551F3b954096
0x71bE63f3384f5fb98995898A86B02Fb2426c5788
0xFABB0ac9d68B0B445fB7357272Ff202C5651694a
0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec
0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097
0xcd3B766CCDd6AE721141F452C550Ca635964ce71
0x2546BcD3c84621e976D8185a91A922aE77ECEc30
0xbDA5747bFD65F08deb54cb465eB87D40e51B197E
0xdD2FD4581271e230360230F9337D5c0430Bf44C0
0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199
```

#### Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

### Run it

Vérifier que tout fonctionne en executant les commandes suivantes

```shell
npx hardhat compile
```

En retour vous devez avoir un message semblable à celui-ci :
```
Compiled 2 Solidity files successfully
```

Puis lancer :

```shell
npx hardhat test
```

En retour le terminal affiche :
```shell
  Greeter
Deploying a Greeter with greeting: Hello, world!
Changing greeting from 'Hello, world!' to 'Hola, mundo!'
    ✔ Should return the new greeting once it's changed (1062ms)


  1 passing (1s)
```

Trois nouveaux dossiers ont été créés dans votre project :
- ```contracts``` contenant un fichier ```Gretter.sol```
- ```scripts``` contenant un fichier ```sample-script.js```
- ```test``` contenant un fichier ```sample-test.js```

Afin de faire un peu de ménage vous pouvez supprimer les fichiers mais conservés les dossiers, nous allons en avoir besoin prochainement

### Let's write a contract

Dans le dossier ```contracts``` crée un nouveau fichier ```WavePortal.sol```
(La structure des fichiers est importante, soyez prudent)

```sol
// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }
}
```

Vérifier que vous utilisez la même version de Solidity dans ```WavePortal.sol``` et ```hardhat.config.js```

### Build a script to run our contract

Dans le dossier script crée un fichier ```run.js```

```js
const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log("Contract deployed to:", waveContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();
```

This will actually compile our contract and generate the necessary files we need to work with our contract under the artifacts directory. Go check it out after you run this :)

his is pretty fancy :). 
What's happening here is Hardhat will create a local Ethereum network for us, but just for this contract. Then, after the script completes it'll destroy that local network. So, every time you run the contract, it'll be a fresh blockchain. What's the point? It's kinda like refreshing your local server every time so you always start from a clean slate which makes it easy to debug errors.

We'll wait until our contract is officially deployed to our local blockchain! Our constructor runs when we actually deploy.

Finally, once it's deployed waveContract.address  will basically give us the address of the deployed contract. This address is how we can actually find our contract on the blockchain. There are millions of contracts on the actual blockchain. So, this address gives us easy access to the contract we're interested in working with! This will be more important a bit later once we deploy to a real Ethereum network.

Executer le script ```run.js```

```shell
npx hardhat run scripts/run.js
```

Retour 

```
Compiled 1 Solidity file successfully
Yo yo, I am a contract and I am smart
Contract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

### Store the data

Mettre à jour le fichier ```WavePortal.sol```

```sol
// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}
```

Faire de même le fichier ```run.js```

```js
const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
```

Excutez à nouveau votre script ```run.js```

```shell
npx hardhat run scripts/run.js
```

Retour dans le terminal

```shell
Compiled 1 Solidity file successfully
Yo yo, I am a contract and I am smart
Contract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Contract deployed by: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
We have 0 total waves!
0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 has waved!
We have 1 total waves!
```

### Test other users
```js
waveTxn = await waveContract.connect(randomPerson).wave();
await waveTxn.wait();

waveCount = await waveContract.getTotalWaves();
```

Retour
```shell
Yo yo, I am a contract and I am smart
Contract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Contract deployed by: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
We have 0 total waves!
0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 has waved!
We have 1 total waves!
0x70997970c51812dc3a010c7d01b50e0d17dc79c8 has waved!
We have 2 total waves!
```

Customize your code a little!! Maybe you want to store something else? I want you to mess around. Maybe you want to store the address of the sender in an array? Maybe you want to store a map of addresses and wave counts so you keep track of who's waving at you the most? Even if you just change up the variable names and function names to be something you think is interesting that's a big deal. Try to not straight up copy me! Think of your final website and the kind of functionality you want. Build the functionality you want.

### Writing a script to deploy locally

Ouvrir un 2ème terminal et executer la commande

```shell
npx hardhat node
```

You just started a local Ethereum network that stays alive. And, as you can see Hardhat gave us 20 accounts to work with and gave them all 10000 ETH we are now rich!

Dans le dossier script crée un nouveau fichier ```deploy.js```

```js
const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("WavePortal address: ", waveContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
```

Executer le fichier ```deploy.js```

```shell
npx hardhat run scripts/deploy.js --network localhost
```

Retour dans le terminal

```shell
Account balance:  10000000000000000000000
WavePortal address:  0x5FbDB2315678afecb367f032d93F642f64180aa3
```

### Push online

https://buildspace-my-wave-portal-app-fabrice.vercel.app/

### Utiliser Alchemy

Installer le paquet ```dotenv``` pour ne pas diffuser vos clés privées [Alchemy](https://dashboard.alchemyapi.io/) ou [Metamask](https://metamask.io/)

```shell
npm 
install dotenv
```

Créer un fichier ```.env``` content les url et clés privées dont vous avez besoin

```
ALCHEMY_API_URL_RINKEBY="https://eth-rinkeby.alchemyapi.io/v2/xxx"
PRIVATE_KEY="xxx"
```

Mettre à jour le fichier ```hardhat.config.js```

```js
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_URL_RINKEBY,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
};
```

```shell
npx hardhat run scripts/deploy.js --network rinkeby
```
Retour
```shell
Deploying contracts with account:  0x1151B473355f42bD97eAf2A5721c6825318d178F
Account balance:  39826994638806774425
WavePortal address:  0x38FafaC0faf61A1FF4cB89941b5d68347Ff92032
```

Lien vers le contract crée : https://rinkeby.etherscan.io/address/0x38fafac0faf61a1ff4cb89941b5d68347ff92032