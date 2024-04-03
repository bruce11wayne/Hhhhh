const {tlang, getAdmin, prefix, Config, sck,sck1, fetchJson,getBuffer, runtime,cmd } = require('../lib')
 let { dBinary, eBinary } = require("../lib/binary");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
 const fs = require('fs')
 const axios = require('axios')
 const fetch = require("node-fetch");
//---------------------------------------------------------------------------
 
cmd({
            pattern: "whois",
            alias:["كشف"],
            desc: "Get replied person info",
            category: "user",
            use: '<reply to any person>',
            filename: __filename
        },
async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`*֎╎رد عـلـي رسـالـتـه*`);
            var bio = await Void.fetchStatus(citel.quoted.sender);
            var bioo = bio.status;
            var setAt = bio.setAt.toString();
            
            var words = setAt.split(" ");
            if(words.length > 3){ setAt= words.slice(0, 5).join(' ') ; }
             
            var num = citel.quoted.sender.split('@')[0];
            let pfp;
            try  {  pfp = await Void.profilePictureUrl(citel.quoted.sender, "image"); } 
            catch (e) { pfp = await Void.profilePictureUrl(citel.sender, "image") ||  'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ; }    //|| 'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ;  }
            
            let username = await sck1.findOne({ id: citel.quoted.sender });
            var tname = username.name;

            
         return await Void.sendMessage(citel.chat, {
                image: {   url: pfp  },
                caption: `
*↫ مـعـلـومـاتـك♥.!*
*⌁︙اسمڪ🪪↫ ${tname}*
*⌁︙رقمڪ👤↫ ${num}*
*⌁︙البـايـــو⚡↫ ${bioo}*
`,
            },{quoted:citel});

        }
    )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "vcard",
             alias:["كونكت"],
             desc: "Create Contact by given name.",
             category: "user",
             filename: __filename
         },
         async(Void, citel, text) => {

if (!citel.quoted) return citel.reply (`*֎╎رد عـلـي رسـالـه شـخـص واكـتـب اسـم*`);
if ( !text ) return citel.reply( `*֎╎رد عـلـي رسـالـه شـخـص واكـتـب اسـم مـثـال┇.كونكت ELSA*`)
var words = text.split(" ");
if (words.length >3) {   text= words.slice(0, 3).join(' ')  }
// citel.reply(text);

const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + text + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + citel.quoted.sender.split('@')[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: text, contacts: [{ vcard }] },
            
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel });
 
})
