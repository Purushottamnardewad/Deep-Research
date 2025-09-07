# Deep Research AI Agent

A web app that automates end-to-end research using OpenAI’s GPT models. Enter a topic, and the app creates a structured research plan, executes it step by step, and generates a detailed final report.

![Deep Research AI Agent](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--3.5-green?logo=openai&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css&logoColor=white)


# Live Demo

You can try the app here:
👉 https://deep-research.vercel.app

# Features
	•	Automatic multi-step research planning
	•	Real-time progress tracking
	•	Export reports to PDF or Markdown
	•	Demo mode (no API key required)
	•	Secure server-side API key handling

# Tech Stack
	•	Frontend: Next.js 14, React, TypeScript
	•	Styling: Tailwind CSS, Framer Motion
	•	AI: OpenAI GPT-3.5 Turbo
	•	Database: SQLite (local), PostgreSQL (production)

# Getting Started
1.	Clone the repo
git clone https://github.com/Purushottamnardewad/Deep-Research.git

2.	Install dependencies

npm install


3.	Copy env file and add your API key

cp .env.example .env.local


4.	Run the dev server

npm run dev


5.	Open http://localhost:3000

# Deployment
	•	Vercel (recommended): Import repo, add env vars, deploy.
	•	Netlify/Railway: Build with npm run build, configure env vars, deploy.

# Contributing

Pull requests are welcome. Please open an issue first to discuss major changes.
