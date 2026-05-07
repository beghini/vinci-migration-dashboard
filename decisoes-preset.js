// Gerado automaticamente por build-dashboard.ps1 em 2026-05-06 21:50
// Decisoes pre-definidas pelo arquiteto — injetadas no localStorage antes do React inicializar.
// Para adicionar: edite decisoes-preset.csv e re-execute build-dashboard.ps1.
// Para o cliente sobrescrever: basta clicar em outro status no dashboard.
window.DECISOES_PRESET = [
  {"arquivo":"Compras/Pedido de Compras/X31UPDTABLE.PRW","decisao":"drop","motivo":"Fonte de ajuste de dicionário executado na empresa 07 — empresa inexistente no TOTVS Cloud. Processo descontinuado."},
  {"arquivo":"Compras/Pedido de Compras/PE/MT120ISC.PRW","decisao":"drop","motivo":"Fonte 100% comentado — contém apenas cabeçalho Protheus.doc sem implementação efetiva. Nenhum hardcode real detectado."},
  {"arquivo":"Tecnologia da Informacao/Wizard Cadastros/WIZCADSA2.PRW","decisao":"drop","motivo":"Processo de replicar o fornecedor nas demais empresas — no TOTVS Cloud a Vinci opera exclusivamente com a empresa 01, portanto essa solução não se aplica."}
];
(function () {
  try {
    var version = '202605062150';
    var cur     = JSON.parse(localStorage.getItem('vinci_decisions') || '{}');
    var motivos = JSON.parse(localStorage.getItem('vinci_decisoes_motivos') || '{}');
    var applied = JSON.parse(localStorage.getItem('vinci_preset_version') || '""');
    window.DECISOES_PRESET.forEach(function (p) {
      // Aplica preset se: cliente ainda não decidiu OU preset foi atualizado
      if (!cur[p.arquivo] || applied !== version) cur[p.arquivo] = p.decisao;
      motivos[p.arquivo] = p.motivo;
    });
    localStorage.setItem('vinci_decisions', JSON.stringify(cur));
    localStorage.setItem('vinci_decisoes_motivos', JSON.stringify(motivos));
    localStorage.setItem('vinci_preset_version', JSON.stringify(version));
  } catch (e) {}
})();
