docker build -t sdg-taco-image .

docker tag sdg-taco-image registry.heroku.com/sdg-taco-truck/web

docker push registry.heroku.com/sdg-taco-truck/web

heroku container:release web -a sdg-taco-truck