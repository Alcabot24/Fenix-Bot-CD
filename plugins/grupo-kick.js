let handler = async (m, { conn, participants, command, usedPrefix }) => { 
try{
let texto = `Hello${usedPrefix + command} @${global.owner[0][0]}*`
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}

if (!global.db.data.settings[conn.user.jid].restrict) return conn.sendButton(m.chat, wm, `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsSoloOwner']()}`, null, [[lenguajeGB.smsEncender(), `${usedPrefix}on restringir`]], fkontak, m)
if (!m.mentionedJid[0] && !m.quoted) return m.reply(texto, m.chat, { mentions: conn.parseMention(texto)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
let eliminar = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return conn.reply(m.chat, texto, fkontak, m) 
if(m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== "") {

var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant
if(conn.user.jid.includes(mentioned)) return conn.reply(m.chat, `${lenguajeGB['smskick1']()}${usedPrefix + command} @${global.owner[0][0]}*`, fkontak, m)
//let eliminar = await conn.groupParticipantsUpdate(m.chat, [mentioned], 'remove')
let done = `𝐸𝑋𝐼𝑇𝑂*@${mentioned.split("@")[0]} 𝐸𝐿𝐼𝑀𝐼𝑁𝐴𝐷𝑂(𝐴)😼`
let err1 = `𝐸𝑅𝑅𝑂𝑅*@${mentioned.split("@")[0]} 𝑁𝑂 𝑃𝑈𝐸𝐷𝑂 𝐸𝐿𝐼𝑀𝐼𝑁𝐴𝑅 𝐴𝐿 𝐶𝑅𝐸𝐴𝐷𝑂𝑅 𝐷𝐸𝐿 𝐺𝑅𝑈𝑃𝑂 😆🫵`
let err2 = `𝐴𝐷𝑉𝐸𝑅𝑇𝐸𝑁𝐶𝐼𝐴 𝐸𝐽𝐸𝑀𝑃𝐿𝑂*@${mentioned.split("@")[0]} 𝑁𝑂 𝐸𝑆𝑇𝐴 𝐸𝑁 𝐸𝑆𝑇𝐸 𝐺𝑅𝑈𝑃𝑂👻`


if (eliminar[0].status === "200") m.reply(done, m.chat, { mentions: conn.parseMention(done)})  
else if (eliminar[0].status === "406") m.reply(err1, m.chat, { mentions: conn.parseMention(err1)})   
else if (eliminar[0].status === "404") m.reply(err2, m.chat, { mentions: conn.parseMention(err2)})  
else conn.sendButton(m.chat, `\n${wm}`, '𝐸𝑅𝑅𝑂𝑅 𝐴𝐿𝐺𝑂 𝑆𝐴𝐿𝐼𝑂 𝑀𝐴𝐿' + '#report ' + usedPrefix + command, null, '𝑆𝑈𝑅𝐺𝐼𝑂 𝑈𝑁 𝐸𝑅𝑅𝑂𝑅', `#reporte 𝑂𝐶𝑈𝑅𝑅𝐼𝑂 𝑈𝑁 𝐸𝑅𝑅𝑂𝑅 𝐼𝑁𝐸𝑆𝑃𝐸𝑅𝐴𝐷𝑂 *${usedPrefix + command}*`]], m)
} else if (m.message.extendedTextMessage.contextInfo.mentionedJid != null && m.message.extendedTextMessage.contextInfo.mentionedJid != undefined) return
} catch (e) {
await m.reply(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, m)   
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}} 
handler.help = ['kick']
handler.tags = ['group']
handler.command = /^(kick|echar|hechar|sacar|ban)$/i
handler.admin = handler.group = handler.botAdmin = true
export default handler

/*let handler = async (m, { conn, participants, usedPrefix, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `${lenguajeGB['smsAvisoAG']()}𝙀𝙎𝙏𝘼 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n#on restrict | #off restrict\n𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n\n 𝙊𝙒𝙉𝙀𝙍 𝙈𝙐𝙎𝙏 𝘼𝘾𝙏𝙄𝙑𝘼𝙏𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿\n#on restrict | #off restrict`
let kicktext = `*ETIQUTE A LA PERSONA O RESPONDA AL MENSAJE DE LA PERSONA QUE QUIERE QUE ELIMINE*\n\n*EJEMPLO: ${usedPrefix + command} @${global.owner[0][0]}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}
handler.command = /^(kick|echar|hechar|sacar|ban)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler*/

