const handler = async (m, {conn, text, command}) => {
  const id = text ? text : m.chat;
  await conn.reply(id, '*𝐵𝑌𝐸-𝐵𝑌𝐸–𝑌𝛩𝑈-𝐺𝑈𝑌𝑺!! (≧ω≦)ゞ*');
  await conn.groupLeave(id);
};
handler.command = /^(برا|اخرج|leave|salirdelgrupo)$/i;
handler.group = true;
handler.rowner = true;
export default handler;
