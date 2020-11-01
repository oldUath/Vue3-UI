rm -rf dist
yarn build
cd dist
git init
git add .
git commit -m 'update'
git branch -M master
git remote add orangin git@github.com:oldUath/mini-UI.git
git push -f -u origin master
cd -