/*CMD
  command: /unban#2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admin

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var mm = User.getProperty("private")
var adm = Bot.getProperty("adminID")
Api.deleteMessage({ message_id: request.message_id })
if (user.telegramid == adm) {
  Bot.setProperty("" + message + "", "unban", "string")
  Bot.sendMessageToChatWithId(
    "" + message + "",
    "*⏰Alert\nYou Are now UnBanned by Owner*"
  )
  Api.editMessageText({
    message_id: mm,
    text: "<b>🛑 User " + message + " Has Been Unban Successfully</>",
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/admin" }]]
    }
  })
}

