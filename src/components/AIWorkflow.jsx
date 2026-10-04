import { useState } from 'react'
import StatusLine from './StatusLine'
import DetailsDialog from './DetailsDialog'

const workflowSteps = [
  {
    title: 'Requirements refinement',
    description:
      'AI helps surface gaps, ambiguities, edge cases, and risks. I validate each finding against business rules and document verified logic in Confluence.',
  },
  {
    title: 'Test case design',
    description:
      'I use AI to draft structured positive, negative, boundary, and risk-based test cases, then review and correct them.',
  },
  {
    title: 'Documentation',
    description:
      'I document the test process, business logic, and test artifacts in Confluence and keep them traceable to requirements.',
  },
  {
    title: 'Automation',
    description:
      'I expand automated test coverage with AI-assisted code generation, followed by code review, refactoring, and stabilization for flakiness and maintainability.',
  },
  {
    title: 'Test data',
    description:
      'I generate synthetic data for manual and automated testing. I never use real or personal data.',
  },
  {
    title: 'Continuous improvement',
    description:
      'I feed defects, false positives, and AI mistakes back into prompts, templates, and the process.',
  },
]

const guardrails = [
  'I review every AI output before using it.',
  'I use synthetic data only; prompts contain no confidential, client, or personal data.',
  'I use company-approved tools and work with GDPR requirements in mind.',
  'I verify outputs against requirements, compare claims with documented business rules, and flag unsupported facts, hallucinations, or incorrect assumptions.',
  'AI is an accelerator, not a source of truth.',
]

const weeklyActivities = [
  'Refining requirements and checking business logic against Confluence',
  'Designing and maintaining test cases with AI assistance and manual review',
  'Extending automated UI/API tests and keeping the suite stable',
  'Preparing synthetic test data for manual testing',
  'Documenting the test process and artifacts',
  'Identifying risks early in the sprint and maintaining quality gates in CI/CD',
]

const toolTags = [
  'Claude Code',
  'Confluence',
  'Python',
  'Playwright',
  'pytest',
  'Selenium',
  'API testing',
  'k6',
  'JMeter',
  'GitHub Actions / CI/CD',
  'Synthetic test data',
]

export default function AIWorkflow() {
  const [detailsOpen, setDetailsOpen] = useState(false)

  return (
    <section
      id="ai-workflow"
      aria-labelledby="ai-workflow-title"
      className="px-6 md:px-16 max-w-6xl mx-auto py-24 border-t border-[var(--color-line)]"
    >
      <StatusLine status="WORKFLOW" label="AI-augmented QA" />
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
        <h2
          id="ai-workflow-title"
          className="font-[var(--font-display)] text-3xl md:text-4xl leading-tight"
        >
          AI-Augmented QA Workflow
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-[var(--color-ink)]/90">
          <p>
            I integrated AI tooling (Claude Code) into the full QA lifecycle. AI
            accelerates the work; I stay accountable for quality decisions.
          </p>
          <button
            type="button"
            onClick={() => setDetailsOpen(true)}
            className="font-[var(--font-mono)] text-sm text-[var(--color-signal-pass)] hover:underline"
          >
            View AI-augmented QA workflow →
          </button>
        </div>
      </div>

      <DetailsDialog
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        eyebrow="AI-augmented QA"
        title="AI-Augmented QA Workflow"
      >
        <p className="text-lg leading-relaxed text-[var(--color-ink)]/90 mb-8">
          AI supports the work; I own the quality decisions throughout the
          lifecycle.
        </p>

        <ol className="space-y-6 border-l border-[var(--color-line)] ml-3 pl-6 md:ml-4 md:pl-8">
          {workflowSteps.map((step, index) => (
            <li key={step.title} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[2.15rem] md:-left-[2.65rem] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] font-[var(--font-mono)] text-xs text-[var(--color-signal-pass)]"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-[var(--font-display)] text-xl mb-2">{step.title}</h3>
              <p className="leading-relaxed text-[var(--color-ink)]/85">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-[var(--font-display)] text-xl mb-4">
              Guardrails and responsible use
            </h3>
            <ul className="space-y-3 leading-relaxed">
              {guardrails.map((guardrail) => (
                <li key={guardrail} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 text-[var(--color-signal-pass)]">✓</span>
                  <span>{guardrail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[var(--font-display)] text-xl mb-4">Lessons learned</h3>
            <p className="leading-relaxed text-[var(--color-ink)]/85">
              AI helps most with edge-case discovery, boilerplate automation, and
              synthetic test data. Business-rule interpretation, assertions, and
              flaky logic need close human supervision.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-[var(--font-display)] text-xl mb-4">Day-to-day</h3>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 leading-relaxed">
            {weeklyActivities.map((activity) => (
              <li key={activity} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1 text-[var(--color-signal-pass)]">·</span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" aria-label="Workflow tools">
          {toolTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 border border-[var(--color-line)] rounded-full text-sm bg-white/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </DetailsDialog>
    </section>
  )
}
