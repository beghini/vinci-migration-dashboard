// parametros-preset.js — 58 parâmetros SX6 ativos validados em 13/05/2026
// Varredura completa do repositório tsm-vinci (branch develop)
// 4 descartados por sujeira (código comentado): MV_XXICBAT, MV_XXICSLE, MV_XXPVISA, MV_XXPROTV

window.PARAMETROS_DATA = [
  // ── Fluig / ECM ────────────────────────────────────────────────────────────
  { mv_var:'MV_ECMWS',   grupo:'Fluig/ECM', descricao:'URL ECM (WF) — WSDL',                valor_origem:'http://172.22.69.104:4080/webdesk',          status_inicial:'ATUALIZAR',    bloqueante:true  },
  { mv_var:'MV_ECMUSR',  grupo:'Fluig/ECM', descricao:'Usuário Fluig',                       valor_origem:'fluig',                                       status_inicial:'CONFIRMAR',    bloqueante:true  },
  { mv_var:'MV_ECMPSW',  grupo:'Fluig/ECM', descricao:'Senha Fluig',                         valor_origem:'(vazio)',                                      status_inicial:'VERIFICAR',    bloqueante:true  },
  { mv_var:'MV_ECMEMP',  grupo:'Fluig/ECM', descricao:'Código empresa ECM',                  valor_origem:'01',                                          status_inicial:'OK',           bloqueante:false },
  { mv_var:'MV_ECMURLP', grupo:'Fluig/ECM', descricao:'URL portal Fluig (xHistSol)',         valor_origem:'http://172.22.69.104:4080/portal/',            status_inicial:'Ajustado',     bloqueante:true  },
  { mv_var:'MV_XXURLF',  grupo:'Fluig/ECM', descricao:'URL portal Fluig (VISDOCFLU)',        valor_origem:'http://10.14.25.78:8088/portal/',              status_inicial:'Ajustado',     bloqueante:true  },
  { mv_var:'MV_XXHOST',  grupo:'Fluig/ECM', descricao:'IP DBAccess — TCLink em VISDOCFLU',   valor_origem:'10.14.25.71',                                 status_inicial:'ATUALIZAR',    bloqueante:true  },
  { mv_var:'MV_XXALFLU', grupo:'Fluig/ECM', descricao:'Conexão Fluig TCLink (VISDOCFLU:34)', valor_origem:'',                                            status_inicial:'VERIFICAR',    bloqueante:true  },

  // ── SMTP / E-mail ───────────────────────────────────────────────────────────
  { mv_var:'MV_RELSERV',  grupo:'SMTP', descricao:'Servidor SMTP',                              valor_origem:'172.21.64.52:25',           status_inicial:'ATUALIZAR',  bloqueante:false },
  { mv_var:'MV_RELACNT',  grupo:'SMTP', descricao:'Conta e-mail envio',                         valor_origem:'protheus@cartsp.com.br',    status_inicial:'CONFIRMAR',  bloqueante:false },
  { mv_var:'MV_RELAUTH',  grupo:'SMTP', descricao:'SMTP requer autenticação? (MTA110MNU/IBHJ)', valor_origem:'.F.',                       status_inicial:'VERIFICAR',  bloqueante:false },
  { mv_var:'MV_RELPSW',   grupo:'SMTP', descricao:'Senha e-mail (MTA110MNU, IBHJOB01)',         valor_origem:'@cesso.333',                status_inicial:'CONFIRMAR',  bloqueante:false },
  { mv_var:'MV_RELAPSW',  grupo:'SMTP', descricao:'Senha SMTP alternativa — BRVValid.prw',      valor_origem:'',                          status_inicial:'VERIFICAR',  bloqueante:false },
  { mv_var:'MV_RELTIME',  grupo:'SMTP', descricao:'Timeout SMTP (MTA110MNU)',                   valor_origem:'',                          status_inicial:'CONFIRMAR',  bloqueante:false },
  { mv_var:'MV_RELFROM',  grupo:'SMTP', descricao:'Endereço remetente e-mail (IBHJOB01)',       valor_origem:'',                          status_inicial:'CONFIRMAR',  bloqueante:false },

  // ── ConnectCar ──────────────────────────────────────────────────────────────
  { mv_var:'MV_XXPRCC', grupo:'ConnectCar', descricao:'Prefixo títulos ConnectCar', valor_origem:'CON',       status_inicial:'OK',        bloqueante:false },
  { mv_var:'MV_XXNTCC', grupo:'ConnectCar', descricao:'Natureza títulos ConnectCar',valor_origem:'201001031', status_inicial:'CONFIRMAR', bloqueante:false },
  { mv_var:'MV_XXCLCC', grupo:'ConnectCar', descricao:'Código cliente ConnectCar',  valor_origem:'000007',    status_inicial:'CONFIRMAR', bloqueante:false },

  // ── Receita Federal ─────────────────────────────────────────────────────────
  { mv_var:'MV_RECORIG', grupo:'Receita Federal', descricao:'Pasta origem arquivos Receita',     valor_origem:'CUSTOMIZADOSRECEITAENTREVIASOSASORIGEM\\', status_inicial:'RECONFIGURAR', bloqueante:false },
  { mv_var:'MV_RECDEST', grupo:'Receita Federal', descricao:'Pasta destino arquivos Receita',    valor_origem:'CUSTOMIZADOSRECEITAENTREVIASOSASDESTINO\\',status_inicial:'RECONFIGURAR', bloqueante:false },
  { mv_var:'MV_XXCLIEN', grupo:'Receita Federal', descricao:'Código/Loja cliente Receita',       valor_origem:'000008/01',                                status_inicial:'CONFIRMAR',    bloqueante:false },
  { mv_var:'MV_XXSERIE', grupo:'Receita Federal', descricao:'Série documentos Receita',          valor_origem:'B',                                        status_inicial:'CONFIRMAR',    bloqueante:false },

  // ── CGMP ────────────────────────────────────────────────────────────────────
  { mv_var:'MV_XXPRCGM', grupo:'CGMP', descricao:'Prefixo títulos CGMP',        valor_origem:'CGM',            status_inicial:'OK',        bloqueante:false },
  { mv_var:'MV_XXNTCGM', grupo:'CGMP', descricao:'Natureza títulos CGMP',       valor_origem:'201001019',      status_inicial:'CONFIRMAR', bloqueante:false },
  { mv_var:'MV_XXCLCGM', grupo:'CGMP', descricao:'Código cliente CGMP',         valor_origem:'000003',         status_inicial:'CONFIRMAR', bloqueante:false },
  { mv_var:'MV_XXNRCGM', grupo:'CGMP', descricao:'Sequencial registros CGMP',   valor_origem:'99999999V0LH',   status_inicial:'VERIFICAR', bloqueante:false },
  { mv_var:'MV_XXNDTRN', grupo:'CGMP', descricao:'Prazo CGMP — transação N',    valor_origem:'',               status_inicial:'CONFIRMAR', bloqueante:false },
  { mv_var:'MV_XXNDTRT', grupo:'CGMP', descricao:'Prazo CGMP — transação T',    valor_origem:'',               status_inicial:'CONFIRMAR', bloqueante:false },
  { mv_var:'MV_XXNDTRF', grupo:'CGMP', descricao:'Prazo CGMP — transação F',    valor_origem:'',               status_inicial:'CONFIRMAR', bloqueante:false },

  // ── VISA ────────────────────────────────────────────────────────────────────
  { mv_var:'MV_XXPRVIS', grupo:'VISA', descricao:'Prefixo títulos VISA',        valor_origem:'VIS',       status_inicial:'OK',        bloqueante:false },
  { mv_var:'MV_XXTDVIS', grupo:'VISA', descricao:'Tipo título VISA',            valor_origem:'VS',        status_inicial:'OK',        bloqueante:false },
  { mv_var:'MV_XXNTVIS', grupo:'VISA', descricao:'Natureza títulos VISA',       valor_origem:'11010401',  status_inicial:'CONFIRMAR', bloqueante:false },
  { mv_var:'MV_XXCLVIS', grupo:'VISA', descricao:'Código cliente VISA',         valor_origem:'000001',    status_inicial:'CONFIRMAR', bloqueante:false },
  { mv_var:'MV_XXDPVIS', grupo:'VISA', descricao:'Dias para pagamento VISA',    valor_origem:'30',        status_inicial:'CONFIRMAR', bloqueante:false },
  { mv_var:'MV_XXNRVIS', grupo:'VISA', descricao:'Sequencial títulos VISA',     valor_origem:'000002624', status_inicial:'CONFIRMAR', bloqueante:false },

  // ── Brinks / Numerários ─────────────────────────────────────────────────────
  { mv_var:'MV_XXPOBRI', grupo:'Brinks', descricao:'Pasta origem arquivos Brinks',          valor_origem:'C:COMPSISBRINKSorigem',  status_inicial:'RECONFIGURAR', bloqueante:false },
  { mv_var:'MV_XXPDBRI', grupo:'Brinks', descricao:'Pasta destino arquivos Brinks',         valor_origem:'C:COMPSISBRINKSdestino', status_inicial:'RECONFIGURAR', bloqueante:false },
  { mv_var:'MV_XXPRBRI', grupo:'Brinks', descricao:'Prefixo títulos Brinks',                valor_origem:'BRI',                    status_inicial:'OK',           bloqueante:false },
  { mv_var:'MV_XXNTBRI', grupo:'Brinks', descricao:'Natureza títulos Brinks',               valor_origem:'11010101',               status_inicial:'CONFIRMAR',    bloqueante:false },
  { mv_var:'MV_XXCLBRI', grupo:'Brinks', descricao:'Código cliente Brinks',                 valor_origem:'',                       status_inicial:'CONFIRMAR',    bloqueante:false },
  { mv_var:'MV_XXTPBRI', grupo:'Brinks', descricao:'Tipo Brinks',                           valor_origem:'',                       status_inicial:'CONFIRMAR',    bloqueante:false },
  { mv_var:'MV_XXDBRIN', grupo:'Brinks', descricao:'Dia vencimento Brinks',                 valor_origem:'1',                      status_inicial:'CONFIRMAR',    bloqueante:false },
  { mv_var:'MV_XXNCRBR', grupo:'Brinks', descricao:'Sequencial doc E1_NUM Brinks',          valor_origem:'000015451',              status_inicial:'CONFIRMAR',    bloqueante:false },
  { mv_var:'MV_XXMVBRI', grupo:'Brinks', descricao:'Move arquivos Brinks após importação',  valor_origem:'.T.',                    status_inicial:'OK',           bloqueante:false },
  { mv_var:'MV_XXPBRI',  grupo:'Brinks', descricao:'Gera contas a receber Brinks',          valor_origem:'.T.',                    status_inicial:'OK',           bloqueante:false },
  { mv_var:'MV_XXTPIBR', grupo:'Brinks', descricao:'Tipo importação Brinks (INT_BRIXLS)',   valor_origem:'',                       status_inicial:'CONFIRMAR',    bloqueante:false },

  // ── Veloe ───────────────────────────────────────────────────────────────────
  { mv_var:'MV_XXPRVE', grupo:'Veloe', descricao:'Prefixo títulos Veloe', valor_origem:'VEL',       status_inicial:'OK',        bloqueante:false },
  { mv_var:'MV_XXNTVE', grupo:'Veloe', descricao:'Natureza títulos Veloe',valor_origem:'201001039', status_inicial:'CONFIRMAR', bloqueante:false },
  { mv_var:'MV_XXCLVE', grupo:'Veloe', descricao:'Código cliente Veloe',  valor_origem:'000013',    status_inicial:'CONFIRMAR', bloqueante:false },

  // ── Move Mais ───────────────────────────────────────────────────────────────
  { mv_var:'MV_XXPRMM', grupo:'Move Mais', descricao:'Prefixo títulos Move Mais', valor_origem:'', status_inicial:'CONFIRMAR', bloqueante:false },
  { mv_var:'MV_XXNTMM', grupo:'Move Mais', descricao:'Natureza títulos Move Mais',valor_origem:'', status_inicial:'CONFIRMAR', bloqueante:false },
  { mv_var:'MV_XXCLMM', grupo:'Move Mais', descricao:'Código cliente Move Mais',  valor_origem:'', status_inicial:'CONFIRMAR', bloqueante:false },

  // ── AutoE ───────────────────────────────────────────────────────────────────
  { mv_var:'MV_XXPRAE', grupo:'AutoE', descricao:'Prefixo títulos AutoE', valor_origem:'', status_inicial:'CONFIRMAR', bloqueante:false },
  { mv_var:'MV_XXNTAE', grupo:'AutoE', descricao:'Natureza títulos AutoE',valor_origem:'', status_inicial:'CONFIRMAR', bloqueante:false },
  { mv_var:'MV_XXCLAE', grupo:'AutoE', descricao:'Código cliente AutoE',  valor_origem:'', status_inicial:'CONFIRMAR', bloqueante:false },

  // ── DBTrans ─────────────────────────────────────────────────────────────────
  { mv_var:'MV_DBTORIG', grupo:'DBTrans', descricao:'Pasta origem arquivos DBTrans (INT_DBTXLS)', valor_origem:'CUSTOMIZADOSRECEITAENTREVIASDBTRANSORIGEM\\', status_inicial:'RECONFIGURAR', bloqueante:false },
  { mv_var:'MV_DBTDEST', grupo:'DBTrans', descricao:'Pasta destino arquivos DBTrans (INT_DBTXLS)',valor_origem:'COMPSISDBTRANSDESTINO\\',                     status_inicial:'RECONFIGURAR', bloqueante:false },
  { mv_var:'MV_XXNCRDT', grupo:'DBTrans', descricao:'Sequencial documento DBTrans (INT_DBTRANS)',valor_origem:'',                                             status_inicial:'CONFIRMAR',    bloqueante:false },
];
