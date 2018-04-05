# hexo-deployer-ipfs
## this is extension for hexo to deploy static sites to ipfs network.

1. Installation
Using npm
> cd <your hexo project>
> npm i --save hexo-deployer-ipfs

2. Configuration
in your _config.yml file, configure a deployer as below.
>deploy:
>- path: <your folder, by default it's public>
>  host: <your ipfs node hostname, by default localhost>
>  port: <your ipfs port, by default 5001>
>  protocol: <protocol, by default http>
