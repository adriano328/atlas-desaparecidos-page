📘 Seplag Front-End
Projeto desenvolvido com Angular para consumo da API pública da Seplag (https://abitus-api.geia.vip/v1), focado na apresentação de informações sobre pessoas desaparecidas e localizadas.

🛠 Tecnologias utilizadas
🌐 Angular

🔧 TypeScript

🎨 Angular Material

📦 npm / yarn

🧪 RxJS

📡 Consumo de API REST

🐳 Docker (opcional)

✅ Funcionalidades da aplicação
👁️ Visualização de pessoas desaparecidas e localizadas

🔍 Visualização detalhada de informações individuais

🕒 Visualização dos últimos registros

➕ Inclusão de novas informações sobre o indivíduo

📡 API Utilizada
A aplicação consome a API pública da Seplag:

🔗 https://abitus-api.geia.vip/v1

Com essa API foi possível:

Carregar os dados dos indivíduos desaparecidos e localizados

Visualizar detalhes de cada pessoa com mais informações

Incluir novas informações sobre o indivíduo

Visualizar os últimos registros

🚀 Instruções para execução
✅ Pré-requisitos
Node.js instalado

Docker instalado (caso queira rodar via container)

▶️ Rodando localmente
Clone o projeto:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/seplag-front-end
cd seplag-front-end
Instale as dependências:

bash
Copiar
Editar
npm install
# ou
yarn
Inicie a aplicação:

bash
Copiar
Editar
ng serve
Acesse no navegador:

arduino
Copiar
Editar
http://localhost:4200
🐳 Rodando com Docker
Se preferir rodar a aplicação em um container Docker:

Certifique-se que o Docker está instalado.

Execute o seguinte comando:

bash
Copiar
Editar
docker compose up --build
Acesse:

arduino
Copiar
Editar
http://localhost:4200
📁 Estrutura de Pastas
bash
Copiar
Editar
📁 src/
 ┣ 📁 app/
 ┃ ┣ 📁 components/       # Componentes reutilizáveis
 ┃ ┣ 📁 services/         # Serviços HTTP e regras de negócio
 ┃ ┣ 📁 pages/            # Páginas principais
 ┃ ┗ 📄 app.module.ts     # Módulo principal do Angular
┣ 📄 main.ts              # Ponto de entrada da aplicação
┣ 📄 index.html           # Arquivo HTML principal
┣ 📄 styles.scss          # Estilos globais
✅ Final
Com este projeto é possível:

Listar e consultar pessoas desaparecidas

Visualizar detalhes completos de cada pessoa

Adicionar novas informações sobre indivíduos

Acompanhar os últimos registros de visualização
