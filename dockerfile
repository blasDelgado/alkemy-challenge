FROM node:18
WORKDIR /home/api-disney-alkemy
COPY package*.json ./
RUN npm install
COPY  . .
EXPOSE "8080"
CMD ["npm" , "start"]