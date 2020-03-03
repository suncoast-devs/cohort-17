docker build -t sdg-sample-api-template .

docker tag sdg-sample-api-template registry.heroku.com/sdg-sample-api-template/web

docker push registry.heroku.com/sdg-sample-api-template/web

heroku container:release web -a sdg-sample-api-template