# 🚀 Deploy do Site THCOMERCIO

## ⚠️ Problema Comum: Erro 404 ao Atualizar Página

### 🔍 **Problema:**
Quando você acessa uma página específica (ex: `/produto/trombas-carregamento`) e atualiza a página (F5), aparece erro 404.

### 🎯 **Causa:**
O servidor web não sabe como lidar com rotas do React Router quando a página é atualizada diretamente.

### ✅ **Solução:**

#### **Para Servidores Apache (.htaccess):**
O arquivo `.htaccess` já está incluído na pasta `dist/` com a configuração correta:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

#### **Para Servidores Nginx:**
Use a configuração do arquivo `nginx.conf`:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### 📋 **Instruções de Deploy:**

#### **1. Upload dos Arquivos:**
- Faça upload de **TODOS** os arquivos da pasta `dist/` para o servidor
- **Inclua o arquivo `.htaccess`** (importante!)

#### **2. Configuração do Servidor:**

**Apache:**
- Certifique-se que o módulo `mod_rewrite` está habilitado
- O arquivo `.htaccess` deve estar na raiz do site

**Nginx:**
- Use a configuração do arquivo `nginx.conf`
- Reinicie o Nginx após aplicar a configuração

#### **3. Teste:**
1. Acesse uma página específica: `https://seusite.com/produto/trombas-carregamento`
2. Atualize a página (F5)
3. Deve carregar normalmente (sem erro 404)

### 🔧 **Configurações Adicionais:**

#### **Cache de Assets:**
- Arquivos estáticos (CSS, JS, imagens) têm cache de 1 ano
- Isso melhora a performance do site

#### **Compressão:**
- GZIP habilitado para reduzir tamanho dos arquivos
- Melhora velocidade de carregamento

#### **Segurança:**
- Headers de segurança configurados
- Proteção contra XSS e clickjacking

### 🆘 **Se Ainda Houver Problemas:**

1. **Verifique se o `.htaccess` foi enviado** para o servidor
2. **Confirme que `mod_rewrite` está habilitado** (Apache)
3. **Teste a configuração Nginx** se usar Nginx
4. **Verifique logs do servidor** para erros específicos

### 📞 **Suporte:**
Se precisar de ajuda com a configuração do servidor, entre em contato:
- **Email**: beinovation.digital@gmail.com
- **WhatsApp**: +55 (98) 99617-9713

---
**Desenvolvido com ❤️ por Paulo Dias**
