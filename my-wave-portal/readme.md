# my wave portal
Build a Web3 App with Solidity + Ethereum Smart Contracts
by buildspace.so

[Lien du project](https://app.buildspace.so/projects/CO02cf0f1c-f996-4f50-9669-cf945ca3fb0b)

Project réalisé et documenté par [Fabrice Geib](https://fabricegeib.com)

### Create the project

- Créer le dossier ```my-wave-portal```
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