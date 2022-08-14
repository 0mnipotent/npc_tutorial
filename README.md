Following these instructions, you will learn how to interact with the blockchain.

1. Create a CentOS 7 VM. CentOS7 ISO can be downloaded from http://isoredirect.centos.org/centos/7/isos/x86_64/ or you can use my referral link with Vultr to purchase a cheap $5/month CentOS7 VM (https://www.vultr.com/?ref=7185697)
2. After installing/purchasing a CentOS7 VM, run the below command to update your system:
```yum update -y```
3. Run the below commands to install some additional components:
```yum install epel-release```
```yum install wget vim screen -y```
4. Run the script "centos_install_node.sh" to install NodeJS & NPM.
```curl -s "https://raw.githubusercontent.com/0mnipotent/npc_tutorial/main/centos_install_node.sh" | bash -```
5. Create some structure.
```mkdir -p /home/npc/scripts```
6. Run the script "check_drip_balance.js" to find the drip balance of a wallet, change my wallet address for the wallet you want to check.
```curl -s "https://raw.githubusercontent.com/0mnipotent/npc_tutorial/main/check_drip_balance.js" > /home/npc/scripts/drip_balance.js```
``sed -i 's/YOUR WALLET ADDRESS/``0x14d63Bfa46d8C91fbf16fE233316d5A265830b24``/g' /home/npc/scripts/drip_balance.js``
```node /home/npc/scripts/drip_balance.js```
