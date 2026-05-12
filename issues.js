// Gerado automaticamente por export-issues-notion.ps1 em 2026-05-12 12:45
// Fonte: Notion — Banco Chamados (Vinci) | 8 issues
// NÃO editar manualmente — re-execute o script para atualizar.
// Carregado por: deploy/index.html via <script src="issues.js">
window.ISSUES_DATA = [
  {
    "id": "ISSUE-012",
    "titulo": "Queries multi-empresa (UNION ALL) em 28 fontes — tabelas empresas 02-08 inexistentes no TOTVS Cloud",
    "modulo": "SIGACOM, SIGAGPE, SIGACTB, SIGAFIN, SIGATEC",
    "tipo": "Sustentação",
    "status": "Concluído",
    "status_notion": "Concluído",
    "prioridade": "Urgente",
    "descricao": "O ambiente de origem era compartilhado entre múltiplas empresas (01 a 09+). No novo TOTVS Cloud, a Vinci opera exclusivamente com a empresa 01 (4 filiais). 28 fontes contêm queries que referenciam via UNION ALL, JOIN direto ou StartJob+RPCSetEnv tabelas/contextos de empresas 02 a 08 (ex: SE2020, SD1030, SRA040), que não foram criadas no novo servidor. Todos os 28 fontes falharão com erro de objeto inexistente ou contexto inválido no TOTVS Cloud ao serem executados em produção.",
    "observacoes": "28 fontes tratados. Último: MATA010_PE.prw (commits cd348c7 + 3a8f506, 08/05/2026) — replicação de produtos entre empresas removida, PE interrompido com Return .F. Aguarda compilação e teste no TDS homologação.",
    "complexidade": "Alta"
  },
  {
    "id": "ISSUE-013",
    "titulo": "Encoding CP1252 nos fontes ADVPL — configurar .gitattributes e VS Code no repositório tsm-vinci",
    "modulo": "Infraestrutura / Repositório",
    "tipo": "Sustentação",
    "status": "Concluído",
    "status_notion": "Concluído",
    "prioridade": "Normal",
    "descricao": "Os fontes ADVPL/TLPP estão em CP1252 (Windows-1252) mas o repositório não possui .gitattributes configurado nem settings do VS Code, causando exibição incorreta de caracteres especiais no diff/Git Graph. Não há corrupção real nos bytes. Solução: adicionar .gitattributes com eol=crlf + linguist-language=Harbour e .vscode/settings.json com files.encoding=windows1252.",
    "observacoes": "Concluído. .gitattributes e .vscode/settings.json já existiam (commits 4a68cfa e 2163377). git add --renormalize normalizou EOL de MT120OK.prw (LF→CRLF), commit 88abd6c. Nota: git diff/Git Graph ainda exibe ● para CP1252 — limitação do Git sem driver textconv; não estava no escopo do issue.",
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
    "observacoes": "Varredura automática (scan-repo.ps1) identificou 8 fontes. Próximo passo: analisar cada fonte para determinar se o job deve ser desativado (processava dados de empresa que não existe mais) ou adaptado para empresa 01.",
    "complexidade": "Alta"
  },
  {
    "id": "ISSUE-016",
    "titulo": "Campos no fonte sem correspondência no SX3/banco — rastreamento contínuo até go-live",
    "modulo": "SIGACOM",
    "tipo": "Sustentação",
    "status": "Aguardando cliente",
    "status_notion": "Entrega / Testes",
    "prioridade": "Alta",
    "descricao": "Durante a migração para o TOTVS Cloud, foram identificados campos customizados referenciados nos fontes ADVPL que não possuem correspondência no dicionário de dados (SX3) do novo ambiente. Esta issue é um rastreador contínuo — permanece aberta até o go-live. A cada novo campo identificado, registra-se o campo, a tabela, os fontes que o utilizam e a ação tomada.",
    "observacoes": "C7_X_PREID e C7_X_REGRD (SC7) corrigidos em MT120OK.prw e IBCOMR09.PRW — commit 66f74d1 (08/05/2026). Issue permanece aberta para novos campos identificados ao longo do projeto.",
    "complexidade": "Alta"
  },
  {
    "id": "ISSUE-018",
    "titulo": "Identificar relatórios que utilizam acesso via VIEW",
    "modulo": "SIGACOM, SIGAFIN",
    "tipo": "Sustentação",
    "status": "Em desenvolvimento",
    "status_notion": "Em Desenvolvimento",
    "prioridade": "Alta",
    "descricao": "Fontes do repositório acessam diretamente VIEWs SQL (ex: V_XRELPC, V_XRELSC, V_XRELFI) que não estão ativas no ambiente migrado TOTVS Cloud. Necessário identificar todos os fontes afetados antes de planejar a correção.",
    "observacoes": "Correção aplicada em 08/05/2026: FwAlertWarning + Return inseridos nos 6 fontes afetados (IBCOMR04, IBCOMR05, IBCOMR10, XRELPC, XRELSC, XRELFI). Commit 1814168 na branch develop. Aguardando validação no ambiente TOTVS Cloud.",
    "complexidade": "Média"
  },
  {
    "id": "ISSUE-020",
    "titulo": "Desativar rotinas de replicação multi-empresa (WIZCADSA2, MATA020_PE, MATA010_PE)",
    "modulo": "SIGATEC / SIGACOM",
    "tipo": "Sustentação",
    "status": "Concluído",
    "status_notion": "Concluído",
    "prioridade": "Normal",
    "descricao": "No ambiente de origem, a Vinci operava em servidor compartilhado com múltiplas empresas (grupos 01–09+). Três rotinas foram desenvolvidas para replicar cadastros entre grupos: WIZCADSA2 (wizard SA2), MATA020_PE (PE fornecedores) e MATA010_PE (PE produtos). No novo ambiente TOTVS Cloud dedicado (empresa 01 única), essas rotinas não se aplicam e foram desativadas via comentário de código.",
    "observacoes": "Concluído. Rotinas comentadas (não excluídas) — pendente confirmação do cliente para exclusão definitiva do repositório. Commits: 175506d, cd348c7, 3a8f506.",
    "complexidade": "Baixa"
  },
  {
    "id": "ISSUE-021",
    "titulo": "Ajustes endpoint para integração Solicitação e Pedido de Compras com o Fluig",
    "modulo": "SIGACOM",
    "tipo": "Sustentação",
    "status": "Concluído",
    "status_notion": "Concluído",
    "prioridade": "Alta",
    "descricao": "Com a migração para o novo ambiente TOTVS Cloud dedicado, os endpoints de integração com o Fluig precisam ser validados e ajustados. As rotinas M110STTS (PE pós-gravação da SC) e MT120FIM (PE pós-finalização do PC) realizam chamadas SOAP ao ECMWorkflowEngineService do Fluig para iniciar e cancelar processos de aprovação.",
    "observacoes": "Concluído. bNoCheckPeerCert := .T. inserido nos 5 pontos de instanciação de TWsdlManager em M110STTS.prw e MT120FIM.PRW. Validado no ambiente PROTO.",
    "complexidade": "Média"
  }
];
