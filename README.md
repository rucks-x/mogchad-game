# MOG CHAD – Vagabundo Games

## Como gerar o APK pelo GitHub (sem instalar nada)
1. Crie um repositório novo no GitHub (botão **New**).
2. Envie **todo o conteúdo desta pasta** (inclusive a pasta oculta `.github`): em **Add file > Upload files**, arraste tudo e clique em **Commit changes**.
   - No Windows, ative "Itens ocultos" para ver a pasta `.github`.
3. Abra a aba **Actions**. O workflow **Build APK** roda sozinho (ou clique em **Run workflow**).
4. Em 3 a 6 minutos ele termina. Clique na execução, role até **Artifacts** e baixe **MogChad-APK**.
5. Extraia o zip, passe o `app-debug.apk` para o celular e instale (permita "fontes desconhecidas").

## Onde mexer no jogo
- `app/src/main/assets/index.html` – telas e interface
- `app/src/main/assets/style.css` – visual
- `app/src/main/assets/game.js` – lógica do jogo
- `app/src/main/assets/foe.jpg` – foto do adversário
Ao salvar uma alteração no GitHub, um novo APK é gerado automaticamente.

## Menu desenvolvedor
Dentro do jogo: aba **❤️ Status** > **🛠️ Menu desenvolvedor** > senha `2468`.
(A senha fica no `game.js`, então é só uma barreira simples.)

## Alternativa: Android Studio
*File > Open* nesta pasta, aguarde o Gradle e use *Build > Build APK(s)*.
