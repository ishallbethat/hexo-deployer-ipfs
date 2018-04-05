# hexo-deployer-ipfs
## this is extension for hexo to deploy static sites to ipfs network.

### Installation
#### Using npm
> cd 'your hexo project' <br>
> npm i --save hexo-deployer-ipfs <br>

### Configuration
#### in your _config.yml file, configure a deployer as below.

  >deploy: <br>
 \- ipfs: &ensp;"required, value is 'ipfs', type string" <br>
    &ensp;path: &ensp;"your folder, by default it's public, type string" <br>
    &ensp;host: &ensp;"your ipfs node hostname, by default localhost, type string" <br>
    &ensp;port: &ensp;"your ipfs port, by default 5001, type integer" <br>
    &ensp;protocol: &ensp;"protocol, by default http, type string" <br>
