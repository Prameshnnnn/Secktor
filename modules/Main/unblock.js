(async () => {
	switch (command) {
	
	 case "unblock":
        {
          if (querie === "help") {
            return citel.reply(
              `*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              } in pm or reply\n\n*📚Description:* Unlocks that person`
            );
          }
          if (!isCreator) citel.reply(LangG.owner);
          let users = citel.mentionedJid[0]
            ? citel.mentionedJid[0]
            : citel.quoted
            ? citel.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await Void.updateBlockStatus(users, "unblock")
            .then((res) => console.log(jsonformat(res)))
            .catch((err) => console.log(jsonformat(err)));
        }
         break;
	}
})()