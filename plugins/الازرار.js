import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'
const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/5af001be64d63c9e74a3b.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `*▢ مرحبا بك يا : @${mentionId.split('@')[0]}*
      ──━━━══⟐══━━━──
 • # اختر القائمه من خلال الزر ☟
 • # اكتب *" . "* قبل كل امر
 • # تأكد من كتابة الامر بشكل صحيح
      ──━━━══⟐══━━━──
▢ اسـم الـبـوت : *ديـكـو - 𝐷𝐼𝐾𝑂*
▢ الــمــطــور : *بـروس و شادو - 𝐵.𝑅*
▢ مـدة الـتـشـغـيـل : *${uptime}*
╯─━━──═❆ ❮ ❖ ❯ ❆═──━━─╰`.trim() },
            footer: { text: `*_˼‏ 𝐷𝐼𝐾𝑂 𝐵𝛩𝑇 ♡ 𝑺.𝐷 𝐵.𝑅 ˹_*`.trim() },  
            header: {
                title: `╮━─═❆❮ قـائـمـة الاوامــر ❯❆═─━╭`,
                subtitle: `*▢ مرحبا بك يا : @${mentionId.split('@')[0]}*
      ──━━━══⟐══━━━──
 • # اختر القائمه من خلال الزر ☟
 • # اكتب *" . "* قبل كل امر
 • # مازال هذا البوت تحت التطوير اذا
      واجهتك اي مشكله يرجى التواصل
      مع المطور
      ──━━━══⟐══━━━──
▢ اسم البوت : *فـيـفـي - Vivi*
▢ المطور : *بروك - 𝐾 ͟͟𝐿 ͟͟⁩*
▢ مدة التشغيل : *${uptime}*
╯─━━──═❆ ❮ ❖ ❯ ❆═──━━─╰`,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضـغـط هـنـا ➥',
                    sections: [
                      {
                        title: '⟐═━─⏣─━═❪ 𝐷.𝐼.𝐾.𝑂 𝐵.𝛩.𝑇 ❫═━─⏣─━═⟐',
                        highlight_label: '☚',
                        rows: [
                                        {
                                            header: '# قـسـم الـقـروبـات🗂️ ⍅',
                                            title: '.قروبات',
                                            description: '',
                                            id: '.قروبات'
                                          }
                        ]
                      },
                      {
                        highlight_label: '',
                        rows: [
                          {
                            header: '# قـسـم الـطـلـبـات📥 ⍅',
                            title: '.طلبات',
                            description: '',
                            id: '.طلبات'
                          }
                        ]
                      },
                      {
                        highlight_label: '',
                        rows: [
                          {
                            header: '# قـسـم الالـعـاب🎮 ⍅',
                            title: '. العاب',
                            description: '',
                            id: '. العاب'
                          }
                        ]
                      },
                      {
                        highlight_label: '',
                        rows: [
                          {
                            header: '# قـسـم الـديـن📿 ⍅',
                            title: '.دين',
                            description: '',
                            id: '.دين'
                          }
                        ]
                      },            {
                        highlight_label: '',
                        rows: [
                          {
                            header: '# قـسـم المـطـور ⍅',
                            title: '.قائمتي',
                            description: '',
                            id: '.قائمتي'
                          }
                        ]
                      },
                                    {
                                        highlight_label: '',
                                        rows: [
                                            {
                                            header: '# قـسـم...⚙️ ⍅',
                            title: '.',
                            description: '',
                            id: '.'
                                        }
                                        ]
                                    }
                    ]
                  })
                },
                              {

                              },
                              {

                              },
                              {

                              },
                              {


                              },
                              {

                              },
                              {

                              },
                              {

                              },
                              {

                              }
              ],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(اوامر|الاوامر|الأوامر|أوامر)$/i;

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

export default handler;
