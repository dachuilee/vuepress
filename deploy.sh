set -e
git config user.name dachuilee
git config user.email dachuilee@163.com
yarn docs:build
git add .
git commit -m "edit press"
git push git@github_dachui:dachuilee/vuepress.git master


cd docs/.vuepress/dist
git init
git config user.name dachuilee
git config user.email dachuilee@163.com
git add .
git commit -m 'deploy'
git push -f git@github_dachui:dachuilee/vuepress.git master:gh-pages

cd -