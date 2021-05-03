const  ownerNumber  =  [ "5491166744449@s.whatsapp.net" ] 
// cambie solo el número y no elimine @ s.whatsapp.net

const  OriginalOwner  =  '5491166744449' 
// cambia a tu número

const  gimagenotregister  =  true
// cuando no hay un comando registrado, el bot busca en la imagen de Google

const  sgooglenotregister  =  true
// cuando no hay ningún comando registrado, el bot busca una búsqueda en Google

const  msgwelcomeimg  =  ( número ,  nombre de grupo )  =>  { 5491166744449 , ༒⃟⃢❰❍☬✵VȺŁĦȺŁŁȺ✵☬➣⃟۝⃟⁩
    return  `Bienvenido $ { número } \ n \ nEscribe el menú $ { prefijo } para la lista de comandos`
}
// Texto de bienvenida en la imagen cuando la bienvenida está activada
// Nota: no pongas el texto largo para que la imagen no desaparezca

const  byemsgimg  =  ( número ,  nombre de grupo )  =>  {
    return  `Adiós $ { número } `
}
// Texto de despedida en la imagen cuando se activa la bienvenida
// Nota: no pongas el texto largo para que la imagen no desaparezca

const  menumsgimg  =  ( número ,  nombre de grupo )  =>  {
    return  `Bienvenido $ { número } \ n \ nEl menú del bot de Brizas`
}
// Texto en el menú de la imagen cuando la bienvenida está activada
// Nota: no pongas el texto largo para que la imagen no desaparezca

const  apikeyimgbb  =  '1eb4ea79f7e4eef8241d5bdb054adc01'
// su clave imgbb para activar antiporn y algunos comandos más que necesitan descargar la imagen

const  cr  =  'VȺŁĦȺŁŁȺ>(◎_◎;)<БФТ> \ n' 
// texto del símbolo verificado

 prefijo  const =  '!' 
// prefijo

const  blockmsg  =  '* 😜 Tu número está bloqueado, es decir, no te escucha 😜 *'
// mensaje cuando alguien bloqueado solicita un comando

const  blockcmdmsg  =  '* 🚫Este comando está bloqueado, comuníquese con el propietario del bot para averiguar por qué' * '
// mensaje cuando alguien solicita un comando bloqueado 

// BAN MENSAJES

const  banmsgtype  =  '* Ejecutar miembro común, la prohibición está cerrada *'
// prohibir el mensaje en tipos anti-mensaje

const  adminmsgtype  =  '* Eres adm ent n Te prohibiré enviar un tipo de mensaje prohibido *'
// mensaje cuando adm envía tipos de mensajes prohibidos

const  banmsgporn  =  'Hmmm pequeña pornografía con antiporn activado, ya sabes, ya sabes ...'
// mensaje de prohibición de antiporn

const  adminmsgporn  =  '* Eres admirador, te prohibiré enviar pornografía *'
// mensaje cuando adm envía porno con antiporn habilitado

const  banmsglink  =  'Ejecutar miembro común, la prohibición está cerca ...'
// mensaje de prohibición de antienlace

const  adminmsglink  =  'Este es un enlace de amigo ... oh, eres un admirador can kkkk 🙃'
// mensaje cuando adm envía el enlace

const  adminmsgpalavra  =  'esto está en la lista de palabras prohibidas por el bot'
// mensaje cuando adm envía una palabra prohibida por el bot

const  banmsgpalavra  =  '¿Palabra prohibida? ¿Sabes verdad?
// mensaje de prohibición al enviar una palabra prohibida por el bot

const  qnttravahardroleta  =  2
// número de cerraduras que gobiernan con fuerza la ruleta rusa
// Nota: el valor se multiplica por 12, así que ten cuidado

// BUENOS DÍAS, BUENAS TARDES Y BUENAS NOCHES

const  linkimgday  =  'https://i.imgur.com/RR18JiI.jpg'
const  textmsgday  =  'Ohayo gozaimasu, Onii-chan 👉👈'
// enlace y mensaje de buenos días

const  linkimgeve  =  'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const  textmsgeve  =  `Kon'nichiwa Onii-chan, acepta este café ☕`
// enlace y mensaje de buenas tardes

const  linkimgnig  =  'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const  textmsgnig  =  'Konbanwa Onii-chan, espero que hayas tenido un buen día ☺️'
// enlace y mensaje de buenas noches 

// ERROR DE MENSAJES

const  msgerr  =  'Hubo un error, inténtelo de nuevo: /'
// mensaje de error

const  notregister  =  `* Comando no registrado, escriba $ { prefijo } menu para ver la lista de comandos *`

// AUTOREPLY MENSAJES

const  botlindo  =  'Bakaaaa 😣😣'
const  linkbotlindo  =  'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const  botfeio  =  'Pareces un cangrejo, un cangrejo triturado 😡'
const  cadebot  =  '¿Me llamaste onii-chan 👉👈?'
const  botfdp  =  'Vete a la mierda chico, que te pateen el culo cuando estés dormido'
const  botgostoso  =  'Arigato go sai masu 😳👉👈'
const  botfofo  =  'Arigato go sai masu 😳👉👈'
const  botbaianor  =  'Invité a su placa base a mi red, su bocina'
const  botcorno  =  'Vete a la mierda, jugador de ff, comprador de paquete de pies'
const  botputa  =  'Señora su madre 😡'
const  botgay  =  'El manja rueda 😡'
const  botviado  =  'La manja rueda 😡'
const  numbotfeio  =  'señora su madre 😡'
// LLAVES

// MENSAJES EXCLUSIVOS
dejar  lío  =  {
    espera : '⌛ Espera un minuto ... ⌛' ,
    éxito : '✔️ ¡Éxito! ✔️ ' ,
    error : {
        stick : '❌ Falló, hubo un error al convertir la imagen en una pegatina ❌' ,
        Iv : '❌ Enlace no válido ❌'
    } ,
    solo : {
        group : '❌ ¡Este comando solo se puede usar en grupos! ❌ ' ,
        ownerG : '❌ ¡Este comando solo puede ser utilizado por el grupo propietario! ❌ ' ,
        ownerB : '❌ ¡Este comando solo puede ser utilizado por el número de propietario! ❌ ' ,
        admin : '❌ COMMON MEMBER SILENCE VC NO TIENE LA MORAL PARA USAR ESTE COMANDO ❌' ,
        Badmin : '❌ ¡Este comando solo se puede usar cuando el bot se convierte en administrador! ❌ '
    }
}

// CONTACTO DEL CREADOR

const  vcard  =  'COMIENZO: VCARD \ n' 
+  'VERSIÓN: 3.0 \ n' 
+  'FN: Mi creador ༒⃟⃢❰❍☬✵VȺŁĦȺŁŁȺ✵☬➣⃟۝⃟⁩ \ n' 
+  'ORG: Ian; \ n' 
+  'TEL; tipo = CELDA; tipo = VOZ; waid = 5491166744449: +54 9 11 6674-4449 \ n' 
+  'FIN: VCARD'
// vcard del propietario, cambia los números según el formato
// concuerda


// Ni siquiera te atrevas a perder el tiempo si no quieres ese error
Exportaciones . menumsgimg  =  menumsgimg
Exportaciones . gimagenotregister  =  gimagenotregister
Exportaciones . sgooglenotregister  =  sgooglenotregister
Exportaciones . byemsgimg  =  byemsgimg
Exportaciones . msgwelcomeimg  =  msgwelcomeimg
Exportaciones . notregister  =  notregister
Exportaciones . qnttravahardroleta  =  qnttravahardroleta
Exportaciones . bloqueadocmdmsg  =  bloqueadocmdmsg
Exportaciones . bloqueadomsg  =  bloqueadomsg
Exportaciones . banmsgpalavra  =  banmsgpalavra
Exportaciones . adminmsgpalavra  =  adminmsgpalavra
Exportaciones . apikeyimgbb  =  apikeyimgbb
Exportaciones . linkbotlindo  =  linkbotlindo
Exportaciones . botlindo  =  botlindo
Exportaciones . botfeio  =  botfeio
Exportaciones . cadebot  =  cadebot
Exportaciones . botfdp  =  botfdp
Exportaciones . botgostoso  =  botgostoso
Exportaciones . botfofo  =  botfofo
Exportaciones . botbaianor  =  botbaianor
Exportaciones . botcorno  =  botcorno
Exportaciones . botputa  =  botputa
Exportaciones . botgay  =  botgay
Exportaciones . botviado  =  botviado
Exportaciones . numbotfeio  =  numbotfeio
Exportaciones . linkimgday  =  linkimgday
Exportaciones . textmsgday  =  textmsgday
Exportaciones . textmsgnig  =  textmsgnig
Exportaciones . linkimgnig  =  linkimgnig
Exportaciones . textmsgeve  =  textmsgeve
Exportaciones . linkimgeve  =  linkimgeve
Exportaciones . adminmsgtype  =  adminmsgtype
Exportaciones . adminmsgporn  =  adminmsgporn
Exportaciones . adminmsglink  =  adminmsglink
Exportaciones . banmsglink  =  banmsglink
Exportaciones . banmsgporn  =  banmsgporn
Exportaciones . banmsgtype  =  banmsgtype
Exportaciones . msgerr  =  msgerr
Exportaciones . lío  =  lío
Exportaciones . prefijo  =  prefijo
Exportaciones . cr  =  cr
Exportaciones . vcard  =  vcard
