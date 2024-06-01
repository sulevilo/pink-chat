# Pink-Chat

Chat en tiempo real usando SocketIO 
Cada pestaña de navegacion es un nuevo chat

### Automatización

Para automatizar los pasos de instalación y ejecución, puedes utilizar el script `setup.sh` incluido en este repositorio.

1. Clona este repositorio:
    ```bash
    git clone https://github.com/sulevilo/pink-chat.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd pink-chat
    ```

3. Asegúrate de que el script `setup.sh` tenga permisos de ejecución:
    ```bash
    chmod +x setup.sh
    ```

4. Ejecuta el script:
    ```bash
    ./setup.sh
    ```

### Manualmente

Si prefieres ejecutar los pasos manualmente, sigue las instrucciones a continuación:

1. Instala las dependencias en el directorio raíz:
    ```bash
    npm install
    ```

2. Instala las dependencias en el directorio `frontend`:
    ```bash
    cd frontend
    npm install
    cd ..
    ```

3. Ejecuta el servidor de desarrollo en el directorio raíz:
    ```bash
    npm run dev
    ```

4. En otra terminal, navega al directorio `frontend` y ejecuta el servidor de desarrollo:
    ```bash
    cd frontend
    npm run dev
    ```

### Usar Codespaces

1. **Crear un Codespace**:
    - Haz clic en el botón `Code` y selecciona `Codespaces`.
    - Haz clic en `New codespace` para crear un nuevo Codespace.

2. **Configurar el Codespace**:
    - Una vez que tu Codespace esté listo, abre una terminal en el Codespace.

3. **Ejecutar los comandos en Codespace**:
    - Ejecuta los siguientes comandos en la terminal del Codespace para instalar las dependencias y ejecutar el proyecto:
    ```bash
    # Instalar dependencias en el directorio raíz
    npm install

    # Instalar dependencias en el directorio frontend
    cd frontend
    npm install
    cd ..

    # Ejecutar el servidor de desarrollo en el directorio raíz
    npm run dev &
    
    # Ejecutar el servidor de desarrollo en el directorio frontend
    cd frontend
    npm run dev &
    cd ..
    ```

    Alternativamente, puedes ejecutar el script `setup.sh`:
    ```bash
    ./setup.sh
    ```

4. **Acceder a la aplicación**:
    - Después de ejecutar los servidores de desarrollo, podrás acceder a tu aplicación desde las URLs proporcionadas por Codespaces.

## Captura de Pantalla

![Imagen del Proyecto](assets/image.png)
