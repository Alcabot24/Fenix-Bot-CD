import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
  const { key } = await conn.sendMessage(m.chat, {text: `${wait}`}, {quoted: m})
await conn.sendMessage(m.chat, {text: `.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑊𝐼𝐿𝑆𝑀𝐴𝐶:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
      ▰▰²⁵ %
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})
  await conn.sendMessage(m.chat, {text: `.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑊𝐼𝐿𝑆𝑀𝐴𝐶:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
      ▰▰▰²⁰ %
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})
await conn.sendMessage(m.chat, {text: `.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑊𝐼𝐿𝑆𝑀𝐴𝐶:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
      ▰▰▰▰ ³⁰ %
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})
await conn.sendMessage(m.chat, {text: `╭̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑊𝐼𝐿𝑆𝑀𝐴𝐶:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
      ▰▰▰▰▰ ⁴⁰ %
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})                                               
await conn.sendMessage(m.chat, {text: `╭̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑊𝐼𝐿𝑆𝑀𝐴𝐶:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
      ▰▰▰▰▰▰ ⁵⁰ %
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})
await conn.sendMessage(m.chat, {text: `╭̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑊𝐼𝐿𝑆𝑀𝐴𝐶:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
      ▰▰▰▰▰▰▰▰▰ ⁸⁰ %
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})
await conn.sendMessage(m.chat, {text: `╭̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑊𝑖𝑙𝑠𝑚𝑎𝑐:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
      ▰▰▰▰▰▰▰▰▰▰ ¹⁰⁰ %
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})
await conn.sendMessage(m.chat, {text: `╭̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑊𝐼𝐿𝑆𝑀𝐴𝐶:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
『𖤍𝐄𝐱𝐢𝐭𝐨 𝐩𝐫𝐨𝐧𝐭𝐨 𝐭𝐞𝐧𝐝𝐫𝐚 𝐞𝐥 𝐦𝐞𝐧𝐮́𖤍』
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})
    const str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    
✧✈︎ ✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙. ║
✧: ➪ *𝑯𝑶𝑳𝑨,  ${taguser}* gracias por su preferencia😊
╰──────────────✧ 🌹 •°•°

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬ *Creador de Fenix:* Wilsmac*
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬ *Numero de mi creador☞︎︎︎:* wa.me/+50258115623
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬ *Bot ofc:* wa.me/++50250101139
╰ׄ┄ׅׄ─ׅׄ┄ׅׄ─ׂׅ┄ׅׄ─ׂׅ┄ׅׄ─ׅׄ┄ׅׄ─ׂׅ┄ׅׄ─ׂׅ┄ׅׄ─ׅׄ─ׂׅ┄ׅׄ─ׂ╯

╭┈ ↷ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎 
• ✐; Ajeite seu relógio.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: *Data:* ${date} 
✧: *Atividade:* ${uptime}
✧: *usuarios reg:* ${rtotalreg}
✧: *Usuarios:* 9${rtotal}
╰──────────────✧ 🌹 •°•°

╭─╮︹︹︹⊹︹︹︹⊹︹︹︹
│   *「 Info Usuario.*
*︶︶♡꒷꒦︶꒦꒷♡꒷꒦︶꒦꒷♡︶︶*
✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
╭──╮ - ̗̀ °︹︹︹⊹︹︹︹° 
┊🕸️┊ꦿ⿻ ❜ೃ ¡ Tu nivel:
╰──╯ ░ - ̗̀↳🗝: -- ꕤ*:︽ ${level}
╰───────────────────
╰──── +˚🧰 Experiencia:.
˙·.˙··.˙·.┊ *°*+↷❯  ${exp}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚⚓ Rango:.
˙·.˙··.˙·.┊ *°*+↷❯ ${role}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚💎 Diamantes:.
˙·.˙··.˙·.┊ *°*+↷❯ ${limit}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚👾 *FenixCoins* :.
˙·.˙··.˙·.┊ *°*+↷❯ ${money}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚🪙 Tokens:.
˙·.˙··.˙·.┊ *°*+↷❯ ${joincount}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚🎟️ Premium:.
┊ *°*+↷❯ ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
˙·.˙˙·.˙·.╰──────〰─◠─〰
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
┃ *< *Bot ofc* />*
├┈・─・﹕₊˚ ✦・୨୧・
┣ 𖤍 ${packname}${conn.user.jid == global.conn.user.jid ? '' : `\n║˚₊·˚₊· ͟͟͞͞➳* 𝐹𝐸𝑁𝐼𝑋-𝐵𝑂𝑇-𝐶𝐷 𝑆𝑈𝐵 𝐵𝑂𝑇 ⇢ *@${global.conn.user.jid.split`@`[0]}`}
 𖤍
╰ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╯

╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
┃ *< Sᴏʟᴜᴄɪᴏɴ Eʀʀᴏʀᴇs />*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣➤ Mensajes en espera
┣ ඬ⃟ 𖤍 _${usedPrefix}fixmsgespera_
┣➤ Mensajes en espera (creador)
┣ ඬ⃟ 𖤍 _${usedPrefix}dsowner_
╰ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╯

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷   ɪɴғᴏ
├• ✐; ₊˚✦୧︰ Bᴏᴛ .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 💟 _${usedPrefix}terminosycondiciones_
┣ ඬ⃟ 💟 _${usedPrefix}grupos_
┣ ඬ⃟ 💟 _${usedPrefix}estado_
┣ ඬ⃟ 💟 _${usedPrefix}infobot_
┣ ඬ⃟ 💟 _${usedPrefix}speedtest_
┣ ඬ⃟ 💟 _${usedPrefix}donar_
┣ ඬ⃟ 💟 _${usedPrefix}owner_
┣ ඬ⃟ 💟 _${usedPrefix}script_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Uɴᴇ ᴜɴ ʙᴏᴛ
├• ✐; ₊˚✦୧︰A ᴛᴜ ɢʀᴜᴘᴏ  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 👽 _${usedPrefix}join *<enlace>
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷   Sᴇʀʙᴏᴛ
├• ✐; ₊˚✦୧︰ Jᴀᴅɪʙᴏᴛ .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🤖 _${usedPrefix}serbot --code_
┣ ඬ⃟ 🤖 _${usedPrefix}serbot_
┣ ඬ⃟ 🤖 _${usedPrefix}deletebot_
┣ ඬ⃟ 🤖 _${usedPrefix}token
┣ ඬ⃟ 🤖 _${usedPrefix}stop_
┣ ඬ⃟ 🤖 _${usedPrefix}bots_
┣ ඬ⃟ 🤖 _${usedPrefix}enable restrict_
┣ ඬ⃟ 🤖 _${usedPrefix}disable restrict_
┣ ඬ⃟ 🤖 _${usedPrefix}enable autoread_
┣ ඬ⃟ 🤖 _${usedPrefix}disable autoread_
┣ ඬ⃟ 🤖 _${usedPrefix}enable antispam_
┣ ඬ⃟ 🤖 _${usedPrefix}disable antispam_
┣ ඬ⃟ 🤖 _${usedPrefix}enable anticall_
┣ ඬ⃟ 🤖 _${usedPrefix}disable anticall_
┣ ඬ⃟ 🤖 _${usedPrefix}enable modoia_
┣ ඬ⃟ 🤖 _${usedPrefix}disable modoia_
┣ ඬ⃟ 🤖 _${usedPrefix}enable audios_bot_
┣ ඬ⃟ 🤖 _${usedPrefix}disable audios_bot_
┣ ඬ⃟ 🤖 _${usedPrefix}enable antiprivado_
┣ ඬ⃟ 🤖 _${usedPrefix}disable antiprivado_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷   Jᴜᴇɢᴏs
├• ✐; ₊˚✦୧︰ᴊsᴊsᴊsᴊs  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🎖️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}prostituto *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}prostituta *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}gay2 *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}lesbiana *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}pajero *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}pajera *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}puto *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}puta *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}manco *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}manca *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}rata *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}love *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}doxear *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}pregunta *<texto>*_
┣ ඬ⃟ 🎖️ _.suitpvp *<@tag>*_
┣ ඬ⃟ 🎖️ _.slot *<apuesta>*_
┣ ඬ⃟ 🎖️ _.ttt *<nombre sala>*_
┣ ඬ⃟ 🎖️ _.delttt_
┣ ඬ⃟ 🎖️ _.acertijo_
┣ ඬ⃟ 🎖️ _.simi *<texto>*_
┣ ඬ⃟ 🎖️ _.top *<texto>*_
┣ ඬ⃟ 🎖️ _.topgays_
┣ ඬ⃟ 🎖️ _.topotakus_
┣ ඬ⃟ 🎖️ _.formarpareja_
┣ ඬ⃟ 🎖️ _.verdad_
┣ ඬ⃟ 🎖️ _.reto_
┣ ඬ⃟ 🎖️ _.cancion_
┣ ඬ⃟ 🎖️ _.pista_
┣ ඬ⃟ 🎖️ _.akinator_
┣ ඬ⃟ 🎖️ _.wordfind_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Aᴄᴛɪᴠᴀʀ ᴏ
├• ✐; ₊˚✦୧︰Dᴇsᴀᴄᴛɪᴠᴀʀ  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ ☑️ _.enable *welcome*_
┣ ඬ⃟ ☑️ _.disable *welcome*_
┣ ඬ⃟ ☑️ _.enable *modohorny*_
┣ ඬ⃟ ☑️ _.disable *modohorny*_
┣ ඬ⃟ ☑️ _.enable *antilink*_
┣ ඬ⃟ ☑️ _.disable *antilink*_
┣ ඬ⃟ ☑️ _.enable *antilink2*_
┣ ඬ⃟ ☑️ _.disable *antilink2*_
┣ ඬ⃟ ☑️ _.enable *detect*_
┣ ඬ⃟ ☑️ _.disable *detect*_
┣ ඬ⃟ ☑️ _.enable *audios*_
┣ ඬ⃟ ☑️ _.disable *audios*_
┣ ඬ⃟ ☑️ _.enable *autosticker*_
┣ ඬ⃟ ☑️ _.disable *autosticker*_
┣ ඬ⃟ ☑️ _.enable *antiviewonce*_
┣ ඬ⃟ ☑️ _.disable *antiviewonce*_
┣ ඬ⃟ ☑️ _.enable *antitoxic*_
┣ ඬ⃟ ☑️ _.disable *antitoxic*_
┣ ඬ⃟ ☑️ _.enable *antitraba*_
┣ ඬ⃟ ☑️ _.disable *antitraba*_
┣ ඬ⃟ ☑️ _.enable *antiarabes*_
┣ ඬ⃟ ☑️ _.disable *antiarabes*_
┣ ඬ⃟ ☑️ _.enable *modoadmin*_
┣ ඬ⃟ ☑️ _.disable *modoadmin*_
┣ ඬ⃟ ☑️ _.enable *antidelete*_
┣ ඬ⃟ ☑️ _.disable *antidelete*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Rᴇᴘᴏʀᴛᴀʀ
├• ✐; ₊˚✦୧︰ Eʀʀᴏʀᴇs .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🔰 _.reporte *<texto>*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  
├• ✐; ₊˚✦୧︰Dᴇsᴄᴀʀɢᴀs .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 📥 _.instagram *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.mediafire *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.gitclone *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.gdrive *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.tiktok *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.tiktokimg *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.xnxxdl *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.xvideosdl *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.twitter *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.fb *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.ytshort *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.ytmp3 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.ytmp4 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.ytmp3doc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.ytmp4doc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.videodoc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.dapk2 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.stickerpack *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.play *<texto>*_
┣ ඬ⃟ 📥 _.play2 *<texto>*_
┣ ඬ⃟ 📥 _.play.1 *<texto>*_
┣ ඬ⃟ 📥 _.play.2 *<texto>*_
┣ ඬ⃟ 📥 _.playdoc *<texto>*_
┣ ඬ⃟ 📥 _.playdoc2 *<texto>*_
┣ ඬ⃟ 📥 _.playlist *<texto>*_
┣ ඬ⃟ 📥 _.spotify *<texto>*_
┣ ඬ⃟ 📥 _.ringtone *<texto>*_
┣ ඬ⃟ 📥 _.soundcloud *<texto>*_
┣ ඬ⃟ 📥 _.imagen *<texto>*_
┣ ඬ⃟ 📥 _.pinterest *<texto>*_
┣ ඬ⃟ 📥 _.wallpaper *<texto>*_
┣ ඬ⃟ 📥 _.pptiktok *<nombre de usuario>*_
┣ ඬ⃟ 📥 _.igstalk *<nombre de usuario>*_
┣ ඬ⃟ 📥 _.igstory *<nombre de usuario>*_
┣ ඬ⃟ 📥 _.tiktokstalk *<username>*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Bᴜsᴄᴀᴅᴏʀᴇs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🔍 _.githubsearch *<texto>*_
┣ ඬ⃟ 🔍 _.pelisplus *<texto>*_
┣ ඬ⃟ 🔍 _.modapk *<texto>*_
┣ ඬ⃟ 🔍 _.stickersearch *<texto>*_
┣ ඬ⃟ 🔍 _.stickersearch2 *<texto>*_
┣ ඬ⃟ 🔍 _.xnxxsearch *<texto>*_
┣ ඬ⃟ 🔍 _.animeinfo *<texto>*_
┣ ඬ⃟ 🔍 _.google *<texto>*_
┣ ඬ⃟ 🔍 _.letra *<texto>*_
┣ ඬ⃟ 🔍 _.wikipedia *<texto>*_
┣ ඬ⃟ 🔍 _.ytsearch *<texto>*_
┣ ඬ⃟ 🔍 _.playstore *<texto>*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Gʀᴜᴘᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 💎 _.add *<numero>*_
┣ ඬ⃟ 💎 _.kick *<@tag>*_
┣ ඬ⃟ 💎 _.kick2 *<@tag>*_
┣ ඬ⃟ 💎 _.listanum *<texto>*_
┣ ඬ⃟ 💎 _.kicknum *<texto>*_
┣ ඬ⃟ 💎 _.grupo *<abrir / cerrar>*_
┣ ඬ⃟ 💎 _.grouptime *<opcion> <tiempo>*_
┣ ඬ⃟ 💎 _.promote *<@tag>*_
┣ ඬ⃟ 💎 _.demote *<@tag>*_
┣ ඬ⃟ 💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ඬ⃟ 💎 _.demote *<@tag>*_
┣ ඬ⃟ 💎 _.infogroup_
┣ ඬ⃟ 💎 _.resetlink_
┣ ඬ⃟ 💎 _.link_
┣ ඬ⃟ 💎 _.setname *<texto>*_
┣ ඬ⃟ 💎 _.setdesc *<texto>*_
┣ ඬ⃟ 💎 _.invocar *<texto>*_
┣ ඬ⃟ 💎 _.setwelcome *<texto>*_
┣ ඬ⃟ 💎 _.setbye *<texto>*_
┣ ඬ⃟ 💎 _.hidetag *<texto>*_
┣ ඬ⃟ 💎 _.hidetag *<audio>*_
┣ ඬ⃟ 💎 _.hidetag *<video>*_
┣ ඬ⃟ 💎 _.hidetag *<imagen>*_
┣ ඬ⃟ 💎 _.warn *<@tag>*_
┣ ඬ⃟ 💎 _.unwarn *<@tag>*_
┣ ඬ⃟ 💎 _.listwarn_
┣ ඬ⃟ 💎 _.fantasmas_
┣ ඬ⃟ 💎 _.destraba_
┣ ඬ⃟ 💎 _.setpp *<imagen>*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Cᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🧧 _.toanime *<imagen>*_
┣ ඬ⃟ 🧧 _.togifaud *<video>*_
┣ ඬ⃟ 🧧 _.toimg *<sticker>*_
┣ ඬ⃟ 🧧 _.tomp3 *<video>*_
┣ ඬ⃟ 🧧 _.tomp3 *<nota de voz>*_
┣ ඬ⃟ 🧧 _.toptt *<video / audio>*_
┣ ඬ⃟ 🧧 _.tovideo *<sticker>*_
┣ ඬ⃟ 🧧 _.tourl *<video / imagen / audio>*_
┣ ඬ⃟ 🧧 _.tts *<idioma> <texto>*_
┣ ඬ⃟ 🧧 _.tts *<efecto> <texto>*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Eғᴇᴄᴛᴏs
├• ✐; ₊˚✦୧︰ʏ Lᴏɢᴏs .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🖍️ _.logos *<efecto> <texto>*_
┣ ඬ⃟ 🖍️ _.logochristmas *<texto>*_
┣ ඬ⃟ 🖍️ _.logocorazon *<texto>*_
┣ ඬ⃟ 🖍️ _.ytcomment *<texto>*_
┣ ඬ⃟ 🖍️ _.hornycard *<@tag>*_
┣ ඬ⃟ 🖍️ _.simpcard *<@tag>*_
┣ ඬ⃟ 🖍️ _.lolice *<@tag>*_
┣ ඬ⃟ 🖍️ _.itssostupid_
┣ ඬ⃟ 🖍️ _.pixelar_
┣ ඬ⃟ 🖍️ _.blur_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
┃ *< 𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊 />*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🥀 _.piropo_
┣ ඬ⃟ 🥀 _.consejo_
┣ ඬ⃟ 🥀 _.fraseromantica_
┣ ඬ⃟ 🥀 _.historiaromantica_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
┃ *< ℝ𝔸ℕ𝔻-𝔸ℕ𝕀𝕄𝔼𝕊 />*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🧿 _.menuanimes_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
┃ *< ℝ𝔸ℕ𝔻𝕆𝕄 />*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 👾 _.kpop *<blackpink / exo / bts>*_
┣ ඬ⃟ 👾 _.cristianoronaldo_
┣ ඬ⃟ 👾 _.messi_
┣ ඬ⃟ 👾 _.cat_
┣ ඬ⃟ 👾 _.dog_
┣ ඬ⃟ 👾 _.meme_
┣ ඬ⃟ 👾 _.itzy_
┣ ඬ⃟ 👾 _.blackpink_
┣ ඬ⃟ 👾 _.navidad_
┣ ඬ⃟ 👾 _.wpmontaña_
┣ ඬ⃟ 👾 _.pubg_
┣ ඬ⃟ 👾 _.wpgaming_
┣ ඬ⃟ 👾 _.wpaesthetic_
┣ ඬ⃟ 👾 _.wpaesthetic2_
┣ ඬ⃟ 👾 _.wprandom_
┣ ඬ⃟ 👾 _.wallhp_
┣ ඬ⃟ 👾 _.wpvehiculo_
┣ ඬ⃟ 👾 _.wpmoto_
┣ ඬ⃟ 👾 _.coffee_
┣ ඬ⃟ 👾 _.pentol_
┣ ඬ⃟ 👾 _.caricatura_
┣ ඬ⃟ 👾 _.ciberespacio_
┣ ඬ⃟ 👾 _.technology_
┣ ඬ⃟ 👾 _.doraemon_
┣ ඬ⃟ 👾 _.hacker_
┣ ඬ⃟ 👾 _.planeta_
┣ ඬ⃟ 👾 _.randomprofile_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Cᴏᴍᴀɴᴅᴏs +18
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🔞 _.labiblia_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Eғᴇᴄᴛᴏsᴅ ᴅᴇ 
├• ✐; ₊˚✦୧︰ Aᴜᴅɪᴏs .
├┈・──・──・﹕₊˚ ✦・୨୧・
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣ ඬ⃟ 🎤 _.bass_
┣ ඬ⃟ 🎤 _.blown_
┣ ඬ⃟ 🎤 _.deep_
┣ ඬ⃟ 🎤 _.earrape_
┣ ඬ⃟ 🎤 _.fast_
┣ ඬ⃟ 🎤 _.fat_
┣ ඬ⃟ 🎤 _.nightcore_
┣ ඬ⃟ 🎤 _.reverse_
┣ ඬ⃟ 🎤 _.robot_
┣ ඬ⃟ 🎤 _.slow_
┣ ඬ⃟ 🎤 _.smooth_
┣ ඬ⃟ 🎤 _.tupai_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷   Cʜᴀᴛ
├• ✐; ₊˚✦୧︰Aɴᴏɴɪᴍᴏ.
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 📳 _.start_
┣ ඬ⃟ 📳 _.next_
┣ ඬ⃟ 📳 _.leave_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Aᴜᴅɪᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🔊 _.menuaudios_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Hᴇʀʀᴀᴍɪᴇɴᴛᴀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🛠️ _.inspect *<link wa_gc>*_
┣ ඬ⃟ 🛠️ _.chatgpt *<texto>*_
┣ ඬ⃟ 🛠️ _.delchatgpt
┣ ඬ⃟ 🛠️ _.gptvoz *<texto>*_
┣ ඬ⃟ 🛠️ _.dall-e *<texto>*_
┣ ඬ⃟ 🛠️ _.spamwa *<numero|texto|cantidad>*_
┣ ඬ⃟ 🛠️ _.tamaño *<cantidad> <imagen / video>*_
┣ ඬ⃟ 🛠️ _.readviewonce *<imagen / video>*_
┣ ඬ⃟ 🛠️ _.clima *<país> <ciudad>*_
┣ ඬ⃟ 🛠️ _.encuesta *<texto1|texto2...>*_
┣ ඬ⃟ 🛠️ _.afk *<motivo>*_
┣ ඬ⃟ 🛠️ _.ocr *<responde a imagen>*_
┣ ඬ⃟ 🛠️ _.hd *<responde a imagen>*_
┣ ඬ⃟ 🛠️ _.acortar *<enlace / link / url>*_
┣ ඬ⃟ 🛠️ _.calc *<operacion math>*_
┣ ඬ⃟ 🛠️ _.del *<mensaje>*_
┣ ඬ⃟ 🛠️ _.whatmusic *<audio>*_
┣ ඬ⃟ 🛠️ _.readqr *<imagen (QR)>*_
┣ ඬ⃟ 🛠️ _.qrcode *<texto>*_
┣ ඬ⃟ 🛠️ _.readmore *<texto1| texto2>*_
┣ ඬ⃟ 🛠️ _.styletext *<texto>*_
┣ ඬ⃟ 🛠️ _.traducir *<texto>*_
┣ ඬ⃟ 🛠️ _.nowa *<numero>*_
┣ ඬ⃟ 🛠️ _.covid *<pais>*_
┣ ඬ⃟ 🛠️ _.horario_
┣ ඬ⃟ 🛠️ _.dropmail_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Rᴘɢ - Lɪᴍɪᴛᴇs
├• ✐; ₊˚✦୧︰ Eᴄᴏɴᴏᴍɪᴀ.
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 💵 _.adventure_
┣ ඬ⃟ 💵 _.cazar_
┣ ඬ⃟ 💵 _.cofre_
┣ ඬ⃟ 💵 _.balance_
┣ ඬ⃟ 💵 _.claim_
┣ ඬ⃟ 💵 _.heal_
┣ ඬ⃟ 💵 _.lb_
┣ ඬ⃟ 💵 _.levelup_
┣ ඬ⃟ 💵 _.myns_
┣ ඬ⃟ 💵 _.perfil_
┣ ඬ⃟ 💵 _.work_
┣ ඬ⃟ 💵 _.minar_
┣ ඬ⃟ 💵 _.minar2_
┣ ඬ⃟ 💵 _.buy_
┣ ඬ⃟ 💵 _.buyall_
┣ ඬ⃟ 💵 _.verificar_
┣ ඬ⃟ 💵 _.robar *<cantidad> <@tag>*_
┣ ඬ⃟ 💵 _.transfer *<tipo> <cantidad> <@tag>*_
┣ ඬ⃟ 💵 _.unreg *<numero de serie>*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Sᴛɪᴄᴋᴇʀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 👽 _.sticker *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _.sticker *<enlace / link / url>*_
┣ ඬ⃟ 👽 _.sticker2 *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _.sticker2 *<enlace / link / url>*_
┣ ඬ⃟ 👽 _.s *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _.s *<enlace / link / url>*_
┣ ඬ⃟ 👽 _.emojimix *<emoji 1>&<emoji 2>*_
┣ ඬ⃟ 👽 _.scircle *<imagen>*_
┣ ඬ⃟ 👽 _.sremovebg *<imagen>*_
┣ ඬ⃟ 👽 _.semoji *<tipo> <emoji>*_
┣ ඬ⃟ 👽 _.qc *<texto>*_
┣ ඬ⃟ 👽 _.attp *<texto>*_
┣ ඬ⃟ 👽 _.attp2 *<texto>*_
┣ ඬ⃟ 👽 _.attp3 *<texto>*_
┣ ඬ⃟ 👽 _.ttp *<texto>*_
┣ ඬ⃟ 👽 _.ttp2 *<texto>*_
┣ ඬ⃟ 👽 _.ttp3 *<texto>*_
┣ ඬ⃟ 👽 _.ttp4 *<texto>*_
┣ ඬ⃟ 👽 _.ttp5 *<texto>*_
┣ ඬ⃟ 👽 _.pat *<@tag>*_
┣ ඬ⃟ 👽 _.slap *<@tag>*_
┣ ඬ⃟ 👽 _.kiss *<@tag>*_
┣ ඬ⃟ 👽 _.dado_
┣ ඬ⃟ 👽 _.wm *<packname> <author>*_
┣ ඬ⃟ 👽 _.stickermarker *<efecto> <imagen>*_
┣ ඬ⃟ 👽 _.stickerfilter *<efecto> <imagen>*_
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Oᴡɴᴇʀ ʏ
├• ✐; ₊˚✦୧︰Mᴏᴅᴇʀᴀᴅᴏʀᴇs.
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 👑 > *<funcion>*
┣ ඬ⃟ 👑 => *<funcion>*
┣ ඬ⃟ 👑 $ *<funcion>*
┣ ඬ⃟ 👑 _.setprefix *<prefijo>*_
┣ ඬ⃟ 👑 _.resetprefix_
┣ ඬ⃟ 👑 _.autoadmin_
┣ ඬ⃟ 👑 _.grouplist_
┣ ඬ⃟ 👑 _.chetar_
┣ ඬ⃟ 👑 _.leavegc_
┣ ඬ⃟ 👑 _.cajafuerte_
┣ ඬ⃟ 👑 _.blocklist_
┣ ඬ⃟ 👑 _.addowner *<@tag / numero>*_
┣ ඬ⃟ 👑 _.delowner *<@tag / numero>*_
┣ ඬ⃟ 👑 _.block *<@tag / numero>*_
┣ ඬ⃟ 👑 _.unblock *<@tag / numero>*_
┣ ඬ⃟ 👑 _.enable *restrict*_
┣ ඬ⃟ 👑 _.disable *restrict*_
┣ ඬ⃟ 👑 _.enable *autoread*_
┣ ඬ⃟ 👑 _.disable *autoread*_
┣ ඬ⃟ 👑 _.enable *public*_
┣ ඬ⃟ 👑 _.disable *public*_
┣ ඬ⃟ 👑 _.enable *pconly*_
┣ ඬ⃟ 👑 _.disable *pconly*_
┣ ඬ⃟ 👑 _.enable *gconly*_
┣ ඬ⃟ 👑 _.disable *gconly*_
┣ ඬ⃟ 👑 _.enable *anticall*_
┣ ඬ⃟ 👑 _.disable *anticall*_
┣ ඬ⃟ 👑 _.enable *antiprivado*_
┣ ඬ⃟ 👑 _.disable *antiprivado*_
┣ ඬ⃟ 👑 _.enable *modejadibot*_
┣ ඬ⃟ 👑 _.disable *modejadibot*_
┣ ඬ⃟ 👑 _.enable *audios_bot*_
┣ ඬ⃟ 👑 _.disable *audios_bot*_
┣ ඬ⃟ 👑 _.enable *antispam*_
┣ ඬ⃟ 👑 _.disable *antispam*_
┣ ඬ⃟ 👑 _.msg *<texto>*_
┣ ඬ⃟ 👑 _.banchat_
┣ ඬ⃟ 👑 _.unbanchat_
┣ ඬ⃟ 👑 _.resetuser *<@tag>*_
┣ ඬ⃟ 👑 _.banuser *<@tag>*_
┣ ඬ⃟ 👑 _.unbanuser *<@tag>*_
┣ ඬ⃟ 👑 _.dardiamantes *<@tag> <cantidad>*_
┣ ඬ⃟ 👑 _.añadirxp *<@tag> <cantidad>*_
┣ ඬ⃟ 👑 _.banuser *<@tag>*_
┣ ඬ⃟ 👑 _.bc *<texto>*_
┣ ඬ⃟ 👑 _.bcchats *<texto>*_
┣ ඬ⃟ 👑 _.bcgc *<texto>*_
┣ ඬ⃟ 👑 _.bcgc2 *<audio>*_
┣ ඬ⃟ 👑 _.bcgc2 *<video>*_
┣ ඬ⃟ 👑 _.bcgc2 *<imagen>*_
┣ ඬ⃟ 👑 _.bcbot *<texto>*_
┣ ඬ⃟ 👑 _.cleartpm_
┣ ඬ⃟ 👑 _.restart_
┣ ඬ⃟ 👑 _.update_
┣ ඬ⃟ 👑 _.banlist_
┣ ඬ⃟ 👑 _.addprem *<@tag> <tiempo>*_
┣ ඬ⃟ 👑 _.addprem2 *<@tag> <tiempo>*_
┣ ඬ⃟ 👑 _.addprem3 *<@tag> <tiempo>*_
┣ ඬ⃟ 👑 _.addprem4 *<@tag> <tiempo>*_
┣ ඬ⃟ 👑 _.delprem *<@tag>*_
┣ ඬ⃟ 👑 _.listcmd_
┣ ඬ⃟ 👑 _.setppbot *<responder a imagen>*_
┣ ඬ⃟ 👑 _.addcmd *<texto> <responder a sticker/imagen>*_
┣ ඬ⃟ 👑 _.delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┣ ඬ⃟ 👑 _.saveimage
┣ ඬ⃟ 👑 _.viewimage
╰┉ͦ━ᷫ━ⷭ┈ ⃘⵿݂۪۪۪࣭࣭፝۬۬۬͞💙ꫂ❀ᰰ᷒|²⁰|²|²³ ♡┈⊷ꫂ፝۬۬۬͞ᜓ⃘݂۪۪۪࣭࣭.─❤️⃟ᬽ፝֟━❥ᰰຼ᭢╯`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
/*async function loading() {
var hawemod = 
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%"
]
      let { key } = await conn.sendMessage(m.chat, {text: `*☠ cargando menu ☠*`}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: menu, edit: key, mentions: conn.parseMention(doxeo)}, {quoted: m});         
 }
loading()    
};*/
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
