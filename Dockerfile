# ベースイメージ
FROM node:22.19.0-slim

# 作業ディレクトリ
WORKDIR /app

# 依存関係のコピー
COPY package*.json ./

# npm install
RUN npm install

# ソースコードをコピー
COPY . .

# 開発用サーバー起動
CMD ["npm", "run", "dev"]
