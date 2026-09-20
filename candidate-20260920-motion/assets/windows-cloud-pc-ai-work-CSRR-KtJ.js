var e=`An ambitious dentist could build a version of this workflow. The tools are available, and the interface can begin with ordinary language rather than code.

I want to be equally clear about the other half of that statement: this is not a one-click website generator. The website still has source code, accounts, permissions, tests, hosting, and release decisions. AI changes how I direct the work. It does not make those responsibilities disappear.

This is the practical stack I use, how the pieces fit together, and where I would tell a do-it-yourself practice owner to start.

## A dentist can direct the work without writing code

A request can arrive as a typed note, a voice recording, or an authorized transcript from a Zoom conversation that has been checked to contain no patient information, credentials, or unrelated confidential material. It can sound like this:

\`\`\`text
The implant consultation page sounds like a treatment commitment.
Rewrite it so a patient understands that the first step is a conversation.
Keep the existing visual direction, check the related FAQ and call to action,
and show me the revised page on desktop and mobile before anything is published.
\`\`\`

Codex can read that instruction, inspect the repository, find the affected pages, change the copy and code, run checks, and prepare a preview. I do not have to hand-code each line.

Natural language is the control surface, but there is still an engineered system underneath it. A vague instruction can produce a vague result. The person directing the work still needs to define the outcome, supply accurate practice facts, notice what the model missed, and decide whether the result is ready.

OpenAI describes Codex as an agent that works with repositories, code, tests, and commands. Its [current Codex plan guide](https://help.openai.com/en/articles/11369540) also confirms Windows support and explains that access and usage limits vary by plan.

## The pieces in my workbench

My setup is deliberately made from familiar components rather than one proprietary black box.

| Piece | What it contributes | What it does not replace |
| --- | --- | --- |
| ChatGPT Work | Research, analysis, source comparison, and finished business deliverables | Practice facts, source judgment, or approval |
| Codex | Repository work, code and content changes, tests, commands, and technical review | A clear brief or human release decision |
| Windows Cloud PC | A persistent place to keep the tools available and resume work remotely | Dependable scheduling or a backup by itself |
| Git and GitHub | Version history, comparison, branches or worktrees, and a recoverable collaboration record | Testing, security, or proof that a change is good |
| Local browser preview | Inspection of the actual page at desktop and mobile sizes | Proof that a production deployment succeeded |
| Hosting platform | Delivery of one approved build to the public website | Authority to activate analytics, CRM, advertising, or messaging |
| Standards and work records | The audience, promises, constraints, checks, and decisions the next task must preserve | Judgment or responsibility |

Microsoft's [Windows 365 overview](https://learn.microsoft.com/en-us/windows-365/overview) explains the hosted Windows environment. The official [Git introduction](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) explains why version control preserves changes over time. Neither product is mandatory in exactly this form; the underlying jobs are continuity, traceability, review, and recovery.

## How one request moves through the stack

Suppose a practice owner records the implant-consultation request above.

I first turn that observation into a bounded instruction: clarify that the consultation is a conversation rather than a treatment commitment, preserve verified practice and clinician facts, inspect the related FAQ and call to action, and prepare a review candidate. The instruction can include the original voice note or meeting transcript only when its use is authorized and it has been checked to contain no patient information, credentials, or unrelated confidential material.

Codex reads the repository and the current standards, then locates the consultation page, FAQ, call to action, metadata, and tests that may be affected. Git shows the before-and-after change. Automated checks find known contradictions. The browser shows whether the revised explanation is prominent, readable, and consistent on a phone.

Only after those steps do I decide whether the candidate is good enough to show. Publishing is another action with its own target and authority.

That connected path is where much of the agility comes from. The original context travels with the task, and the same work session can reach a reviewable candidate without serial handoffs among an account manager, writer, designer, and developer. It is not a guarantee that every request is instant; difficult decisions, missing facts, integrations, and consequential changes deserve more time.

## What the $200 Pro account means—and what it does not

As of September 2026, I use a $200-per-month ChatGPT Pro account. OpenAI's [current Pro-plan description](https://help.openai.com/en/articles/9793128) lists Codex among the included capabilities and distinguishes the $200 tier by its higher usage allowance.

That is an honest description of my current subscription, not the minimum cost of trying the workflow. Codex is available across ChatGPT plans, with different limits, and OpenAI can change plans, prices, models, and allowances. A Cloud PC, domain, hosting, analytics, CRM, paid advertising, and other providers can add separate costs.

The interesting point is economic rather than promotional. A relatively small software stack lets me move across research, copy, design, code, testing, and analysis without maintaining a conventional staff for every specialty. The tradeoff is that the founder carries significant judgment, quality, security, and continuity responsibility. Lean does not mean unattended.

## Where Git earns its place

AI makes experimentation inexpensive. That makes disciplined version control more important, not less.

Before a change, I want to know which repository I am in, which version the candidate started from, and whether unfinished work already exists. A branch or worktree can isolate an experiment. The diff shows exactly what changed. A commit can preserve an accepted point. If a revision makes the page worse, I can compare it with the earlier state without relying on memory.

Git does not tell me whether the wording is accurate, the design is premium, or the call to action is ethical. It gives those judgments a concrete object. “I liked yesterday's version better” becomes a comparison between identifiable versions instead of an argument about recollection.

## A safe DIY starting point

I would not begin with a full production rebuild. Start with one low-risk page in a separate copy of the project.

1. Put the existing source in a private Git repository and confirm that you can restore it.
2. Remove credentials, patient information, private exports, and anything the AI task does not need.
3. Write one outcome in ordinary language, including what must remain unchanged.
4. Ask Codex to explain the affected files before changing them.
5. Create the change in a branch or worktree and run the available tests.
6. Open the local preview at desktop and mobile widths and read it as a patient.
7. Compare the diff, correct the result, and keep publication disabled.

The first useful exercise is not “build my entire website.” It is “clarify this one explanation without breaking the rest of the page.” That reveals whether the repository is understandable, the instructions are specific enough, and the review process can catch a regression.

## Worksheet: map a natural-language website change

\`\`\`text
Page and patient question:
Current problem:
Desired outcome in ordinary language:
Practice facts the change must preserve:
Claims or wording requiring professional review:
Files and related pages Codex expects to change:
Git branch, worktree, or candidate identifier:
Automated checks available:
Desktop and mobile review completed:
Anything the tests could not establish:
Publication and external actions disabled:
Decision: revise / keep as candidate / stop
\`\`\`

## What I would keep personal

I am comfortable asking AI to do a large amount of the preparation: inspect files, draft alternatives, make coordinated edits, run checks, and summarize the differences. I would not delegate the practice's identity, a clinical claim, a material offer decision, or the final release judgment to an unattended workflow.

For a dentist trying this independently, the goal should not be to become a software developer. The goal is to become a better director of a system: give it accurate context, make the desired patient experience clear, require inspectable work, and know when the result needs another set of eyes.

That is also what a client should expect from Smarter Practice. The tools make the work more direct. My responsibility is to make the result coherent, defensible, and useful to the practice.
`;export{e as default};