docker build -t AuthExample-image .

docker tag AuthExample-image registry.heroku.com/AuthExample/web


docker push registry.heroku.com/AuthExample/web

heroku container:release web -a AuthExample