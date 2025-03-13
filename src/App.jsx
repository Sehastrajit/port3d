import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from './lib/SceneInit';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Three.js scene on our canvas with id "myThreeJsCanvas"
    const sceneInit = new SceneInit('myThreeJsCanvas');
    sceneInit.initialize();

    // Add a neon grid helper to simulate a futuristic surface
    const gridHelper = new THREE.GridHelper(200, 50, 0x00ffff, 0x003333);
    sceneInit.scene.add(gridHelper);

    // Start the scene animation loop
    sceneInit.animate();

    // Load the car GLTF model and add animations
    let loadedModel = null;
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('./assets/gtr2/scene.gltf', (gltfScene) => {
      loadedModel = gltfScene;
      gltfScene.scene.rotation.y = Math.PI / 8;
      gltfScene.scene.position.set(0, 3, 0);
      gltfScene.scene.scale.set(600, 600, 600);
      sceneInit.scene.add(gltfScene.scene);

      // Add a dynamic point light for flashy highlights
      const pointLight = new THREE.PointLight(0xff0000, 2, 500);
      pointLight.position.set(50, 50, 50);
      sceneInit.scene.add(pointLight);

      const clock = new THREE.Clock();
      function animateCar() {
        const elapsed = clock.getElapsedTime();
        if (loadedModel) {
          // Continuous rotation and a gentle vertical bounce
          loadedModel.scene.rotation.y += 0.005;
          loadedModel.scene.position.y = 3 + Math.sin(elapsed * 2) * 0.5;
        }
        // Animate point light on a circular path
        pointLight.position.x = 50 * Math.cos(elapsed);
        pointLight.position.z = 50 * Math.sin(elapsed);
        requestAnimationFrame(animateCar);
      }
      animateCar();
    });

    // Animate camera position with GSAP for a parallax scroll effect
    gsap.to(sceneInit.camera.position, {
      y: -60,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    // Animate timeline items: fade in and slide upward as they scroll into view
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          delay: index * 0.2, 
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animate skill cards as they scroll into view
    gsap.utils.toArray('.skill-item').forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          delay: index * 0.1, 
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Remove the loading screen after a delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Global Styles & Theme */}
      <style>{`
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

        /* Updated Contact Section - Creative Neon Design */
        #contact {
          position: relative;
          padding: 100px 50px;
          margin: 100px auto;
          max-width: 600px;
          background: rgba(0, 0, 0, 0.8);
          border: 2px solid transparent;
          border-radius: 10px;
          overflow: hidden;
        }

        #contact:before {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #00ffff, #ff00ff, #00ffff);
          z-index: -1;
          filter: blur(10px);
          opacity: 0.7;
          animation: neon-border 5s linear infinite;
        }

        @keyframes neon-border {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }

        #contact .contact-container {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        #contact h2 {
          font-size: 2.5em;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        #contact p {
          font-size: 1.1em;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        /* Animated underline for email link */
        #contact a {
          color: #00ffff;
          text-decoration: none;
          position: relative;
        }

        #contact a:after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #00ffff;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }

        #contact a:hover:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        /* Neon Ripple Button Effect */
        .contact-button {
          background-color: transparent;
          border: 2px solid #00ffff;
          color: #00ffff;
          padding: 15px 30px;
          font-size: 1em;
          border-radius: 50px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .contact-button:before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(0, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.4s ease, height 0.4s ease;
        }

        .contact-button:hover {
          color: #000;
        }

        .contact-button:hover:before {
          width: 200%;
          height: 500%;
        }

      `}</style>

      {/* Loading Screen */}
      {loading && (
        <div className="loading-screen">
          <div className="loading-content">
            <div className="letter">S</div>
            <div className="letter">E</div>
            <div className="letter">H</div>
            <div className="letter">A</div>
            <div className="letter">S</div>
          </div>
        </div>
      )}

      {/* Header Navigation */}
      <header>
        <div className="logo">Sehastrajit S</div>
        <nav>
          <a onClick={() => document.getElementById('welcome').scrollIntoView({ behavior: 'smooth' })}>Home</a>
          <a onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</a>
          <a onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>Experience</a>
          <a onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Skills</a>
          <a onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</a>
        </nav>
      </header>

      {/* Canvas Container */}
      <div id="canvas-container">
        <canvas id="myThreeJsCanvas" />
      </div>

      {/* Main Content */}
      <main>
        {/* Welcome Section */}
        <section id="welcome">
          <div>
            <h1>Welcome to My Digital Universe</h1>
            <p>
              I am Sehastrajit S – Data Scientist, Machine Learning Engineer, and Digital Creator.
              I transform data into insights and innovation.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <div>
            <h2>About Me</h2>
            <p>
              Data Scientist | Member of the Young Generation Coding Club @ VIT | Certified in GCP and Azure | Aspiring for MS in CS in the USA, Fall '25.
              I specialize in data preparation, predictive modeling, and visualization—using technology to solve real-world challenges.
            </p>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section id="experience">
          <div>
            <h2>Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <h3>
                  <span className="role">Machine Learning Engineer</span>
                  <span className="company">@ Omdena</span>
                </h3>
                <span className="date"><strong>Jul 2024 - Oct 2024 (4 mos)</strong></span>
                <span className="location">San Jose, CA, USA</span>
                <p>
                  Led data cleaning, developed predictive models, created visualizations, and supported policy recommendations for a Blue Zone longevity project.
                </p>
              </div>
              <div className="timeline-item">
                <h3>
                  <span className="role">Operations Manager</span>
                  <span className="company">@ VIT</span>
                </h3>
                <span className="date"><strong>Sep 2022 - Oct 2024 (2 yrs 2 mos)</strong></span>
                <span className="location">Chennai, Tamil Nadu, India</span>
                <p>
                  Managed operations and led the Young Generation Coding Club, enhancing leadership and interpersonal skills.
                </p>
              </div>
              <div className="timeline-item">
                <h3>
                  <span className="role">Research Assistant Intern</span>
                  <span className="company">@ VIT</span>
                </h3>
                <span className="date"><strong>Jun 2023 - Aug 2023 (3 mos)</strong></span>
                <span className="location">Remote</span>
                <p>
                  Contributed to data science research and analysis at the Centre for Healthcare Advancement, Innovation and Research.
                </p>
              </div>
              <div className="timeline-item">
                <h3>
                  <span className="role">Summer Research Intern</span>
                  <span className="company">@ Auburn University</span>
                </h3>
                <span className="date"><strong>Aug 2023 - Jan 2024 (6 mos)</strong></span>
                <span className="location">Remote, Auburn, AL, USA</span>
                <p>
                  Collaborated on data analysis and innovative research solutions in a dynamic remote setting.
                </p>
              </div>
              <div className="timeline-item">
                <h3>
                  <span className="role">Development Volunteer</span>
                  <span className="company">@ Larsen & Toubro</span>
                </h3>
                <span className="date"><strong>Jan 2022 - Dec 2023 (2 yrs)</strong></span>
                <span className="location">Chennai, Tamil Nadu, India</span>
                <p>
                  Supported development projects and technological initiatives, applying data-driven insights on-site.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">Data Science</div>
            <div className="skill-item">Machine Learning</div>
            <div className="skill-item">Predictive Modeling</div>
            <div className="skill-item">Data Visualization</div>
            <div className="skill-item">Data Preparation</div>
            <div className="skill-item">GCP</div>
            <div className="skill-item">Azure</div>
            <div className="skill-item">Python</div>
            <div className="skill-item">Research</div>
            <div className="skill-item">Ops Management</div>
            <div className="skill-item">Leadership</div>
            <div className="skill-item">Interpersonal Skills</div>
          </div>
        </section>

        {/* Contact Section with Updated Creative Design */}
        <section id="contact">
          <div className="contact-container">
            <h2>Contact</h2>
            <p>
              Let’s shape the future together. Reach out at{" "}
              <a href="mailto:sehastrajitjob@gmail.com">sehastrajitjob@gmail.com</a>
            </p>
            <button className="contact-button">Get in Touch</button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer>
        &copy; 2025 Sehastrajit S. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
