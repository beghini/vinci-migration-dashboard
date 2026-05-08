// Gerado automaticamente por export-issues-notion.ps1 em 2026-05-08 14:00
// Fonte: Notion — Banco Chamados (Vinci) | 6 issues
// NÃO editar manualmente — re-execute o script para atualizar.
// Carregado por: claude_design/Vinci Migration Dashboard.html via <script src="issues.js">
window.ISSUES_DATA = [
  {
    "id": "ISSUE-012",
    "titulo": "Queries multi-empresa (UNION ALL) em 28 fontes — tabelas empresas 02-08 inexistentes no TOTVS Cloud",
    "modulo": "SIGACOM, SIGAGPE, SIGACTB, SIGAFIN, SIGATEC",
    "tipo": "Sustentação",
    "status": "Concluído",
    "status_notion": "Concluído",
    "prioridade": "Alta",
    "descricao": "O ambiente de origem era compartilhado entre múltiplas empresas (01 a 09+). No novo TOTVS Cloud, a Vinci opera exclusivamente com a empresa 01 (4 filiais). 28 fontes contêm queries que referenciam via UNION ALL, JOIN direto ou StartJob+RPCSetEnv tabelas/contextos de empresas 02 a 08 (ex: SE2020, SD1030, SRA040), que não foram criadas no novo servidor.",
    "observacoes": "28 fontes tratados. Último: MATA010_PE.prw (commits cd348c7 + 3a8f506, 08/05/2026) — replicação de produtos entre empresas removida, PE interrompido com Return .F.",
    "complexidade": "Alta"
  },
  {
    "id": "ISSUE-013",
    "titulo": "Encoding CP1252 nos fontes ADVPL — configurar .gitattributes e VS Code no repositório tsm-vinci",
    "modulo": "Infraestrutura / Repositório",
    "tipo": "Sustentação",
    "status": "Concluído",
    "status_notion": "Concluído",
    "prioridade": "Média",
    "descricao": "Os fontes ADVPL/TLPP estão em CP1252 (Windows-1252) mas o repositório não possui .gitattributes configurado nem settings do VS Code, causando exibição incorreta de caracteres especiais no diff/Git Graph. Não há corrupção real nos bytes. Solução: adicionar .gitattributes com eol=crlf + linguist-language=Harbour e .vscode/settings.json com files.encoding=windows1252.",
    "observacoes": "Concluído. .gitattributes e .vscode/settings.json já existiam (commits 4a68cfa e 2163377). git add --renormalize normalizou EOL de MT120OK.prw (LF→CRLF), commit 88abd6c.",
    "complexidade": "Baixa"
  },
  {
    "id": "ISSUE-014",
    "titulo": "Levantamento de Parâmetros SX6 (GETMV) — URLs, IPs e Endpoints a Revisar para Migração Cloud",
    "modulo": "Transversal (todos os módulos)",
    "tipo": "Sustentação",
    "status": "Em análise",
    "status_notion": "Em Revisão",
    "prioridade": "Alta",
    "descricao": "Identificar em todos os 443 fontes do repositório tsm-vinci quais utilizam GETMV() para acessar parâmetros SX6 que referenciam URLs, IPs fixos ou endpoints de integração. O ambiente de origem possui parâmetros configurados para o servidor antigo compartilhado; no novo TOTVS Cloud todos esses valores precisarão ser revisados e recadastrados. Objetivo: gerar inventário completo de parâmetros sensíveis à migração.",
    "observacoes": "Valores exportados do servidor origem (06/05/2026). 45 parâmetros coletados. Problemas críticos: 4 IPs fixos inválidos no Cloud (172.22.69.104, 10.14.25.78, 10.14.25.71, 172.21.64.52), 7 caminhos de arquivo locais do servidor antigo, MV_ECMPSW vazio (senha Fluig). Próximo: time de implantação TOTVS deve recadastrar parâmetros com valores do novo ambiente antes do go-live.",
    "complexidade": "Alta"
  },
  {
    "id": "ISSUE-015",
    "titulo": "RPCSetEnv com empresa != '01' em 8 fontes — contexto de empresa inválido no TOTVS Cloud",
    "modulo": "SIGACOM, SIGACTB, SIGAEST, SIGAGPE",
    "tipo": "Sustentação",
    "status": "Concluído",
    "status_notion": "Concluído",
    "prioridade": "Alta",
    "descricao": "O ambiente de origem era compartilhado entre múltiplas empresas (01 a 09+). A função RPCSetEnv() abre contexto de processamento em outra empresa/filial. Em 8 fontes, o primeiro parâmetro (empresa) está hardcoded com valores diferentes de '01' (02, 03, 04, 05, 07). No TOTVS Cloud, apenas a empresa '01' existe — essas chamadas falharão em produção com erro de empresa não encontrada ou contexto inválido.",
    "observacoes": "8 fontes analisados e tratados. Jobs que processavam dados de empresas inexistentes no novo ambiente foram desativados ou adaptados para empresa 01.",
    "complexidade": "Alta"
  },
  {
    "id": "ISSUE-016",
    "titulo": "Campos no fonte sem correspondência no SX3/banco — rastreamento contínuo até go-live",
    "modulo": "SIGACOM",
    "tipo": "Sustentação",
    "status": "Entrega / Testes",
    "status_notion": "Entrega / Testes",
    "prioridade": "Alta",
    "descricao": "Durante a validação dos fontes customizados para a migração ao TOTVS Cloud, foram encontrados campos referenciados no código ADVPL/TLPP que não existem no dicionário de dados (SX3) do novo ambiente. Esta issue é um rastreador contínuo — permanece aberta até o go-live. A cada novo campo identificado, registra-se o campo, a tabela, os fontes afetados e a ação definida.",
    "observacoes": "C7_X_PREID e C7_X_REGRD (SC7) corrigidos em MT120OK.prw e IBCOMR09.PRW — commit 66f74d1 (08/05/2026). Issue permanece aberta para novos campos identificados ao longo do projeto.",
    "complexidade": "Alta"
  }
];
