# Deploy — Vinci Migration Dashboard

**Objetivo:** publicar o dashboard em uma URL acessível com decisões compartilhadas em tempo real via Supabase + GitHub Pages.

---

## 1. Criar o projeto Supabase

1. Acesse https://supabase.com e crie uma conta gratuita (ou logue).
2. Clique em **New Project** → escolha organização → defina nome (ex: `vinci-migration`) e senha do banco.
3. Aguarde o projeto ser provisionado (~2 min).

### 1.1 Criar a tabela de decisões

No menu lateral: **SQL Editor** → **New query** → cole e execute:

```sql
create table if not exists public.decisions (
  source_path text primary key,
  decision    text not null,
  updated_at  timestamptz default now(),
  updated_by  text
);

alter table public.decisions enable row level security;

create policy "leitura pública"   on public.decisions for select using (true);
create policy "escrita pública"   on public.decisions for insert with check (true);
create policy "atualização pública" on public.decisions for update using (true);
create policy "exclusão pública"  on public.decisions for delete using (true);
```

### 1.2 Copiar credenciais

No menu lateral: **Project Settings → API**

Copie:
- **Project URL** → algo como `https://xyzxyz.supabase.co`
- **anon / public key** → string longa começando com `eyJ...`

---

## 2. Configurar o index.html

Abra `deploy/index.html` e localize o bloco:

```js
const SUPABASE_URL = '';   // ex: 'https://xyzxyz.supabase.co'
const SUPABASE_KEY = '';   // ex: 'eyJhbGciOiJ...'
```

Substitua pelos valores copiados no passo 1.2:

```js
const SUPABASE_URL = 'https://SEU-PROJETO.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

> A chave `anon` é segura para ficar no HTML — ela só acessa o que as policies do RLS permitem.

---

## 3. Publicar no GitHub Pages

### 3.1 Criar repositório público

```bash
# No GitHub: New repository → nome ex: vinci-migration-dashboard → Public
```

### 3.2 Inicializar e subir os arquivos

```bash
cd deploy/

git init
git add .
git commit -m "feat: dashboard inicial com Supabase"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/vinci-migration-dashboard.git
git push -u origin main
```

### 3.3 Ativar GitHub Pages

No repositório GitHub:
1. **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **/ (root)**
4. Clique em **Save**

Em ~2 minutos a URL estará disponível:
```
https://SEU-USUARIO.github.io/vinci-migration-dashboard/
```

---

## 4. Testar

1. Abra a URL no browser.
2. Na primeira visita com Supabase configurado, um modal pedirá seu nome/iniciais.
3. As decisões feitas serão salvas no Supabase e compartilhadas com todos que acessarem a mesma URL.
4. O indicador no header (✓ / ⟳ / ✗ + nome) mostra o status da sincronização.

---

## Atualizar os dados (novo catálogo)

Sempre que rodar `build-dashboard.ps1` na pasta `analise-migracao-cloud/`:

```powershell
cd analise-migracao-cloud
.\build-dashboard.ps1   # regenera catalogo-full.js, issues.js, decisoes-preset.js

# Copiar arquivos de dados para deploy/
Copy-Item claude_design\catalogo-full.js  deploy\catalogo-full.js  -Force
Copy-Item claude_design\issues.js          deploy\issues.js          -Force
Copy-Item claude_design\decisoes-preset.js deploy\decisoes-preset.js -Force

cd deploy
git add catalogo-full.js issues.js decisoes-preset.js
git commit -m "data: atualiza catálogo $(Get-Date -Format 'yyyy-MM-dd')"
git push
```

O GitHub Pages atualiza automaticamente em ~1 minuto após o push.
