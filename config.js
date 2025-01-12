require("dotenv").config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || "!", // Command prefix

    ownerName: process.env.OWNER_NAME || "𝙎𝞓𝞣𝞗⁩ - 𝙎𝞓𝙉", // Owner name

    ownerNumber: process.env.OWNER_NUMBER || "917870107458", // Your WhatsApp number

    sudo: process.env.SUDO ? process.env.SUDO.split(",") : ["919128983695"], // People Who can use the bot even in Private mode

    mode: process.env.MODE || "private", // Bot mode: 'public' or 'private'

    region: process.env.REGION || "india", // Region

    botName: process.env.BOT_NAME || "Rias Gremory V3", // Bot name

    exifPack: process.env.EXIF_PACK || "𝙎𝞓𝞣𝞗⁩ - 𝙎𝞓𝙉", // Sticker pack name

    exifAuthor: process.env.EXIF_AUTHOR || "🗿", // Author of the sticker pack

    timeZone: process.env.TIME_ZONE || "Africa/Lagos", // Time zone

    presenceStatus: process.env.PRESENCE_STATUS || "online", // Bot presence status

    autoRead: process.env.AUTO_READ === "false", // Auto-read messages (true or false)

    autoViewStatus: process.env.AUTO_VIEW_STATUS === "true", // Auto-view statuses (true or false)

    autoReact: process.env.AUTO_REACT === "false", // Auto-react (true or false)

    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0ZiSlFrbjFCZjlaZnBYK0F3bnE5UjFnaXUwSDAvQVBMOThCN2R2Q29sUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1A0YUx3R0pBem1hRWFxUXhLUXBkM0JMQnErNW1qZXVGZW9qRlYxb3V6az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQXdtS1dlUC8rZzFTMlNoY3JZeWU1ZENjdWR0cCs5Q1ZrQVlZMjh4cFg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0SGtBYklGR1F3RW5OUk5qeXJsTTFuaHZHVGl1Mkw0RHRpeEVmSlQ0RXdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitQMmd4aEdwNkd4ZG5yTU5OZ0tLdlNaaHZtZTc1eFdDemNIdHJ2NXF3SEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR4MXdHcGNoZStxVW5JelZITTU0NkpqdStXZnZ6KzFPNktyTU94U1lYSFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEtCTllqQmduemZKRGE5WDJLT1ZCVFM0UXNOVENhY1hMVHhRUUUvKzcxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3I2ZWJWMkNNaFE1b0N2bGcreHdrSm9iOElWRFV1M1FzZ0N0bXJ3cmlHMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFYMkdZaWtUZklIUWFPQUlMRGV3YWVSbGxCSTZjMDBNT1VmQ2RTZlJpZGN1QmNubFgyOGtFMUlFeG9mRmRIaXE4eUhkam1OdVBSWUY4SzBrakd3dkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiI3U01VclNWYmhlQkE3amszTGJYWmxQOHMxNW4wMjNCaVlFY2toOUZUb0dZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNzg3MDEwNzQ1OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyRTFEMkRBRjJCMTlDOUQ2NzI0OTkwNUUzOEJEMDJDMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM2NzAzMzU0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTc4NzAxMDc0NThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkIxRDQ5QTNGMjM1RTc0QTJFNDcwMjNBODcxMzJBQkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNjcwMzM1NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiN1dTNkdSMlciLCJtZSI6eyJpZCI6IjkxNzg3MDEwNzQ1ODo3MEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI1MDQ5NTQ0NDc2Mjg2NDo3MEBsaWQiLCJuYW1lIjoi8J2ZjvCdnpPwnZ6j8J2el+KBqSAtIPCdmY7wnZ6T8J2ZiSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWpUMk53Q0VPcjZqN3dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicHk4aGc3dnBTcXNOMm00NWQ5cGpYbUEzeWRpMVFiQjBLS1RBZ0RlS1BGYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidm1SQ0lxRUtvSy9XblVocjFmWlJ6WjMxNi84ajc2NlAxOGdIQkNCM093aUN2RUorYUN2YlpPbEJwQURSRWs5Nmd1TGsvVmJjb1FZUDAwV1U1allBQXc9PSIsImRldmljZVNpZ25hdHVyZSI6InF5RktKNklGdlN5djdqV2Z4TVlRc1NKL0ZpQjdMZ2ljWXFRM05mWnRDVkF5Y2pxaWxnbzhiV1QxZkdjTmxrTVF3TEovMVZyenlqWU9IYk1xcytoMENBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3ODcwMTA3NDU4OjcwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFjdklZTzc2VXFyRGRwdU9YZmFZMTVnTjhuWXRVR3dkQ2lrd0lBM2lqeFgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjcwMzM1MSwibGFzdFByb3BIYXNoIjoiNDlMd1hsIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHR1IifQ==", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED === "false", // Auto-reject calls feature (true or false)
};
