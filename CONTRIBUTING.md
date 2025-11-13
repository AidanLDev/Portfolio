# Contributing to Portfolio

Thank you for your interest in contributing to this repository. Contributions are welcome — please follow these guidelines to make the process smooth.

## Where to start

- Browse existing issues or open a new one to discuss larger changes.
- For small fixes or improvements, open a pull request following the steps below.

## Workflow

1. Fork the repository.
2. Create a branch named `feat/short-description` or `fix/short-description`.
3. Make changes in your branch, run tests and linters locally.
4. Open a pull request against `master` with a clear title and description.

## Development

- Install dependencies: `pnpm install`
- Start dev server: `pnpm dev`
- Run tests: `pnpm test`
- Run lints: `pnpm lint`

If a change requires infrastructure or secrets, open an issue first and coordinate with maintainers.

## Pull request guidelines

- Reference related issues in the PR description (e.g. `Closes #123`).
- Keep PRs focused and small where possible.
- Include testing steps in the PR template.
- Ensure the project builds and tests pass.

## Commit messages

Use clear messages. Prefer the format:

```
type(scope): short summary

longer description (optional)
```

Where `type` is one of `feat`, `fix`, `docs`, `chore`, `refactor`, `test`.

## Code style

- Follow existing project conventions (TypeScript, React, SCSS modules).
- Run the project's linters before opening a PR.

## Communication

If you need help or want to propose a design change, open an issue first. For sensitive reports (security, harassment), contact `dev@aidanlowson.com`.
