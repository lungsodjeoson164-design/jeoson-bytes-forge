<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
<!-- LOVABLE:BEGIN -->
## Design decisions
- Cyber portfolio design system lives entirely in src/styles.css (dark terminal theme, oklch tokens: neon cyan primary, magenta accent, terminal green). Orbitron display + JetBrains Mono body via Google Fonts link in __root.tsx. No hardcoded colors in components — extend tokens/utilities there instead.
