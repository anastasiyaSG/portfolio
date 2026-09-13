from pathlib import Path

from playwright.sync_api import sync_playwright


output_path = Path(__file__).parent.parent / 'public' / 'anastasiya-georgieva-resume.pdf'

html = r'''
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    @page { size: A4; margin: 0; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      color: #151B24;
      background: #F0F2F0;
      font-family: Arial, sans-serif;
      font-size: 9.2pt;
      line-height: 1.3;
    }
    main { width: 210mm; height: 297mm; padding: 15mm 16mm 12mm; }
    h1, h2, h3, p { margin: 0; }
    h1 { font-size: 25pt; letter-spacing: -0.7pt; line-height: 1; }
    h2 {
      margin-bottom: 4pt;
      font-size: 9pt;
      font-weight: 700;
      letter-spacing: 1.6pt;
      text-transform: uppercase;
      color: #2BA88E;
    }
    h3 { font-size: 10.5pt; line-height: 1.15; }
    .header { display: flex; justify-content: space-between; gap: 20mm; padding-bottom: 8pt; border-bottom: 1.2pt solid #D3D9D6; }
    .role { margin-top: 4pt; color: #5C6B7A; font-size: 12pt; }
    .contact { align-self: end; text-align: right; color: #5C6B7A; font-size: 8.5pt; line-height: 1.55; }
    .contact a { color: #2BA88E; text-decoration: none; }
    section { margin-top: 10pt; }
    .summary { font-size: 10pt; line-height: 1.4; max-width: 174mm; }
    .job { display: grid; grid-template-columns: 31mm 1fr; gap: 6mm; margin-top: 7pt; }
    .period { color: #5C6B7A; font-size: 8.5pt; }
    .company { color: #5C6B7A; margin-top: 1pt; }
    ul { margin: 3pt 0 0; padding-left: 13pt; }
    li { margin: 1.5pt 0; }
    .columns { display: grid; grid-template-columns: 1fr 1fr; gap: 12mm; }
    .skills { display: grid; grid-template-columns: 35mm 1fr; gap: 2pt 5mm; }
    .skill-label { color: #5C6B7A; font-weight: 700; }
    .project { margin-top: 5pt; }
    .project-title { font-weight: 700; }
    .project a { color: #2BA88E; text-decoration: none; }
    .footer { margin-top: 9pt; padding-top: 6pt; border-top: 1.2pt solid #D3D9D6; color: #5C6B7A; font-size: 8pt; }
  </style>
</head>
<body>
  <main>
    <header class="header">
      <div>
        <h1>Anastasiya Georgieva</h1>
        <p class="role">QA Engineer / SDET</p>
      </div>
      <div class="contact">
        Sofia, Bulgaria<br>
        <a href="mailto:anastassiya.georgieva@gmail.com">anastassiya.georgieva@gmail.com</a><br>
        linkedin.com/in/anastasiya-georgieva<br>
        github.com/anastasiyaSG<br>
        <a href="https://anastasiyasg.github.io/portfolio/">anastasiyasg.github.io/portfolio/</a>
      </div>
    </header>

    <section>
      <h2>Profile</h2>
      <p class="summary">Quality engineer focused on automation frameworks, risk-based testing, CI/CD quality gates, and early defect prevention across banking platforms, microservices, mobile applications, and agile teams.</p>
    </section>

    <section>
      <h2>Experience</h2>
      <article class="job">
        <div class="period">Jan 2023 — Present</div>
        <div><h3>Senior QA Engineer (Automation &amp; Quality Strategy)</h3><p class="company">TBI Bank</p><ul>
          <li>Designed and led a cross-organization test automation framework from scratch, moving delivery toward an automation-first model.</li>
          <li>Led a QA maturity assessment across 13 agile teams; findings became a recurring practice and informed broader automation adoption.</li>
          <li>Introduced JMeter and k6 performance testing; identified a sustained-load memory leak ahead of Black Friday and enabled mitigation before an incident.</li>
          <li>Built defect leakage analysis, strengthened quality gates, tested banking microservices and mobile apps, and mentored peers.</li>
        </ul></div>
      </article>
      <article class="job">
        <div class="period">Dec 2020 — Mar 2022</div>
        <div><h3>Quality Assurance Specialist</h3><p class="company">Barcode Systems, Bulgaria</p><ul>
          <li>Elicited requirements, authored user stories, reviewed ERP/BA integration specifications, and coordinated QA–Dev work across the SDLC.</li>
        </ul></div>
      </article>
      <article class="job">
        <div class="period">May 2020 — Aug 2020</div>
        <div><h3>Intern QA</h3><p class="company">Crea.bg</p><ul>
          <li>Designed validation scenarios and built a Selenium automation framework to improve early issue detection.</li>
        </ul></div>
      </article>
    </section>

    <section class="columns">
      <div>
        <h2>Core Skills</h2>
        <div class="skills">
          <div class="skill-label">Automation</div><div>Python, Playwright, Selenium, API testing, Postman, Swagger</div>
          <div class="skill-label">Performance</div><div>k6, JMeter, capacity testing, non-functional quality gates</div>
          <div class="skill-label">Quality</div><div>QA strategy, maturity assessment, defect leakage, risk-based testing, mentoring</div>
          <div class="skill-label">Delivery</div><div>GitHub Actions, CI/CD, Agile, PostgreSQL, MS SQL Server</div>
        </div>
      </div>
      <div>
        <h2>Selected Projects</h2>
        <div class="project"><span class="project-title">Portfolio QA automation demo</span><br>Playwright-based E2E test automation with reusable fixtures and page objects.</div>
        <div class="project"><span class="project-title">car-watcher</span><br>Python scraper with scheduled GitHub Actions alerts for new vehicle listings.<br><a href="https://github.com/anastasiyaSG/car-watcher">github.com/anastasiyaSG/car-watcher</a></div>
        <div class="project"><span class="project-title">Evolved CV Builder</span><br>React and TypeScript CV builder with editable sections and PDF export.<br><a href="https://github.com/anastasiyaSG/evolved_cv_builder">github.com/anastasiyaSG/evolved_cv_builder</a></div>
      </div>
    </section>

    <section>
      <h2>Certification</h2>
      <p>ISTQB Certified Tester, Specialist Level — Test Automation Engineer</p>
    </section>
    <div class="footer">anastasiyasg.github.io/portfolio/</div>
  </main>
</body>
</html>
'''

with sync_playwright() as playwright:
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.set_content(html)
    page.pdf(path=str(output_path), format='A4', print_background=True)
    browser.close()

print(output_path)