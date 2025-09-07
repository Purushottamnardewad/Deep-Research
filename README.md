# 🧠 Deep Research AI Agent

A powerful AI-powered research tool that automates comprehensive research on any topic using OpenAI's GPT models.

![Deep Research AI Agent](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--3.5-green?logo=openai&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css&logoColor=white)

## ✨ Features

- 🤖 **AI-Powered Research Planning** - Generates 8-10 detailed research steps automatically
- 📊 **Real-Time Progress Tracking** - Visual progress indicators with smooth animations
- 📝 **Comprehensive Report Generation** - Detailed final reports with executive summaries
- 💾 **Research History** - SQLite database to store and retrieve past research
- 📄 **Export Functionality** - Export reports to PDF and Markdown formats
- 🎭 **Demo Mode** - Try the application without API keys using realistic sample data
- 🎨 **Beautiful UI** - Modern, responsive design with Tailwind CSS and Framer Motion
- 🔒 **Server-Side API Management** - Secure API key handling on the backend

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/deep-research-ai-agent.git
   cd deep-research-ai-agent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your OpenAI API key to `.env.local`:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   DATABASE_URL=file:./research.db
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the application**
   
   Visit [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 How It Works

1. **Enter Research Topic** - Simply type in what you want to research
2. **AI Planning** - The AI creates a comprehensive 8-10 step research plan
3. **Automated Execution** - Each step is executed with detailed analysis
4. **Progress Tracking** - Watch real-time progress with visual indicators
5. **Final Report** - Get a comprehensive report with findings and recommendations
6. **Export & Save** - Download as PDF/Markdown and save to database

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **AI**: OpenAI GPT-3.5 Turbo
- **Database**: SQLite (development), PostgreSQL (production ready)
- **PDF Generation**: jsPDF
- **Markdown**: react-markdown

## 📋 Project Structure

```
deep-research-ai-agent/
├── src/
│   ├── app/
│   │   ├── api/research/          # API routes
│   │   │   ├── plan/route.ts      # Research planning
│   │   │   ├── execute/route.ts   # Step execution
│   │   │   └── report/route.ts    # Report generation
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Main page
│   ├── components/                # React components
│   │   ├── ResearchInput.tsx      # Input form
│   │   ├── ResearchPlan.tsx       # Plan display
│   │   ├── ResearchProgress.tsx   # Progress tracker
│   │   └── ResearchReport.tsx     # Report viewer
│   ├── lib/
│   │   └── database.ts            # Database operations
│   └── types/
│       └── index.ts               # TypeScript types
├── .env.example                   # Environment template
├── .gitignore                     # Git ignore rules
├── package.json                   # Dependencies
├── tailwind.config.js             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Documentation
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | Yes |
| `DATABASE_URL` | SQLite database path | Yes |

### OpenAI API Setup

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create an account and add billing information
3. Generate an API key in the API section
4. Add the key to your `.env.local` file

## 🎭 Demo Mode

Try the application without API keys:

1. Click "🎭 Demo Mode" on the homepage
2. Enter any research topic
3. Experience the full workflow with realistic sample data

Perfect for:
- Testing the UI and workflow
- Demonstrations and presentations
- Development without API costs

## 📊 Sample Research Topics

- "Best Electric Cars in 2024"
- "Impact of AI on Healthcare"
- "Future of Remote Work"
- "Sustainable Energy Solutions"
- "Cybersecurity Trends 2024"
- "Space Technology Advances"

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/)
3. Import your repository
4. Add environment variables
5. Deploy!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `out` directory to Netlify
3. Add environment variables in Netlify dashboard

### Deploy to Railway

1. Connect your GitHub repository
2. Add environment variables
3. Deploy with zero configuration

## 🔒 Security Features

- ✅ Server-side API key management
- ✅ No client-side API key exposure
- ✅ Input validation and sanitization
- ✅ Error handling without data leakage
- ✅ Rate limiting ready for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for providing the GPT models
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling
- Framer Motion for smooth animations

## 📧 Support

If you have any questions or need help:

1. Check the [Issues](https://github.com/yourusername/deep-research-ai-agent/issues) page
2. Create a new issue with detailed description
3. Join our community discussions

## 🔄 Changelog

### v1.0.0 (Current)
- ✅ Initial release with full AI research capabilities
- ✅ OpenAI GPT-3.5 integration
- ✅ Demo mode for testing without API keys
- ✅ SQLite database integration
- ✅ PDF and Markdown export
- ✅ Responsive UI with animations

---

**Made with ❤️ using Next.js, TypeScript, and OpenAI**
