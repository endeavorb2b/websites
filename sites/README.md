# Create New Site

- Copy an existing site to new site folder.
- Add deployment details to `/travis.yml` under the `jobs` config.
- Add the docker service to `/docker-compose.yml`. Use an existing site as a template and change the ports, working directory, and GraphQL URI.
- Update the `name` field of `/sites/[site-folder]/package.json` to match the site folder name. Ensure the `@endeavorb2b/` scope is maintaned.
- Update the site readme to correct name in `/sites/[site-folder]/README.md`
- Change the `siteName` value in `/sites/[site-folder]/config/core.js`.
- Update the `logo`, `primaryNavItems`, `secondaryNavItems`, `homeSections` and `ad.units` values in `/sites/[site-folder]/config/site.js`.
  - Note: `homeSections` must be in multiples of three. In other words, provide either three, six, or nine items.
- Set theme colors in `/sites/[site-folder]/server/styles/_variables.scss`.
- Update favicons found in `/sites/[site-folder]/server/public`.
- Install dependencies via `/scripts/yarn.sh`
- Test and view the site on dev by running `docker-compose up [sitename]`
