FROM node:10.15 as build
ENV NODE_ENV production
ARG SITE

ADD ./ /root
WORKDIR /root
RUN yarn --production

WORKDIR /root/sites/$SITE
RUN node_modules/.bin/basecms-website build

FROM node:10.15-alpine
ENV NODE_ENV production
ENV PORT 80
ARG SITE
COPY --from=build /root /root
WORKDIR /root/sites/$SITE
ENTRYPOINT [ "node", "index.js" ]
