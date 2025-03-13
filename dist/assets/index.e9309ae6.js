import{initializeApp as b}from"https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";import{getAnalytics as v}from"https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";import{S as y,C as w,P as N,W as k,a as f,O as S,A as C,D as z,j as u,g as l,b as I,r as g,G as L,c as A,d as M,R as T,e as E}from"./vendor.a448862f.js";const R=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}};R();const P={apiKey:"AIzaSyBv6kl4UGSGqt4RsOdp-nyoSPOKKOdLSio",authDomain:"portfolio-d080c.firebaseapp.com",projectId:"portfolio-d080c",storageBucket:"portfolio-d080c.firebasestorage.app",messagingSenderId:"942034711703",appId:"1:942034711703:web:b1a3bc277a65e4ba5ba5d2",measurementId:"G-V1DHYMWCMT"},j=b(P);v(j);class D{constructor(o){this.scene=void 0,this.camera=void 0,this.renderer=void 0,this.fov=45,this.nearPlane=1,this.farPlane=1e3,this.canvasId=o,this.clock=void 0,this.controls=void 0,this.ambientLight=void 0,this.directionalLight=void 0}initialize(){this.scene=new y,this.scene.background=new w(0),this.camera=new N(this.fov,window.innerWidth/window.innerHeight,this.nearPlane,this.farPlane),this.camera.position.z=48;const o=document.getElementById(this.canvasId);this.renderer=new k({canvas:o,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.clock=new f,this.controls=new S(this.camera,this.renderer.domElement),this.ambientLight=new C(16777215,.9),this.ambientLight.castShadow=!0,this.scene.add(this.ambientLight),this.directionalLight=new z(16777215,2),this.directionalLight.position.set(0,32,64),this.scene.add(this.directionalLight),window.addEventListener("resize",()=>this.onWindowResize(),!1)}animate(){window.requestAnimationFrame(this.animate.bind(this)),this.render(),this.controls.update()}render(){this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}const e=u.exports.jsx,i=u.exports.jsxs;l.registerPlugin(I);function O(){const[h,o]=g.exports.useState(!0);return g.exports.useEffect(()=>{const r=new D("myThreeJsCanvas");r.initialize();const d=new L(200,50,65535,13107);r.scene.add(d),r.animate();let t=null;new A().load("./assets/gtr2/scene.gltf",a=>{t=a,a.scene.rotation.y=Math.PI/8,a.scene.position.set(0,3,0),a.scene.scale.set(600,600,600),r.scene.add(a.scene);const s=new M(16711680,2,500);s.position.set(50,50,50),r.scene.add(s);const x=new f;function p(){const m=x.getElapsedTime();t&&(t.scene.rotation.y+=.005,t.scene.position.y=3+Math.sin(m*2)*.5),s.position.x=50*Math.cos(m),s.position.z=50*Math.sin(m),requestAnimationFrame(p)}p()}),l.to(r.camera.position,{y:-60,ease:"none",scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:!0}}),l.utils.toArray(".timeline-item").forEach((a,s)=>{l.fromTo(a,{opacity:0,y:50},{opacity:1,y:0,duration:1,delay:s*.2,scrollTrigger:{trigger:a,start:"top 80%",toggleActions:"play none none reverse"}})}),l.utils.toArray(".skill-item").forEach((a,s)=>{l.fromTo(a,{opacity:0,y:50},{opacity:1,y:0,duration:1,delay:s*.1,scrollTrigger:{trigger:a,start:"top 90%",toggleActions:"play none none reverse"}})});const c=setTimeout(()=>{o(!1)},3e3);return()=>clearTimeout(c)},[]),i("div",{children:[e("style",{children:`
        /* Reset & Global Styles */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Montserrat', sans-serif;
          background: #000;
          color: #fff;
          overflow-x: hidden;
        }
        a { color: inherit; text-decoration: none; }
        html { scroll-behavior: smooth; }

        /* Header Navigation */
        header {
          position: fixed;
          top: 0;
          width: 100%;
          padding: 20px 50px;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(0, 0, 0, 0.7);
        }
        header .logo {
          font-size: 1.8em;
          font-weight: bold;
          color: #00ffff;
        }
        header nav a {
          margin-left: 20px;
          font-size: 1em;
          transition: color 0.3s;
          cursor: pointer;
          color: #aaa;
        }
        header nav a:hover { color: #fff; }

        /* Canvas Container */
        #canvas-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        canvas {
          width: 100% !important;
          height: 100% !important;
          display: block;
        }

        /* Main Content */
        main {
          position: relative;
          z-index: 1;
          width: 100%;
        }
        section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 50px;
          text-align: center;
        }
        section h1, section h2 {
          font-size: 3em;
          margin-bottom: 20px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        section p {
          font-size: 1.2em;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Timeline Styles */
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 50px auto;
          padding: 40px 0;
        }
        .timeline::after {
          content: '';
          position: absolute;
          width: 6px;
          background-color: #00ffff;
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -3px;
        }
        .timeline-item {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 20px 30px;
          width: 45%;
          margin: 20px 0;
          display: block;
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .timeline-item:nth-child(odd) {
          left: 0;
          text-align: right;
        }
        .timeline-item:nth-child(even) {
          left: 55%;
          text-align: left;
        }
        .timeline-item::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: #00ffff;
          border: 4px solid #000;
          top: 20px;
          border-radius: 50%;
          z-index: 1;
        }
        .timeline-item:nth-child(odd)::after {
          right: -10px;
        }
        .timeline-item:nth-child(even)::after {
          left: -10px;
        }
        /* Role and Company Styling */
        .role {
          font-size: 1.5em;
          font-weight: bold;
          color: #fff;
        }
        .company {
          font-size: 1.5em;
          font-weight: bold;
          color: #00ffff;
          margin-left: 5px;
        }
        .date, .location, .timeline-item p {
          font-size: 0.85em;
        }

        /* Skills Section */
        .skills-section {
          padding: 100px 50px;
          text-align: center;
        }
        .skills-section h2 {
          font-size: 3em;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 40px;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        .skill-item {
          background: rgba(0, 0, 0, 0.5);
          border: 2px solid #00ffff;
          padding: 20px;
          border-radius: 10px;
          text-transform: uppercase;
          font-weight: bold;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .skill-item:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(0, 255, 255, 0.5);
        }

        /* Contact Section - Creative Design */
        #contact {
          padding: 100px 50px;
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          border-radius: 10px;
          margin: 0 auto 100px;
          max-width: 600px;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
        }
        #contact h2 {
          font-size: 2.5em;
          margin-bottom: 20px;
        }
        #contact p {
          font-size: 1em;
          margin-bottom: 20px;
        }
        .contact-button {
          background-color: #00ffff;
          color: #000;
          border: none;
          padding: 15px 30px;
          font-size: 1em;
          border-radius: 50px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .contact-button:hover {
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
        }

        /* Footer */
        footer {
          text-align: center;
          padding: 20px;
          background: rgba(0,0,0,0.8);
        }

        /* Loading Screen */
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.5s ease-out;
        }
        .loading-content {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .letter {
          font-size: 8rem;
          font-weight: bold;
          color: #e60012;
          margin: 0 0.5rem;
          text-shadow: 0 0 10px rgba(230, 0, 18, 0.7);
          animation: pulsate 1.5s infinite alternate;
          opacity: 0;
        }
        .letter:nth-child(1) { animation-delay: 0s; }
        .letter:nth-child(2) { animation-delay: 0.2s; }
        .letter:nth-child(3) { animation-delay: 0.4s; }
        .letter:nth-child(4) { animation-delay: 0.6s; }
        .letter:nth-child(5) { animation-delay: 0.8s; }
        @keyframes pulsate {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
        }
      `}),h&&e("div",{className:"loading-screen",children:i("div",{className:"loading-content",children:[e("div",{className:"letter",children:"S"}),e("div",{className:"letter",children:"E"}),e("div",{className:"letter",children:"H"}),e("div",{className:"letter",children:"A"}),e("div",{className:"letter",children:"S"})]})}),i("header",{children:[e("div",{className:"logo",children:"Sehastrajit S"}),i("nav",{children:[e("a",{onClick:()=>document.getElementById("welcome").scrollIntoView({behavior:"smooth"}),children:"Home"}),e("a",{onClick:()=>document.getElementById("about").scrollIntoView({behavior:"smooth"}),children:"About"}),e("a",{onClick:()=>document.getElementById("experience").scrollIntoView({behavior:"smooth"}),children:"Experience"}),e("a",{onClick:()=>document.getElementById("skills").scrollIntoView({behavior:"smooth"}),children:"Skills"}),e("a",{onClick:()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"}),children:"Contact"})]})]}),e("div",{id:"canvas-container",children:e("canvas",{id:"myThreeJsCanvas"})}),i("main",{children:[e("section",{id:"welcome",children:i("div",{children:[e("h1",{children:"Welcome to My Digital Universe"}),e("p",{children:"I am Sehastrajit S \u2013 Data Scientist, Machine Learning Engineer, and Digital Creator. I transform data into insights and innovation."})]})}),e("section",{id:"about",children:i("div",{children:[e("h2",{children:"About Me"}),e("p",{children:"Data Scientist | Member of the Young Generation Coding Club @ VIT | Certified in GCP and Azure | Aspiring for MS in CS in the USA, Fall '25. I specialize in data preparation, predictive modeling, and visualization\u2014using technology to solve real-world challenges."})]})}),e("section",{id:"experience",children:i("div",{children:[e("h2",{children:"Experience"}),i("div",{className:"timeline",children:[i("div",{className:"timeline-item",children:[i("h3",{children:[e("span",{className:"role",children:"Machine Learning Engineer"}),e("span",{className:"company",children:"@ Omdena"})]}),e("span",{className:"date",children:e("strong",{children:"Jul 2024 - Oct 2024 (4 mos)"})}),e("span",{className:"location",children:"San Jose, CA, USA"}),e("p",{children:"Led data cleaning, developed predictive models, created visualizations, and supported policy recommendations for a Blue Zone longevity project."})]}),i("div",{className:"timeline-item",children:[i("h3",{children:[e("span",{className:"role",children:"Operations Manager"}),e("span",{className:"company",children:"@ VIT"})]}),e("span",{className:"date",children:e("strong",{children:"Sep 2022 - Oct 2024 (2 yrs 2 mos)"})}),e("span",{className:"location",children:"Chennai, Tamil Nadu, India"}),e("p",{children:"Managed operations and led the Young Generation Coding Club, enhancing leadership and interpersonal skills."})]}),i("div",{className:"timeline-item",children:[i("h3",{children:[e("span",{className:"role",children:"Research Assistant Intern"}),e("span",{className:"company",children:"@ VIT"})]}),e("span",{className:"date",children:e("strong",{children:"Jun 2023 - Aug 2023 (3 mos)"})}),e("span",{className:"location",children:"Remote"}),e("p",{children:"Contributed to data science research and analysis at the Centre for Healthcare Advancement, Innovation and Research."})]}),i("div",{className:"timeline-item",children:[i("h3",{children:[e("span",{className:"role",children:"Summer Research Intern"}),e("span",{className:"company",children:"@ Auburn University"})]}),e("span",{className:"date",children:e("strong",{children:"Aug 2023 - Jan 2024 (6 mos)"})}),e("span",{className:"location",children:"Remote, Auburn, AL, USA"}),e("p",{children:"Collaborated on data analysis and innovative research solutions in a dynamic remote setting."})]}),i("div",{className:"timeline-item",children:[i("h3",{children:[e("span",{className:"role",children:"Development Volunteer"}),e("span",{className:"company",children:"@ Larsen & Toubro"})]}),e("span",{className:"date",children:e("strong",{children:"Jan 2022 - Dec 2023 (2 yrs)"})}),e("span",{className:"location",children:"Chennai, Tamil Nadu, India"}),e("p",{children:"Supported development projects and technological initiatives, applying data-driven insights on-site."})]})]})]})}),i("section",{id:"skills",className:"skills-section",children:[e("h2",{children:"Skills"}),i("div",{className:"skills-grid",children:[e("div",{className:"skill-item",children:"Data Science"}),e("div",{className:"skill-item",children:"Machine Learning"}),e("div",{className:"skill-item",children:"Predictive Modeling"}),e("div",{className:"skill-item",children:"Data Visualization"}),e("div",{className:"skill-item",children:"Data Preparation"}),e("div",{className:"skill-item",children:"GCP"}),e("div",{className:"skill-item",children:"Azure"}),e("div",{className:"skill-item",children:"Python"}),e("div",{className:"skill-item",children:"Research"}),e("div",{className:"skill-item",children:"Ops Management"}),e("div",{className:"skill-item",children:"Leadership"}),e("div",{className:"skill-item",children:"Interpersonal Skills"})]})]}),e("section",{id:"contact",children:i("div",{className:"contact-container",children:[e("h2",{children:"Contact"}),i("p",{children:["Let\u2019s shape the future together. Reach out at"," ",e("a",{href:"mailto:hello@example.com",style:{color:"#00ffff"},children:"hello@example.com"})]}),e("button",{className:"contact-button",children:"Get in Touch"})]})})]}),e("footer",{children:"\xA9 2025 Sehastrajit S. All Rights Reserved."})]})}T.render(e(E.StrictMode,{children:e(O,{})}),document.getElementById("root"));
