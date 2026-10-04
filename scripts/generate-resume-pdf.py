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
    main { width: 210mm; min-height: 297mm; padding: 15mm 16mm 12mm; }
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
    .workflow { margin-top: 10pt; }
    .workflow-intro { margin-bottom: 4pt; }
    .workflow-steps { display: grid; grid-template-columns: 1fr 1fr; gap: 3pt 10mm; }
    .workflow-step { margin-top: 3pt; }
    .workflow-step strong { color: #151B24; }
    .guardrails { columns: 2; column-gap: 10mm; }
    .education-item { display: grid; grid-template-columns: 31mm 1fr; gap: 6mm; margin-top: 5pt; }
    .education-item h3 { font-size: 9.5pt; }
    .education-details { margin-top: 1pt; color: #5C6B7A; }
    .footer { margin-top: 9pt; padding-top: 6pt; border-top: 1.2pt solid #D3D9D6; color: #5C6B7A; font-size: 8pt; }
    @media print {
      section, .education-item, .workflow-step { break-inside: avoid; }
    }
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

    <section class="workflow">
      <h2>AI-Augmented QA Workflow</h2>
      <p class="workflow-intro">I integrated AI tooling (Claude Code) into the full QA lifecycle. AI accelerates the work; I stay accountable for quality decisions.</p>
      <div class="workflow-steps">
        <p class="workflow-step"><strong>Requirements refinement:</strong> AI helps surface gaps, ambiguities, edge cases, and risks. I validate findings against business rules and document verified logic in Confluence.</p>
        <p class="workflow-step"><strong>Test case design:</strong> I use AI to draft positive, negative, boundary, and risk-based cases, then review and correct them.</p>
        <p class="workflow-step"><strong>Documentation:</strong> I document test processes, business logic, and artifacts in Confluence, traceable to requirements.</p>
        <p class="workflow-step"><strong>Automation:</strong> AI-assisted code generation helps expand coverage; I review, refactor, and stabilize the code for flakiness and maintainability.</p>
        <p class="workflow-step"><strong>Test data:</strong> I generate synthetic data for manual and automated testing; I never use real or personal data.</p>
        <p class="workflow-step"><strong>Continuous improvement:</strong> Defects, false positives, and AI mistakes inform prompts, templates, and process improvements.</p>
      </div>
      <p class="workflow-step"><strong>Responsible use:</strong> I review every AI output, use company-approved tools with GDPR awareness, keep confidential and personal data out of prompts, and verify claims against requirements. AI is an accelerator, not a source of truth.</p>
      <p class="workflow-step"><strong>Lessons learned:</strong> AI helps most with edge cases, boilerplate automation, and synthetic data. Business-rule interpretation, assertions, and flaky logic need close supervision.</p>
      <p class="workflow-step"><strong>Day-to-day:</strong> Refining requirements, maintaining reviewed test cases, extending stable UI/API automation, preparing synthetic data, documenting artifacts, and identifying sprint risks and CI/CD quality gates.</p>
      <p class="workflow-step"><strong>Tools:</strong> Claude Code, Confluence, Python, Playwright, pytest, Selenium, API testing, k6, JMeter, GitHub Actions / CI/CD, synthetic test data.</p>
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
      <h2>Education</h2>
      <article class="education-item">
        <div class="period">2019 — 2020</div>
        <div><h3>QA Automation training</h3><p class="company">Software University (SoftUni)</p><p class="education-details">Programming Basics with C#; Fundamentals of Programming with C# (Jan 2020, 6.00/6.00); QA Automation (May 2020, 5.02/6.00); Agile Fundamentals with Scrum (Jan 2022, 6.00/6.00).</p></div>
      </article>
      <article class="education-item">
        <div class="period">2013 — 2015</div>
        <div><h3>MSc, Logistics Engineering</h3><p class="company">Technical University of Sofia</p><p class="education-details">Grade: A / Excellent. Thesis: “Passenger and Baggage Flows at an Airport Terminal”. Honor award for excellent academic results.</p></div>
      </article>
      <article class="education-item">
        <div class="period">2008 — 2012</div>
        <div><h3>BSc, Aviation Engineering</h3><p class="company">Technical University of Sofia</p><p class="education-details">Electrical aviation engineering, radar and navigation systems.</p></div>
      </article>
      <p class="education-details">Engineering background in safety-critical, process-driven fields, which shaped my risk-based approach to quality.</p>
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