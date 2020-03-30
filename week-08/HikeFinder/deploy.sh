docker build -t HikeFinder-image .

docker tag HikeFinder-image registry.heroku.com/HikeFinder/web


docker push registry.heroku.com/HikeFinder/web

heroku container:release web -a HikeFinder