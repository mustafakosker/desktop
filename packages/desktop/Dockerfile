FROM mustafakosker/electronbuilder:13.1.8

ADD . .
ADD ./docker/electron-builder.docker.yml /project/electron-builder.yml
ADD ./docker/dist /project/dist

ENV ELECTRON_BUILDER_CACHE="/cache"

RUN npm install && \
	cp -r /usr/local/lib/node_modules/electron ./node_modules/electron && \
	npm run builder:win32
