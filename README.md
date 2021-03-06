# KendallELane.com

## Goals

This is a side project between a few friends. This repo is imperfect due to it being used to teach full stack development and should not be used as production ready code. Eventually, once incremental development is complete, it will replace the current [kendallelane.com](https://www.kendallelane.com/) portfolio.

## Preview

Preview this build at [https://test.ryanspoone.com](https://test.ryanspoone.com).

## Getting Started Locally

To run, first install dependencies for both:

```bash
npm run install-all
```

Then boot both the server and the client:

```bash
npm run start
```

You should be able to visit the site at [http://localhost:1051](http://localhost:1051)

### Getting content locally

Create a `.env` file in the root of this repository and add the following:

```text
ACCESS_TOKEN="YOUR_DRIBBBLE_ACCESS_TOKEN_HERE"
SERVER_ROUTE='/api'
```

## Getting setup in prod

Install Node.js:

```bash
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash
sudo apt install nodejs
```

Clone this repo:

```bash
cd ~
git clone https://github.com/ryanspoone/kendallelane.com.git
cd kendallelane.com/
npm run install-all
```

Create a `.env` file in the root of this repository and add the following:

```text
ACCESS_TOKEN="YOUR_DRIBBBLE_ACCESS_TOKEN_HERE"
SERVER_ROUTE='/'
```

Setup PM2 to run the server:

```bash
# Install PM2
npm install pm2@latest -g

# Load and run our server code in PM2
pm2 start server/start.js --env production --update-env --name serve

# Allow PM2 to automatically start
pm2 startup
pm2 save
```

Setup nginx:

```bash
# Install nginx
sudo apt install nginx

# Edit this file to use the provided nginx.config in this repo
# Comment out everything else
sudo nano /etc/nginx/sites-available/default

# Test that your new file is valid
sudo nginx -t

# Allow nginx to read your built client code
sudo chmod -R 755 ~

# Create a symlink to where nginx is expecting code to be
sudo ln -s  ~/kendallelane.com/client/build/* /var/www/html/

# Reload nginx to get all changes to take effect
sudo service nginx reload
```

### Prod maintenance

Update to the latest code:

```bash
# Get the latest code
cd ~/kendallelane.com
git pull

# If client (frontend) changes
cd client
npm run build

# If server (backend) changes
pm2 reload server
```
