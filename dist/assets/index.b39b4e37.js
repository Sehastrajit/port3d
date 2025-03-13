import{S as x,C as y,P as b,W as w,a as f,O as S,A as C,D as L,j as u,g as c,b as N,r as g,G as I,c as A,d as z,R as k,e as M}from"./vendor.a448862f.js";const j=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}};j();class T{constructor(a){this.scene=void 0,this.camera=void 0,this.renderer=void 0,this.fov=45,this.nearPlane=1,this.farPlane=1e3,this.canvasId=a,this.clock=void 0,this.controls=void 0,this.ambientLight=void 0,this.directionalLight=void 0}initialize(){this.scene=new x,this.scene.background=new y(0),this.camera=new b(this.fov,window.innerWidth/window.innerHeight,this.nearPlane,this.farPlane),this.camera.position.z=48;const a=document.getElementById(this.canvasId);this.renderer=new w({canvas:a,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.clock=new f,this.controls=new S(this.camera,this.renderer.domElement),this.ambientLight=new C(16777215,.9),this.ambientLight.castShadow=!0,this.scene.add(this.ambientLight),this.directionalLight=new L(16777215,2),this.directionalLight.position.set(0,32,64),this.scene.add(this.directionalLight),window.addEventListener("resize",()=>this.onWindowResize(),!1)}animate(){window.requestAnimationFrame(this.animate.bind(this)),this.render(),this.controls.update()}render(){this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}const e=u.exports.jsx,t=u.exports.jsxs;c.registerPlugin(N);function E(){const[h,a]=g.exports.useState(!0);return g.exports.useEffect(()=>{const r=new T("myThreeJsCanvas");r.initialize();const d=new I(200,50,65535,13107);r.scene.add(d),r.animate();let i=null;new A().load("./assets/gtr2/scene.gltf",o=>{i=o,o.scene.rotation.y=Math.PI/8,o.scene.position.set(0,3,0),o.scene.scale.set(600,600,600),r.scene.add(o.scene);const s=new z(16711680,2,500);s.position.set(50,50,50),r.scene.add(s);const v=new f;function p(){const m=v.getElapsedTime();i&&(i.scene.rotation.y+=.005,i.scene.position.y=3+Math.sin(m*2)*.5),s.position.x=50*Math.cos(m),s.position.z=50*Math.sin(m),requestAnimationFrame(p)}p()}),c.to(r.camera.position,{y:-60,ease:"none",scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:!0}}),c.utils.toArray(".timeline-item").forEach((o,s)=>{c.fromTo(o,{opacity:0,y:50},{opacity:1,y:0,duration:1,delay:s*.2,scrollTrigger:{trigger:o,start:"top 80%",toggleActions:"play none none reverse"}})});const l=setTimeout(()=>{a(!1)},3e3);return()=>clearTimeout(l)},[]),t("div",{children:[e("style",{children:`
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
      `}),h&&e("div",{className:"loading-screen",children:t("div",{className:"loading-content",children:[e("div",{className:"letter",children:"S"}),e("div",{className:"letter",children:"E"}),e("div",{className:"letter",children:"H"}),e("div",{className:"letter",children:"A"}),e("div",{className:"letter",children:"S"})]})}),t("header",{children:[e("div",{className:"logo",children:"Sehastrajit S"}),t("nav",{children:[e("a",{onClick:()=>document.getElementById("welcome").scrollIntoView({behavior:"smooth"}),children:"Home"}),e("a",{onClick:()=>document.getElementById("about").scrollIntoView({behavior:"smooth"}),children:"About"}),e("a",{onClick:()=>document.getElementById("experience").scrollIntoView({behavior:"smooth"}),children:"Experience"}),e("a",{onClick:()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"}),children:"Contact"})]})]}),e("div",{id:"canvas-container",children:e("canvas",{id:"myThreeJsCanvas"})}),t("main",{children:[e("section",{id:"welcome",children:t("div",{children:[e("h1",{children:"Welcome to My Digital Universe"}),e("p",{children:"I am Sehastrajit S \u2013 Data Scientist, Machine Learning Engineer, and Digital Creator. I transform data into insights and innovation."})]})}),e("section",{id:"about",children:t("div",{children:[e("h2",{children:"About Me"}),e("p",{children:"Data Scientist | Member of the Young Generation Coding Club @ VIT | Certified in GCP and Azure | Aspiring for MS in CS in the USA, Fall '25. I specialize in data preparation, predictive modeling, and visualization\u2014using technology to solve real-world challenges."})]})}),e("section",{id:"experience",children:t("div",{children:[e("h2",{children:"Experience & Skills"}),t("div",{className:"timeline",children:[t("div",{className:"timeline-item",children:[e("h3",{children:"Machine Learning Engineer @ Omdena"}),e("span",{className:"date",children:e("strong",{children:"Jul 2024 - Oct 2024 (4 mos)"})}),e("span",{className:"location",children:"San Jose, CA, USA"}),e("p",{children:"Led data cleaning, developed predictive models, created visualizations, and supported policy recommendations for a Blue Zone longevity project."})]}),t("div",{className:"timeline-item",children:[e("h3",{children:"Operations Manager @ VIT"}),e("span",{className:"date",children:e("strong",{children:"Sep 2022 - Oct 2024 (2 yrs 2 mos)"})}),e("span",{className:"location",children:"Chennai, Tamil Nadu, India"}),e("p",{children:"Managed operations and led the Young Generation Coding Club, enhancing leadership and interpersonal skills."})]}),t("div",{className:"timeline-item",children:[e("h3",{children:"Research Assistant Intern @ VIT"}),e("span",{className:"date",children:e("strong",{children:"Jun 2023 - Aug 2023 (3 mos)"})}),e("span",{className:"location",children:"Remote"}),e("p",{children:"Contributed to data science research and analysis at the Centre for Healthcare Advancement, Innovation and Research."})]}),t("div",{className:"timeline-item",children:[e("h3",{children:"Summer Research Intern @ Auburn University"}),e("span",{className:"date",children:e("strong",{children:"Aug 2023 - Jan 2024 (6 mos)"})}),e("span",{className:"location",children:"Remote, Auburn, AL, USA"}),e("p",{children:"Collaborated on data analysis and innovative research solutions in a dynamic remote setting."})]}),t("div",{className:"timeline-item",children:[e("h3",{children:"Development Volunteer @ Larsen & Toubro"}),e("span",{className:"date",children:e("strong",{children:"Jan 2022 - Dec 2023 (2 yrs)"})}),e("span",{className:"location",children:"Chennai, Tamil Nadu, India"}),e("p",{children:"Supported development projects and technological initiatives, applying data-driven insights on-site."})]})]}),t("div",{style:{marginTop:"40px"},children:[e("h2",{children:"Skills"}),e("p",{children:"Data Science, Machine Learning, Predictive Modeling, Data Visualization, Data Preparation, GCP, Azure, Python, Research, Operations Management, Leadership, Interpersonal Skills."})]})]})}),e("section",{id:"contact",children:t("div",{children:[e("h2",{children:"Contact"}),t("p",{children:["Let\u2019s shape the future together. Reach out at ",e("a",{href:"mailto:hello@example.com",style:{color:"#00ffff"},children:"sehastrajitjob@gmail..com"}),"."]})]})})]}),e("footer",{children:"\xA9 2025 Sehastrajit S. All Rights Reserved."})]})}k.render(e(M.StrictMode,{children:e(E,{})}),document.getElementById("root"));
