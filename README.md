# Portfolio

## Goal

This repository contains basic graphical components and architecture to create a Portfolio or a showcase site without programming.

You can find an exemple website [here](https://portfolio-demo.corentin-piquerez.fr/), which contains all the graphical components available.

## Create your own website

First, I really recommend you to mirror this repository, so you have your own repository with a copy of this one in it. 

Then, you'll be able to modify the website. 

### Mirror this repository

1. Clone the Original Repository as a Bare Mirror

```
git clone --mirror https://github.com/corentin-P/Portfolio.git
```

2. Create a repository on your github account

3. Push the Mirror to Your GitHub Repository
```
cd abc-repo.git
git remote set-url --push origin https://github.com/your-username/mirror-repo.git
git push --mirror
```

4. Fetch Updates from the Original Repository
```
git fetch -p origin
git push --mirror
```

5. Then you can edit the files and push it to your new repository. 

### Edit the content of the website

To set the content of the website, you'll need to edit JSON files. 

You can find the details of the configuration files [here](/src/lang/README.md).

## Run in development 

You can run this project with docker (you first need to install docker) : 

```sh
docker compose up
```

And then access to the local website (dev version) at 
```sh
http://localhost:8000/src/pages/
```
