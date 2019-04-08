# Create New Site

1. Copy an existing site to new site folder.
2. Add deployment details to `travis.yml` under the `jobs` config.
3. Add the docker service to `docker-compose.yml`. Use an existing site as a template and change the ports, working directory, and GraphQL URI.
4. Update the site's `README.md` to the correct site name.
5. Change the `siteName` value in `config/core.js`.
6. Update the `logo`, `primaryNavItems`, `secondaryNavItems`, `homeSections` and `ad.units` values in `config/site.js`.
    - Note: `homeSections` must be in multiples of three. In other words, provide either three, six, or nine items.
7. Set theme colors in `server/styles/_variables.scss`.
8. Update favicons found in `server/public`.
