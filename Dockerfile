FROM mustafakosker/electronbuilder:13.1.8

ADD . .

ENV ELECTRON_BUILDER_CACHE="/cache"

RUN npm install

RUN cp -r /usr/local/lib/node_modules/electron ./node_modules/electron

RUN npm run build
RUN npm run asar

RUN npm run package:win32
