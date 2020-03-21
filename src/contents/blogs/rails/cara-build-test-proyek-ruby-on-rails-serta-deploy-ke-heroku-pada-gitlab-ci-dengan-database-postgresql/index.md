---
title: Cara build dan test proyek ruby on Rails serta deploy ke Heroku pada Gitlab CI dengan Database PostgreSQL
date: "2020-03-20T17:46:00.000Z"
description: Cara build dan test proyek ruby on Rails serta deploy ke Heroku pada Gitlab CI dengan Database PostgreSQL
---

## Kode Build

Tambahkan file `.gitlab.yml`.

```yaml

image: ruby:2.6.5

cache:
  key: ${CI_COMMIT_REF_SLUG}
  paths:
    - vendor/bundle
    - node_modules

services:
  - postgres:latest

stages:
  - build
  - test
  - deploy

build:
  stage: build
  script:
    - apt-get update -yq
    - curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
    - source ~/.bashrc
    - nvm install node
    - npm install yarn -g && yarn install --check-files
    - gem install bundler
    - echo $RAILS_MASTER_KEY > config/master.key
    - bundle check || bundle install --jobs $(nproc) --path vendor

test:
  stage: test
  script:
    - bundle exec rake

deploy production:
  stage: deploy
  retry: 2
  script:
    - apt-get update -yq
    - apt-get install apt-transport-https software-properties-common -y
    - add-apt-repository "deb https://cli-assets.heroku.com/branches/stable/apt ./"
    - curl -L https://cli-assets.heroku.com/apt/release.key | apt-key add -
    - apt-get update -yq
    - apt-get install heroku -y
    - gem install dpl
    - dpl --provider=heroku --app=museum-rails --api-key=HEROKU_API_KEY
  only:
    - master
  environment:
    name: production
    url: https://museum-rails.herokuapp.com

```
