# 📚 AV2 – Estudo de Caso com React, React Native, API REST e Testes

Este projeto faz parte da avaliação AV2 da disciplina de Desenvolvimento Web e Mobile.  
O objetivo é desenvolver **duas aplicações** (Web e Mobile) consumindo a mesma API REST de **alunos**, incluindo navegação entre telas, criação, edição, exclusão e listagem.

---

## 🚀 Tecnologias Utilizadas

### **Web (Vite + React)**
- React 18
- Vite
- React Router DOM
- Axios
- React Bootstrap / Material UI (opcional no visual)
- Vitest
- React Testing Library

### **Mobile (Expo + React Native)**
- Expo
- React Native
- React Native Paper
- Expo Router
- Axios

### **API REST**
- Endpoint oficial:


https://proweb.leoproti.com.br/alunos


---

# 📁 Estrutura do Repositório



/AV2
├── web/ → Projeto React + Vite
└── mobile/ → Projeto React Native + Expo


---

# 🌐 Parte 1 — Aplicação Web (React + Vite)

## 📦 Instalação

No diretório `/web` execute:

```sh
npm install

▶️ Rodar o projeto
npm run dev


O servidor iniciará em:

http://localhost:5173

🔀 Rotas da versão Web
Rota	Descrição
/	Lista de alunos
/novo	Cadastro de aluno
/editar/:id	Edição de aluno
🧪 Testes Automatizados (Vitest + Testing Library)

Para rodar os testes dentro do diretório web:

npm run test


Os testes verificam:

renderização dos componentes

navegação

chamadas de API mockadas

funcionamento do CRUD

📱 Parte 2 — Aplicação Mobile (Expo + React Native)
📦 Instalação

Dentro do diretório /mobile:

npm install


Se estiver usando Expo pela primeira vez:

npm install -g expo-cli

▶️ Rodar o aplicativo
npx expo start


Ou:

Aperte "a" para abrir no Android

Aperte "w" para abrir no navegador

Escaneie o QRCode no Expo Go

🔀 Rotas da versão Mobile (Expo Router)
Rota	Tela
/alunos	Lista de alunos
/alunos/novo	Criar novo aluno
/alunos/[id]	Editar aluno
❗Observações Importantes no Mobile

Alert.alert não funciona no Expo Web, por isso foi implementado:

window.confirm() no Web

Alert.alert() no Android/iOS

Função de excluir aluno foi ajustada para:

funcionar no Web + Android + iOS

atualizar a lista imediatamente usando await carregarAlunos()

🛠 API de Alunos

Base URL:

https://proweb.leoproti.com.br/alunos

Endpoints usados
Método	Caminho	Descrição
GET	/alunos	Lista todos os alunos
GET	/alunos/:id	Busca aluno por ID
POST	/alunos	Cria aluno
PUT	/alunos/:id	Edita aluno
DELETE	/alunos/:id	Exclui aluno
☁️ Deploy da versão Web no Vercel
Passo a passo:

Crie uma conta no Vercel

Conecte seu GitHub

Importe o repositório AV2

Escolha a pasta web para publicar

Em “Framework preset”, selecione Vite

Deploy automático 🎉

O Vercel irá gerar um link público.

👩‍💻 Autor(a)

Nome: Natália Leandro
Projeto desenvolvido para a disciplina de Desenvolvimento Web e Mobile – AV2.

📝 Licença

Uso educacional. Código aberto para fins de estudo.




