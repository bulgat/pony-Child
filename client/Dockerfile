# --- ЭТАП 1: Сборка приложения ---
FROM node:24-alpine AS builder
WORKDIR /app

# Копируем файлы зависимостей для использования кэша Docker
COPY package*.json ./

# Устанавливаем зависимости (включая devDependencies для TypeScript)
RUN npm ci

# Копируем исходный код проекта
COPY . .

# Собираем проект (TypeScript компилируется в статичные файлы в папку dist или build)
RUN npm run build

# --- ЭТАП 2: Запуск на Nginx ---
FROM nginx:1.25-alpine

# Копируем конфигурацию Nginx (опционально, но рекомендуется)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранные статичные файлы из предыдущего этапа
# Примечание: если вы используете Create React App, замените dist на build
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]