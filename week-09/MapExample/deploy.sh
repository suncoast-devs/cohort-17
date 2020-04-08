docker build -t MapExample-image .

docker tag MapExample-image registry.heroku.com/MapExample/web


docker push registry.heroku.com/MapExample/web

heroku container:release web -a MapExample