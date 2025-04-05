📘 Seplag Teste - Front-End
Projeto desenvolvido como parte de um processo seletivo simplificado para gerenciar dados de pessoas desaparecidas e localizadas. O projeto consome uma API pública fornecida pela SEPLAG e permite a visualização e inclusão de registros.

🛠 Tecnologias utilizadas
⚙️ Angular
🎨 PrimeNG
💨 TailwindCSS
📦 npm
📁 FileSaver
🗜 JSZip
🎯 SweetAlert2
🔄 RxJS
🐳 Docker & Docker Compose

🔗 API pública utilizada
Este projeto utiliza a base de dados disponibilizada pela SEPLAG:
🔗 https://abitus-api.geia.vip/v1

Com essa API foi possível:

Carregar os dados dos indivíduos desaparecidos e localizados

Visualizar detalhes de cada pessoa com mais informações

Incluir novas informações sobre o indivíduo

Visualizar últimos registros

O HttpClient do Angular foi utilizado para administrar a conexão com a API.

🧪 Funcionalidades da aplicação
🔍 Busca de pessoas desaparecidas/localizadas
👤 Visualização detalhada de cada registro

➕ Inclusão de novas informações de visualização do desaparecido

🧭 Visualização dos últimos registros

⚡ Interface responsiva e moderna com PrimeNG + TailwindCSS

💾 Exportação de dados com FileSaver e JSZip

💻 Instruções para execução localmente
1. Requisitos
✅ Node.js instalado: https://nodejs.org

✅ Docker instalado: https://www.docker.com

Obs: Docker é necessário somente se for rodar o projeto dentro de um container Docker.

2. Clonando o projeto
bash
Copiar
Editar
git clone https://github.com/adriano328/seplag-test-front-end
cd seplag-test-front-end
3. Instalando dependências
bash
Copiar
Editar
npm install
4. Executando a aplicação
bash
Copiar
Editar
ng serve
Acesse no navegador:
🌐 http://localhost:4200

🐳 Executando com Docker
Verifique se a máquina possui o Docker instalado. Caso não, instale em:
https://www.docker.com

Se preferir rodar a aplicação com Docker, você pode utilizar o seguinte Dockerfile:

Exemplo de Dockerfile
Dockerfile
Copiar
Editar
# Etapa de build
FROM node:20 AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Etapa de produção
FROM nginx:alpine
COPY --from=build /app/dist/seplag-test-front-end /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
Comando para construir e subir
bash
Copiar
Editar
docker build -t seplag-frontend .
docker run -p 80:80 seplag-frontend
Acesse no navegador:
🌐 http://localhost

