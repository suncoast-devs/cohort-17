docker build -t hike-finder-image .

docker tag hike-finder-image registry.heroku.com/sdg-hike-finder-2/web


docker push registry.heroku.com/sdg-hike-finder-2/web

heroku container:release web -a sdg-hike-finder-2