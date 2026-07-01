<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Javier Vargas | ESG & Data Analyst</title>
  <link rel="stylesheet" href="style.css.txt">
</head>
<body class="home">

<nav class="nav">
  <div class="logo">JVG</div>
  <ul>
    <li><button onclick="showView('home')">Home</button></li>
    <li><button onclick="showView('about')">About</button></li>
    <li><button onclick="showView('projects')">Projects</button></li>
    <li><button onclick="showView('contact')">Contact</button></li>
  </ul>
</nav>

<!-- HOME -->
<section class="view home active">
  <div class="hero">
    <h1>Javier Vargas González</h1>
    <p>Environmental Engineer · ESG & Carbon Data Analyst</p>
  </div>
</section>

<!-- ABOUT -->
<section class="view about">
  <div class="container">
    <h2>About Me</h2>
    <p>
      Environmental Engineer and ESG Analyst with experience in carbon emissions,
      sustainability reporting (GRI, TCFD) and data analytics applied to climate and energy.
    </p>

    <h3>Skills</h3>
    <div class="skills-grid">
      <span>Python</span><span>SQL</span><span>R</span>
      <span>ESG Reporting</span><span>Power BI</span><span>Tableau</span>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section class="view projects">
  <div class="container">
    <h2>Projects</h2>

    <div class="projects-grid">

      <div class="project-card">
        <h3>Global CO₂ Emissions Analysis</h3>
        <p class="preview">
          Global dataset analysis by country and region identifying emissions trends...
        </p>

        <div class="full">
          <p>
            Full analysis of CO₂ emissions by country and continent using
            Python, pandas and matplotlib. Includes reduction scenarios
            aligned with climate targets.
          </p>
          <a href="https://www.kaggle.com/code/javiervargasgonzlez/environmental-analysis-report-on-global-emissions" target="_blank">
            View Project →
          </a>
        </div>

        <button class="toggle">Read more</button>
      </div>

      <div class="project-card">
        <h3>Auto Parts Demand – USA 2024</h3>
        <p class="preview">
          Analysis of the most demanded automotive parts in the US using NHTSA data...
        </p>

        <div class="full">
          <p>
            SQL-based data transformation and Tableau dashboards to analyze demand trends,
            sector performance and future insights.
          </p>
          <a href="https://www.kaggle.com/code/javiervargasgonzlez/auto-parts-in-demand-in-the-us-in-2024" target="_blank">
            View Project →
          </a>
        </div>

        <button class="toggle">Read more</button>
      </div>

    </div>
  </div>
</section>

<!-- CONTACT -->
<section class="view contact">
  <div class="container">
    <h2>Contact</h2>
    <p>Email: javo.vg@gmail.com</p>
    <p>
      <a href="https://www.linkedin.com/in/javier-vargas-gonza/" target="_blank">LinkedIn</a> ·
      <a href="https://github.com/javiervargasgonzalez" target="_blank">GitHub</a>
    </p>
  </div>
</section>

<footer>
  © 2026 · Javier Vargas
</footer>

<script src="script.js"></script>
</body>
