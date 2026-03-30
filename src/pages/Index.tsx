
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Abdullahi Oriola — Developer</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --black:#050505;
  --surface:#0d0d0d;
  --surface2:#141414;
  --surface3:#1a1a1a;
  --border:#1f1f1f;
  --border2:#2a2a2a;
  --text:#f0ede8;
  --text2:#8a8580;
  --text3:#4a4745;
  --accent:#c8b89a;
  --accent2:#a89070;
  --green:#3d6b4f;
  --green-light:#6dab85;
}
html{scroll-behavior:smooth;overflow-x:hidden}
body{
  background:var(--black);
  color:var(--text);
  font-family:'DM Sans',sans-serif;
  font-size:15px;
  line-height:1.7;
  overflow-x:hidden;
}

/* SCROLLBAR */
::-webkit-scrollbar{width:3px}
::-webkit-scrollbar-track{background:var(--black)}
::-webkit-scrollbar-thumb{background:var(--border2)}

/* CURSOR */
*{cursor:none}
#cursor{
  position:fixed;width:8px;height:8px;
  background:var(--accent);border-radius:50%;
  pointer-events:none;z-index:9999;
  transition:transform 0.15s ease,opacity 0.15s ease;
  transform:translate(-50%,-50%);
}
#cursor-ring{
  position:fixed;width:32px;height:32px;
  border:1px solid var(--accent2);
  border-radius:50%;pointer-events:none;z-index:9998;
  transition:transform 0.08s ease,width 0.2s ease,height 0.2s ease,opacity 0.2s ease;
  transform:translate(-50%,-50%);
  opacity:0.5;
}

/* NAV */
nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  padding:20px 48px;
  display:flex;justify-content:space-between;align-items:center;
  border-bottom:1px solid transparent;
  transition:border-color 0.3s,background 0.3s;
}
nav.scrolled{
  background:rgba(5,5,5,0.92);
  backdrop-filter:blur(20px);
  border-bottom-color:var(--border);
}
.nav-logo{
  font-family:'Syne',sans-serif;
  font-weight:700;font-size:16px;
  letter-spacing:0.05em;
  text-decoration:none;
  color:var(--text);
}
.nav-links{display:flex;gap:40px;list-style:none}
.nav-links a{
  font-size:13px;letter-spacing:0.08em;
  text-transform:uppercase;
  color:var(--text2);text-decoration:none;
  transition:color 0.2s;
  font-weight:500;
}
.nav-links a:hover{color:var(--text)}
.nav-status{
  display:flex;align-items:center;gap:8px;
  font-size:12px;color:var(--text2);
}
.status-dot{
  width:6px;height:6px;border-radius:50%;
  background:var(--green-light);
  animation:pulse 2s infinite;
}
@keyframes pulse{
  0%,100%{opacity:1}
  50%{opacity:0.4}
}

/* HERO */
#hero{
  min-height:100vh;
  display:flex;align-items:center;
  padding:120px 48px 80px;
  position:relative;overflow:hidden;
}
.hero-bg{
  position:absolute;inset:0;
  background:radial-gradient(ellipse 60% 50% at 70% 50%, rgba(200,184,154,0.04) 0%, transparent 70%);
}
.hero-grid{
  position:absolute;inset:0;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size:80px 80px;
  opacity:0.3;
  mask-image:radial-gradient(ellipse at center, black 30%, transparent 80%);
}
.hero-content{max-width:1200px;width:100%;margin:0 auto;position:relative;z-index:1}
.hero-tag{
  display:inline-flex;align-items:center;gap:8px;
  font-family:'DM Mono',monospace;
  font-size:11px;letter-spacing:0.15em;
  text-transform:uppercase;
  color:var(--accent);
  border:1px solid var(--border2);
  padding:6px 14px;border-radius:2px;
  margin-bottom:48px;
}
.hero-tag::before{content:'◆';font-size:7px}
h1{
  font-family:'Syne',sans-serif;
  font-size:clamp(52px,7vw,96px);
  font-weight:800;line-height:0.95;
  letter-spacing:-0.03em;
  margin-bottom:32px;
}
h1 span{color:var(--accent)}
.hero-desc{
  font-size:17px;
  color:var(--text2);
  max-width:520px;
  line-height:1.8;
  margin-bottom:56px;
}
.hero-actions{display:flex;gap:16px;flex-wrap:wrap}
.btn-primary{
  display:inline-flex;align-items:center;gap:10px;
  background:var(--accent);
  color:var(--black);
  font-weight:600;font-size:13px;
  letter-spacing:0.06em;text-transform:uppercase;
  padding:14px 28px;border-radius:2px;
  text-decoration:none;border:none;
  transition:all 0.2s;
}
.btn-primary:hover{background:var(--text);transform:translateY(-2px)}
.btn-ghost{
  display:inline-flex;align-items:center;gap:10px;
  color:var(--text2);
  font-size:13px;letter-spacing:0.06em;text-transform:uppercase;
  padding:14px 28px;border-radius:2px;
  text-decoration:none;
  border:1px solid var(--border2);
  transition:all 0.2s;
}
.btn-ghost:hover{color:var(--text);border-color:var(--text3)}
.hero-scroll{
  position:absolute;bottom:40px;left:48px;
  display:flex;align-items:center;gap:12px;
  font-family:'DM Mono',monospace;
  font-size:11px;letter-spacing:0.1em;
  color:var(--text3);text-transform:uppercase;
}
.scroll-line{width:40px;height:1px;background:var(--text3)}

/* SECTIONS */
section{padding:120px 48px}
.section-inner{max-width:1200px;margin:0 auto}
.section-label{
  font-family:'DM Mono',monospace;
  font-size:11px;letter-spacing:0.2em;text-transform:uppercase;
  color:var(--accent);margin-bottom:16px;
  display:flex;align-items:center;gap:12px;
}
.section-label::after{content:'';flex:0 0 40px;height:1px;background:var(--accent)}
h2{
  font-family:'Syne',sans-serif;
  font-size:clamp(36px,4vw,56px);
  font-weight:800;line-height:1;
  letter-spacing:-0.02em;
  margin-bottom:64px;
}

/* ABOUT */
#about{background:var(--surface)}
.about-grid{display:grid;grid-template-columns:1fr 1.4fr;gap:80px;align-items:start}
.about-left{}
.about-photo-frame{
  aspect-ratio:3/4;
  background:var(--surface2);
  border:1px solid var(--border);
  position:relative;overflow:hidden;
  margin-bottom:32px;
}
.about-photo-frame::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(to bottom, transparent 60%, var(--surface) 100%);
}
.about-photo-frame img{
  width:100%;height:100%;object-fit:cover;
  filter:grayscale(20%) contrast(1.05);
}
.about-photo-placeholder{
  width:100%;height:100%;
  display:flex;align-items:center;justify-content:center;
  color:var(--text3);font-family:'DM Mono',monospace;font-size:12px;
}
.about-meta{display:flex;flex-direction:column;gap:12px}
.meta-item{
  display:flex;justify-content:space-between;
  padding:10px 0;border-bottom:1px solid var(--border);
  font-size:13px;
}
.meta-label{color:var(--text3);font-family:'DM Mono',monospace;font-size:11px;letter-spacing:0.1em;text-transform:uppercase}
.meta-value{color:var(--text2)}
.about-right{}
.about-text{
  font-size:16px;color:var(--text2);
  line-height:1.9;margin-bottom:24px;
}
.about-text strong{color:var(--text);font-weight:500}
.skills-heading{
  font-family:'DM Mono',monospace;font-size:11px;
  letter-spacing:0.15em;text-transform:uppercase;
  color:var(--text3);margin:48px 0 20px;
}
.skills-grid{display:flex;flex-wrap:wrap;gap:8px}
.skill-tag{
  font-family:'DM Mono',monospace;
  font-size:12px;letter-spacing:0.05em;
  color:var(--text2);
  padding:6px 14px;
  border:1px solid var(--border2);
  border-radius:2px;
  transition:all 0.2s;
}
.skill-tag:hover{color:var(--text);border-color:var(--text3)}

/* PROJECTS */
#projects{background:var(--black)}
.projects-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border)}
.project-card{
  background:var(--black);
  padding:48px;
  transition:background 0.3s;
  position:relative;overflow:hidden;
}
.project-card:hover{background:var(--surface)}
.project-card::before{
  content:'';position:absolute;
  top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg, var(--accent), transparent);
  transform:scaleX(0);transform-origin:left;
  transition:transform 0.4s ease;
}
.project-card:hover::before{transform:scaleX(1)}
.project-num{
  font-family:'DM Mono',monospace;
  font-size:11px;letter-spacing:0.1em;
  color:var(--text3);
  margin-bottom:24px;
}
.project-title{
  font-family:'Syne',sans-serif;
  font-size:24px;font-weight:700;
  line-height:1.1;
  margin-bottom:16px;
  color:var(--text);
}
.project-desc{
  font-size:14px;color:var(--text2);
  line-height:1.8;margin-bottom:28px;
}
.project-tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:32px}
.project-tag{
  font-family:'DM Mono',monospace;
  font-size:10px;letter-spacing:0.08em;
  text-transform:uppercase;
  color:var(--accent2);
  padding:4px 10px;
  border:1px solid var(--border2);
  border-radius:2px;
}
.project-link{
  display:inline-flex;align-items:center;gap:8px;
  font-size:13px;font-weight:500;
  color:var(--text2);text-decoration:none;
  letter-spacing:0.05em;
  transition:color 0.2s;
}
.project-link:hover{color:var(--accent)}
.project-link svg{transition:transform 0.2s}
.project-link:hover svg{transform:translate(2px,-2px)}

/* EXPERIENCE */
#experience{background:var(--surface)}
.exp-list{display:flex;flex-direction:column;gap:0}
.exp-item{
  display:grid;grid-template-columns:200px 1fr;gap:48px;
  padding:48px 0;border-bottom:1px solid var(--border);
}
.exp-item:first-child{border-top:1px solid var(--border)}
.exp-time{
  font-family:'DM Mono',monospace;
  font-size:12px;color:var(--text3);
  letter-spacing:0.05em;
  padding-top:4px;
}
.exp-content{}
.exp-role{
  font-family:'Syne',sans-serif;
  font-size:20px;font-weight:700;
  margin-bottom:4px;
}
.exp-company{
  font-size:14px;color:var(--accent);
  margin-bottom:16px;font-weight:500;
}
.exp-desc{font-size:14px;color:var(--text2);line-height:1.8}

/* CONTACT */
#contact{background:var(--black)}
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
.contact-left{}
.contact-intro{font-size:16px;color:var(--text2);line-height:1.9;margin-bottom:48px}
.contact-links{display:flex;flex-direction:column;gap:0}
.contact-link{
  display:flex;align-items:center;justify-content:space-between;
  padding:20px 0;border-bottom:1px solid var(--border);
  text-decoration:none;color:var(--text2);
  font-size:14px;
  transition:color 0.2s;
  group:hover;
}
.contact-link:first-child{border-top:1px solid var(--border)}
.contact-link:hover{color:var(--text)}
.contact-link-label{font-weight:500}
.contact-link-value{
  font-family:'DM Mono',monospace;font-size:12px;
  color:var(--text3);
}
.contact-link:hover .contact-link-value{color:var(--accent)}
.contact-right{}
.form-group{margin-bottom:24px}
.form-label{
  display:block;
  font-family:'DM Mono',monospace;
  font-size:11px;letter-spacing:0.12em;text-transform:uppercase;
  color:var(--text3);margin-bottom:10px;
}
.form-input,.form-textarea{
  width:100%;background:var(--surface);
  border:1px solid var(--border2);
  color:var(--text);
  font-family:'DM Sans',sans-serif;font-size:14px;
  padding:14px 18px;border-radius:2px;
  transition:border-color 0.2s;
  outline:none;resize:none;
}
.form-input:focus,.form-textarea:focus{border-color:var(--accent2)}
.form-textarea{height:140px}
.form-submit{
  width:100%;
  background:var(--surface2);
  border:1px solid var(--border2);
  color:var(--text);
  font-family:'Syne',sans-serif;
  font-size:14px;font-weight:600;
  letter-spacing:0.08em;text-transform:uppercase;
  padding:16px;border-radius:2px;
  transition:all 0.2s;
}
.form-submit:hover{background:var(--accent);color:var(--black);border-color:var(--accent)}

/* FOOTER */
footer{
  background:var(--surface);
  padding:48px;
  border-top:1px solid var(--border);
  display:flex;justify-content:space-between;align-items:center;
}
.footer-left{
  font-family:'DM Mono',monospace;
  font-size:12px;color:var(--text3);letter-spacing:0.05em;
}
.footer-links{display:flex;gap:32px}
.footer-links a{
  font-size:12px;color:var(--text3);text-decoration:none;
  transition:color 0.2s;letter-spacing:0.05em;
}
.footer-links a:hover{color:var(--accent)}

/* ANIMATIONS */
.reveal{
  opacity:0;transform:translateY(30px);
  transition:opacity 0.7s ease,transform 0.7s ease;
}
.reveal.visible{opacity:1;transform:translateY(0)}
.reveal-delay-1{transition-delay:0.1s}
.reveal-delay-2{transition-delay:0.2s}
.reveal-delay-3{transition-delay:0.3s}

/* MOBILE */
@media(max-width:768px){
  nav{padding:16px 24px}
  .nav-links,.nav-status{display:none}
  section{padding:80px 24px}
  #hero{padding:100px 24px 60px}
  h1{font-size:48px}
  .about-grid{grid-template-columns:1fr}
  .projects-grid{grid-template-columns:1fr}
  .project-card{padding:32px 24px}
  .exp-item{grid-template-columns:1fr;gap:12px}
  .contact-grid{grid-template-columns:1fr}
  footer{flex-direction:column;gap:24px;padding:32px 24px;text-align:center}
}
</style>
</head>
<body>

<div id="cursor"></div>
<div id="cursor-ring"></div>

<nav id="navbar">
  <a href="#hero" class="nav-logo">A.O.</a>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Work</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <div class="nav-status">
    <div class="status-dot"></div>
    Available for work
  </div>
</nav>

<section id="hero">
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <div class="hero-content">
    <div class="hero-tag">Full-Stack Developer · Lagos, Nigeria</div>
    <h1>
      Abdullahi<br>
      <span>Oriola</span><br>
      Adeola
    </h1>
    <p class="hero-desc">
      I build AI-powered products and production web applications that solve real problems. Data Science student at UNILAG. Head of Technology at Ventics AI.
    </p>
    <div class="hero-actions">
      <a href="#projects" class="btn-primary">
        View Work
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#contact" class="btn-ghost">Get in touch</a>
    </div>
  </div>
  <div class="hero-scroll">
    <div class="scroll-line"></div>
    Scroll
  </div>
</section>

<section id="about">
  <div class="section-inner">
    <div class="section-label">01 — About</div>
    <div class="about-grid">
      <div class="about-left reveal">
        <div class="about-photo-frame">
          <div class="about-photo-placeholder">[ photo ]</div>
        </div>
        <div class="about-meta">
          <div class="meta-item">
            <span class="meta-label">Based in</span>
            <span class="meta-value">Lagos, Nigeria</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Education</span>
            <span class="meta-value">UNILAG · Data Science</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Role</span>
            <span class="meta-value">Head of Tech @ Ventics AI</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">GitHub</span>
            <span class="meta-value">Astronomox</span>
          </div>
        </div>
      </div>
      <div class="about-right">
        <h2 class="reveal">Building things<br>that matter.</h2>
        <p class="about-text reveal reveal-delay-1">
          I started with Python because I wanted to automate things. That turned into building full web applications, then AI integrations, then leading the technical side of a startup. <strong>I did not learn to code to pass exams.</strong>
        </p>
        <p class="about-text reveal reveal-delay-2">
          Every project in my portfolio started as a real problem I noticed — people who couldn't afford a dermatologist, students drowning in WhatsApp group announcements, young Nigerians with skills and no structured way to earn from them. <strong>I built for those people.</strong>
        </p>
        <p class="about-text reveal reveal-delay-3">
          Currently serving as Head of Technology at Ventics AI, an AI interior design platform with 300+ designs generated and a 4.8-star satisfaction rating. Also a Data Science student at the University of Lagos.
        </p>
        <div class="skills-heading">Technical Skills</div>
        <div class="skills-grid reveal">
          <span class="skill-tag">Python</span>
          <span class="skill-tag">TypeScript</span>
          <span class="skill-tag">React</span>
          <span class="skill-tag">Next.js</span>
          <span class="skill-tag">Angular</span>
          <span class="skill-tag">FastAPI</span>
          <span class="skill-tag">Django</span>
          <span class="skill-tag">Node.js</span>
          <span class="skill-tag">Supabase</span>
          <span class="skill-tag">Firebase</span>
          <span class="skill-tag">Tailwind CSS</span>
          <span class="skill-tag">Gemini AI</span>
          <span class="skill-tag">AWS</span>
          <span class="skill-tag">PostgreSQL</span>
          <span class="skill-tag">Docker</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="projects">
  <div class="section-inner">
    <div class="section-label">02 — Selected Work</div>
    <h2 class="reveal">Things I've<br>shipped.</h2>
    <div class="projects-grid reveal">

      <div class="project-card">
        <div class="project-num">001</div>
        <div class="project-title">Dermaflow AI</div>
        <p class="project-desc">AI-powered skin health diagnostic platform. Upload a photo, get instant analysis with heatmap explainability showing exactly why the AI reached its conclusion. Includes a medical-trained Bio-LLM chatbot and an oncology triage system that generates referral cards.</p>
        <div class="project-tags">
          <span class="project-tag">Next.js</span>
          <span class="project-tag">Gemini AI</span>
          <span class="project-tag">Python</span>
          <span class="project-tag">Healthcare</span>
        </div>
        <a href="https://dermaflow-zeta.vercel.app/" target="_blank" class="project-link">
          Live Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </a>
      </div>

      <div class="project-card">
        <div class="project-num">002</div>
        <div class="project-title">MonieFlow</div>
        <p class="project-desc">AI gig platform built specifically for young Nigerians. FairMatch™ engine connects workers to fair-paying gigs based on skills and location. Instant payments to a MonieFlow wallet, escrow-based trust system, and micro-upskilling in 2-minute AI-powered lessons.</p>
        <div class="project-tags">
          <span class="project-tag">Next.js</span>
          <span class="project-tag">Firebase</span>
          <span class="project-tag">Gemini AI</span>
          <span class="project-tag">Fintech</span>
        </div>
        <a href="https://monieflow-spark.vercel.app/" target="_blank" class="project-link">
          Live Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </a>
      </div>

      <div class="project-card">
        <div class="project-num">003</div>
        <div class="project-title">DataFlix</div>
        <p class="project-desc">Full university student portal with role-based access control. Two-tier admin system with department and academic-level content filtering — a 100-level Engineering student only sees content relevant to them. AI assistant "Flixy" powered by Gemini gives daily briefings.</p>
        <div class="project-tags">
          <span class="project-tag">Angular</span>
          <span class="project-tag">Supabase</span>
          <span class="project-tag">Gemini AI</span>
          <span class="project-tag">RBAC</span>
        </div>
        <a href="https://data-flix-wqe3.vercel.app/" target="_blank" class="project-link">
          Live Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </a>
      </div>

      <div class="project-card">
        <div class="project-num">004</div>
        <div class="project-title">EchoJournal</div>
        <p class="project-desc">AI journaling app that listens back. Speak or type your entries — voice is transcribed automatically. Echo Mode reads across all your past entries and surfaces recurring themes and emotional patterns you'd never notice alone. Mood sentiment charts over time.</p>
        <div class="project-tags">
          <span class="project-tag">Next.js</span>
          <span class="project-tag">Firebase</span>
          <span class="project-tag">Gemini AI</span>
          <span class="project-tag">Voice AI</span>
        </div>
        <a href="https://echo-journal-app.vercel.app/" target="_blank" class="project-link">
          Live Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </a>
      </div>

      <div class="project-card">
        <div class="project-num">005</div>
        <div class="project-title">TrustBridge AI</div>
        <p class="project-desc">AI-powered NDPR/NDPA compliance analysis platform for Nigerian businesses. Privacy policy analysis using Google Gemini, citizen action validation, and quick compliance checks with actionable remediation steps. Built with FastAPI backend.</p>
        <div class="project-tags">
          <span class="project-tag">Python</span>
          <span class="project-tag">FastAPI</span>
          <span class="project-tag">Gemini AI</span>
          <span class="project-tag">Legal Tech</span>
        </div>
        <a href="https://trustbridge-ai.onrender.com/docs/" target="_blank" class="project-link">
          Live Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </a>
      </div>

      <div class="project-card">
        <div class="project-num">006</div>
        <div class="project-title">Flashcard App</div>
        <p class="project-desc">Clean, intentional study tool. Create decks, add cards, flip through them. The act of writing the card is part of the learning. Smooth flip animations, progress tracking, and a backend API — built during the same exam season it was meant to solve.</p>
        <div class="project-tags">
          <span class="project-tag">React</span>
          <span class="project-tag">TypeScript</span>
          <span class="project-tag">Node.js</span>
          <span class="project-tag">Vite</span>
        </div>
        <a href="https://flashcard-app-navy-sigma.vercel.app/" target="_blank" class="project-link">
          Live Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </a>
      </div>

    </div>
  </div>
</section>

<section id="experience">
  <div class="section-inner">
    <div class="section-label">03 — Experience</div>
    <h2 class="reveal">Where I've<br>worked.</h2>
    <div class="exp-list">
      <div class="exp-item reveal">
        <div class="exp-time">2024 — Present</div>
        <div class="exp-content">
          <div class="exp-role">Head of Technology</div>
          <div class="exp-company">Ventics AI</div>
          <p class="exp-desc">Leading the technical development of an AI-powered interior design platform. Built and maintained the product that has generated 300+ designs with a 4.8-star rating and 98% satisfaction rate. Responsible for architecture decisions, frontend development, and technical strategy.</p>
        </div>
      </div>
      <div class="exp-item reveal">
        <div class="exp-time">2023 — Present</div>
        <div class="exp-content">
          <div class="exp-role">B.Sc. Data Science</div>
          <div class="exp-company">University of Lagos (UNILAG)</div>
          <p class="exp-desc">200-level Data Science student. Coursework includes statistical analysis, numerical methods, linear algebra, and machine learning fundamentals. Applying academic knowledge to real-world projects and open source contributions.</p>
        </div>
      </div>
      <div class="exp-item reveal">
        <div class="exp-time">2022 — Present</div>
        <div class="exp-content">
          <div class="exp-role">Independent Developer</div>
          <div class="exp-company">Freelance</div>
          <p class="exp-desc">Building and shipping production applications independently. Python certified with 2+ years of hands-on experience across web development, AI integration, and data science. Hackathon participant with multiple wins. Active open source contributor.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="contact">
  <div class="section-inner">
    <div class="section-label">04 — Contact</div>
    <div class="contact-grid">
      <div class="contact-left">
        <h2 class="reveal">Let's build<br>something.</h2>
        <p class="contact-intro reveal">
          Open to freelance projects, internships, and remote opportunities. If you have something worth building, I want to hear about it.
        </p>
        <div class="contact-links reveal">
          <a href="mailto:abdullahioriola02@gmail.com" class="contact-link">
            <span class="contact-link-label">Email</span>
            <span class="contact-link-value">abdullahioriola02@gmail.com</span>
          </a>
          <a href="https://github.com/Astronomox" target="_blank" class="contact-link">
            <span class="contact-link-label">GitHub</span>
            <span class="contact-link-value">Astronomox</span>
          </a>
          <a href="https://www.linkedin.com/in/abdullahi-oriola-63459b2a7/" target="_blank" class="contact-link">
            <span class="contact-link-label">LinkedIn</span>
            <span class="contact-link-value">abdullahi-oriola</span>
          </a>
          <a href="https://x.com/Astro2theworld" target="_blank" class="contact-link">
            <span class="contact-link-label">Twitter / X</span>
            <span class="contact-link-value">@Astro2theworld</span>
          </a>
          <a href="https://www.fiverr.com/abdullahi_ori" target="_blank" class="contact-link">
            <span class="contact-link-label">Fiverr</span>
            <span class="contact-link-value">@abdullahi_ori</span>
          </a>
        </div>
      </div>
      <div class="contact-right reveal">
        <form id="contactForm">
          <div class="form-group">
            <label class="form-label" for="name">Name</label>
            <input class="form-input" type="text" id="name" placeholder="Your name" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="email">Email</label>
            <input class="form-input" type="email" id="email" placeholder="your@email.com" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="message">Message</label>
            <textarea class="form-textarea" id="message" placeholder="Tell me about your project..." required></textarea>
          </div>
          <button type="submit" class="form-submit">Send Message →</button>
        </form>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="footer-left">
    © 2025 Abdullahi Oriola Adeola — Built with precision.
  </div>
  <div class="footer-links">
    <a href="https://github.com/Astronomox" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/abdullahi-oriola-63459b2a7/" target="_blank">LinkedIn</a>
    <a href="https://www.fiverr.com/abdullahi_ori" target="_blank">Fiverr</a>
  </div>
</footer>

<script>
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX;my=e.clientY;
  cursor.style.left=mx+'px';cursor.style.top=my+'px';
});
function animRing(){
  rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;
  ring.style.left=rx+'px';ring.style.top=ry+'px';
  requestAnimationFrame(animRing);
}
animRing();
document.querySelectorAll('a,button,.project-card,.contact-link').forEach(el=>{
  el.addEventListener('mouseenter',()=>{
    ring.style.width='56px';ring.style.height='56px';ring.style.opacity='0.3';
  });
  el.addEventListener('mouseleave',()=>{
    ring.style.width='32px';ring.style.height='32px';ring.style.opacity='0.5';
  });
});

const nav = document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled',window.scrollY>40);
});

const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('visible');
  });
},{threshold:0.1,rootMargin:'0px 0px -60px 0px'});
reveals.forEach(el=>obs.observe(el));

document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const btn=e.target.querySelector('.form-submit');
  btn.textContent='Sent ✓';
  btn.style.background='var(--green)';
  btn.style.color='var(--text)';
  e.target.reset();
  setTimeout(()=>{
    btn.textContent='Send Message →';
    btn.style.background='';btn.style.color='';
  },3000);
});
</script>
</body>
</html>
