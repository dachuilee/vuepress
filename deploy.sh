#!/usr/bin/env sh
set -e
git add .
git commit -m "update vuepress"
git push
npm run build

cd docs/.vuepress/dist
git init
git config user.name dachuilee
git config user.email dachuilee@163.com
git add -A
git commit -m 'deploy vuepress'

git push -f git@github_dachui:dachuilee/vuepress.git master:gh-pages
cd -