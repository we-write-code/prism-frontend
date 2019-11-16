FROM node:12-alpine
EXPOSE 3000

ENV NUXT_HOST 0.0.0.0

COPY docker/scripts/entrypoint.sh /

RUN set -x \
  && apk add bash vim \
  && chmod +x /entrypoint.sh \
  && mkdir /prism

WORKDIR /prism

COPY . .

ENTRYPOINT ["/bin/sh", "/entrypoint.sh"]
CMD ["yarn", "dev"]
