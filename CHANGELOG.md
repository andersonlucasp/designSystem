# Changelog

Todas as mudanças relevantes deste projeto são documentadas aqui.
O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e o projeto adota [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Não lançado]

### Adicionado
- **Fundações**: tokens de cor (primitivos + semânticos), espaçamento, raio e
  tipografia, exportados do Figma e compilados via Style Dictionary.
- **Monorepo** Nx com pipeline token → componente → wrappers → Storybook.
- **Componentes** (Stencil, tokens-only, WCAG 2.1 AA):
  Button, Input, Checkbox, Radio, Switch, Select, Textarea, Alert, Badge,
  Spinner, Progress, Skeleton, Tooltip, Toast, Avatar, Tag, Table, Card,
  Divider, Accordion, Breadcrumb, Link, Tabs, Pagination, Dropdown, Modal,
  Calendar.
- **Wrappers** React, Angular e Vue gerados automaticamente.
- **Documentação viva** no Storybook com addon de acessibilidade (axe).
- **Regressão visual** via Chromatic (deploy automático por PR).

[Não lançado]: https://github.com/andersonlucasp/designSystem/commits/main
