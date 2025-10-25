# Deploy na Cloudways - Guia Completo

## 1. Preparação no Cloudways

### Via Painel de Controle:
1. Acesse seu painel Cloudways
2. Vá em "Applications" → Selecione sua aplicação
3. Vá em "Application Management" → "Application Settings"
4. Anote o "Application URL" e "SSH Details"

## 2. Deploy via SSH

### Conectar ao servidor:
```bash
ssh master@[IP-DO-SERVIDOR] -p 22
```

### Navegar para o diretório:
```bash
cd /home/master/applications/[APP-ID]/public_html
```

### Clonar e configurar:
```bash
# Clonar repositório
git clone https://github.com/PauloDias0011/thcomercio-stellar-site.git

# Mover arquivos da dist para public_html
cp -r thcomercio-stellar-site/dist/* .

# Configurar permissões
chmod -R 755 .
chown -R master:master .

# Limpar arquivos desnecessários
rm -rf thcomercio-stellar-site
```

## 3. Configuração do Domínio

### No painel Cloudways:
1. Vá em "Domain Management"
2. Adicione seu domínio: `thcomercio.com.br`
3. Configure SSL (Let's Encrypt)
4. Aponte o DNS do seu domínio para o IP do servidor

## 4. Configuração do Apache/Nginx

### Para Apache (padrão Cloudways):
- O arquivo `.htaccess` já está incluído na pasta dist
- Não precisa de configuração adicional

### Para Nginx:
- Use o arquivo `nginx.conf` fornecido
- Configure no painel Cloudways ou via SSH

## 5. Atualizações Futuras

### Script de deploy automático:
```bash
#!/bin/bash
cd /home/master/applications/[APP-ID]/public_html
git pull origin main
cp -r thcomercio-stellar-site/dist/* .
chmod -R 755 .
```

## 6. Verificação

### Testar o site:
- Acesse: `https://thcomercio.com.br`
- Verifique se todas as imagens carregam
- Teste responsividade mobile/desktop
- Verifique favicon no navegador

## 7. Monitoramento

### Logs importantes:
- `/home/master/applications/[APP-ID]/logs/apache_error.log`
- `/home/master/applications/[APP-ID]/logs/access.log`

### Comandos úteis:
```bash
# Ver logs em tempo real
tail -f /home/master/applications/[APP-ID]/logs/apache_error.log

# Verificar status do Apache
sudo systemctl status apache2

# Reiniciar Apache
sudo systemctl restart apache2
```
