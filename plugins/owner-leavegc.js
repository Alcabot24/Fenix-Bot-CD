const handler = async (m, {conn, text, command}) => {
  const id = text ? text : m.chat;
  await conn.reply(id, 'Adios a todos ${packname} se despide fue un usto estar aqui ✨*');
  await conn.groupLeave(id);
};
handler.command = /^(salir|leavegc|leave|salirdelgrupo)$/i;
handler.group = true;
handler.rowner = true;
export default handler;
