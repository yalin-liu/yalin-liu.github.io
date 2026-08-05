FROM ruby:3.2-alpine

# 安裝 Jekyll 必備的基礎編譯工具
RUN apk add --no-cache build-base gcc cmake make git

WORKDIR /srv/jekyll

# 先複製 Gemfile 鎖定依賴，利用 Docker 快取加速
COPY Gemfile Gemfile.lock ./
RUN bundle install

# 開放開發與 LiveReload 連接埠
EXPOSE 4000 35729

# 搬到這裡
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload", "--force_polling"]
