// Ofuscador de código fuente
(function() {
    'use strict';
    
    // Función para generar caracteres aleatorios
    function generateRandomString(length) {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?';
        let result = '|@@#|';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    
    // Función para ofuscar el HTML
    function obfuscateHTML() {
        const html = document.documentElement.outerHTML;
        const lines = html.split('\n');
        const obfuscatedLines = lines.map(line => {
            if (line.trim()) {
                return generateRandomString(Math.max(20, line.length));
            }
            return '';
        });
        
        // Reemplazar el contenido del documento
        document.documentElement.innerHTML = '<body><pre>' + obfuscatedLines.join('\n') + '</pre></body>';
    }
    
    // Detectar herramientas de desarrollo
    let devtools = {
        open: false,
        orientation: null
    };
    
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    
    // Función para detectar DevTools
    function detectDevTools() {
        if (widthThreshold || heightThreshold) {
            if (!devtools.open) {
                devtools.open = true;
                console.clear();
                console.log('%c' + generateRandomString(50), 'color: red; font-size: 20px;');
                obfuscateHTML();
            }
        }
    }
    
    // Deshabilitar clic derecho
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        console.log('%c' + generateRandomString(30), 'color: red;');
        return false;
    });
    
    // Deshabilitar teclas comunes de desarrollador
    document.addEventListener('keydown', function(e) {
        // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+Shift+C
        if (e.keyCode === 123 || 
            (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) ||
            (e.ctrlKey && e.keyCode === 85)) {
            e.preventDefault();
            console.clear();
            console.log('%c' + generateRandomString(40), 'color: red; font-weight: bold;');
            obfuscateHTML();
            return false;
        }
    });
    
    // Detectar cambios en el tamaño de ventana (posible apertura de DevTools)
    window.addEventListener('resize', detectDevTools);
    
    // Ofuscar consola
    let originalLog = console.log;
    console.log = function() {
        originalLog.apply(console, [generateRandomString(25)]);
    };
    
    // Sobrescribir el HTML original después de un delay
    setTimeout(function() {
        const scripts = document.querySelectorAll('script');
        scripts.forEach(script => {
            if (script.innerHTML.includes('ofuscador')) {
                script.innerHTML = generateRandomString(script.innerHTML.length);
            }
        });
    }, 1000);
    
    // Detectar si las DevTools están abiertas usando console.log timing
    let element = new Image();
    let start, end;
    
    element.__defineGetter__('id', function() {
        start = new Date();
        console.log('%c' + generateRandomString(20), 'color: transparent;');
        end = new Date();
        
        if (end - start > 50) {
            obfuscateHTML();
        }
    });
    
    setInterval(function() {
        console.dir(element);
    }, 1000);
    
    // Mensaje de advertencia en consola
    console.log('%cADVERTENCIA!', 'color: red; font-size: 30px; font-weight: bold;');
    console.log('%c' + generateRandomString(60), 'color: orange; font-size: 16px;');
    
})();

// Función adicional para ofuscar texto específico
function obfuscateText(text) {
    return text.replace(/./g, function() {
        const chars = 'kswahdsaik23121921@#$%^&*()_+{}[]|';
        return '|@@#|' + chars.charAt(Math.floor(Math.random() * chars.length));
    });
}

// Auto-ejecutar ofuscación al cargar la página
window.addEventListener('load', function() {
    // Ofuscar comentarios HTML
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_COMMENT,
        null,
        false
    );
    
    let commentNode;
    const comments = [];
    
    while (commentNode = walker.nextNode()) {
        comments.push(commentNode);
    }
    
    comments.forEach(function(comment) {
        comment.textContent = '|@@#|kswahdsaik23121921' + generateRandomString(20);
    });
});

// Función para generar caracteres específicos como mencionaste
function generateSpecificObfuscation(length = 20) {
    const basePattern = '|@@#|kswahdsaik23121921';
    const additionalChars = 'abcdef0123456789!@#$%^&*';
    let result = basePattern;
    
    for (let i = 0; i < length; i++) {
        result += additionalChars.charAt(Math.floor(Math.random() * additionalChars.length));
    }
    
    return result;
}