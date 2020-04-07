docker build -t FileExample-image .

docker tag FileExample-image registry.heroku.com/FileExample/web


docker push registry.heroku.com/FileExample/web

heroku container:release web -a FileExample