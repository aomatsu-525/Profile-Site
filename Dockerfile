FROM node:22.19.0-slim

# 作業ディレクトリ
WORKDIR /app

# git など開発ツールをインストール（root）
RUN apt-get update && apt-get install -y \
    git \
    curl \
    vim \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# package.json だけコピーして node ユーザーで npm install
COPY package*.json ./
RUN npm install

# nodemon をグローバルインストール
RUN npm install -g nodemon

# ソースコードをコピー（権限も node に設定）
COPY . .

# ポート3000公開
EXPOSE 3000

# 開発サーバー起動
CMD ["npm", "run", "dev"]
