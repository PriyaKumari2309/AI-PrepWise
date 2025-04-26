# PrepWise - AI Mock Interview Platform

**PrepWise** is an AI-powered platform designed to help users practice job interviews in a realistic, interactive, and personalized way. It generates interview questions dynamically based on user preferences, conducts mock interviews using AI agents, and provides feedback — helping candidates prepare confidently for real interviews.

### 🌐 Live Site
[Visit PrepWise](https://ai-prep-wise.vercel.app)

---

## ✨ Features

- 🎙️ Conduct AI-based mock interviews in real time
- 📋 Dynamic question generation (Technical, HR, Behavioral, etc.)
- 🔥 Real-time responses from AI interviewer
- 📊 Dashboard with interview history and performance tracking
- 🔒 Secure Authentication (Firebase)
- 🌍 Deployed with Vercel (Frontend) and Vapi (AI backend integration)

---

## 🚀 Tech Stack

- **Frontend:** Next.js (TypeScript), Tailwind CSS, Shadcn/UI
- **Backend:** Vercel Serverless Functions + Vapi AI
- **Authentication:** Firebase Authentication
- **AI Models:** Vapi AI Agents (e.g., Gemini, GPT)
- **Hosting:** Vercel

---

## 🛠️ Installation and Setup

```bash
# 1. Clone the repository
git clone https://github.com/PriyaKumari2309/AI-PrepWise.git
cd AI-PrepWise

# 2. Install dependencies
npm install

# 3. Create a .env.local file and add your environment variables
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_VAPI_BASE_URL=https://your-vapi-base-url
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# 4. Run the development server
npm run dev

# 5. Visit
http://localhost:3000
