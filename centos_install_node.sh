#!/bin/bash

# Update your system
yum update -y

# Install epel-release
yum install epel-release -y

# Install NodeJS & NPM
yum install nodejs npm -y
