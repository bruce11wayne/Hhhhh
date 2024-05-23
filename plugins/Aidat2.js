const dir = [
'https://telegra.ph/file/f9396b0827c63b17a789b.mp4',
'https://telegra.ph/file/822dc63d944ec382d9a54.mp4',
'https://telegra.ph/file/14305facadfec34197784.mp4',
'https://telegra.ph/file/37037fb3a9728202b23b2.mp4',
'https://telegra.ph/file/142bed654ee66fb9f019d.mp4',
'https://telegra.ph/file/476126016dc41b85d4f94.mp4',
'https://telegra.ph/file/603447bfa4b669b356a58.mp4',
'https://telegra.ph/file/eb1ad2800727efcb40893.mp4',
'https://telegra.ph/file/c7915d4b354c7c5e1322c.mp4',
'https://telegra.ph/file/7e4b93d1acf30bd86ca55.mp4',
'https://telegra.ph/file/a5977b5d986438975d41e.mp4',
'https://telegra.ph/file/e74b1851d4d70a96111b7.mp4',
'https://telegra.ph/file/3cdcdca87f0ae4d38eed3.mp4',
'https://telegra.ph/file/4e527c89096024d87959e.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['اديت'] 

export default handler
