# hexo-deployer-ipfs
## this is extension for hexo to deploy static sites to ipfs network.

Installation
Using npm
> cd 'your hexo project'
> npm i --save hexo-deployer-ipfs

Configuration
in your _config.yml file, configure a deployer as below.

```yaml
deploy:
- type: ipfs        # required, value is 'ipfs', type string
  path: public      # your folder, by default public, type string
  protocol: http    # protocol, by default http, type string
  host: localhost   # your ipfs node hostname, by default localhost, type string
  port: 5001        # your ipfs port, by default 5001, type integer
  key: self         # your ipfs keypair, by default self, type string
```