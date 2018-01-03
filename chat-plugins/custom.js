'use strict';

exports.commands = {
	serverrules: 'bunnyholerules',
	bunnyholerules: function (target, room, user) {
		this.popupReply("|html|" + "<font size=4><b>Bunnyhole Server Rules:</b></font><br />" +
					"<br />" +
					"<b>1.</b> No sex. Don't discuss anything sexually explicit, not even in private messages, not even if you're both adults.<br />" +
					"<br />" +
					"<b>2.</b> Moderators have discretion to punish any behaviour they deem inappropriate, whether or not it's on this list.<br />" +
					"<br />" +
					"<b>3.</b> Do not spam, flame, or troll. This includes advertising, raiding, asking questions with one-word answers in the lobby, and flooding the chat such as by copy/pasting logs in the lobby.<br />" +
					"<br />" +
					"<b>4.</b> No minimodding: don't mod if it's not your job. Don't tell people they'll be muted, don't ask for people to be muted, and don't talk about whether or not people should be muted. This applies to bans and other punishments, too.<br />" +
					"<br />" +
					"<b>5.</b> Spam is not permitted this included but not limited to server links, 18+ links, etc.<br />" +
					"<br />" +
					"<b>6.</b> Usernames may not directly reference sexual activity, or be excessively disgusting.<br />" +
					"<br />" +
					"<b>7.</b> Please treat everyone with respect this included staff and regular users.<br />" +
					"<br />" +
					"<b>8.</b> Do not flood chats with spam that has no purpose.<br />" +
					"<br />" +
					"<i>Please follow these rules to make the server a friendly and enjoyable place to be. Breaking any rules will result in punishment.</i><br />");
	},

	'!discord': true,
	    discord: function (target, room, user) {
		        if (!this.runBroadcast()) return;
		        this.sendReplyBox('Join our server discord by clicking <a href="https://discord.gg/KeeKb2P">here</a>.');
	},
	/*Bunnyhole Gifs*/
	'!hmm': true,
	hmm: function (target, room, user) {
		if (!this.runBroadcast()) return;
		return this.sendReply('|raw|<center><img src="https://i.imgur.com/5pPDucQ.gif" width="300" height="169"></center>');
	},
	'!kicks': true,
	kicks: function (target, room, user) {
		if (!this.runBroadcast()) return;
		return this.sendReply('|raw|<center><img src="https://i.imgur.com/rL3brvH.gif" width="300" height="169"></center>');
	},
	'!nekochan': true,
	nekochan: function (target, room, user) {
		if (!this.runBroadcast()) return;
		return this.sendReply('|raw|<center><img src="https://i.imgur.com/er6fBG0.gif" width="300" height="169"></center>');
	},
	'!nono': true,
	nono: function (target, room, user) {
		if (!this.runBroadcast()) return;
		return this.sendReply('|raw|<center><img src="https://i.imgur.com/NbAHKSD.gif" width="300" height="169"></center>');
	},
	'!dafuck': true,
	dafuck: function (target, room, user) {
		if (!this.runBroadcast()) return;
		return this.sendReply('|raw|<center><img src="https://i.imgur.com/cVhyNfL.gif" width="300" height="169"></center>');
	},
	'!buddies': true,
	buddies: function (target, room, user) {
		if (!this.runBroadcast()) return;
		return this.sendReply('|raw|<center><img src="https://i.imgur.com/HJ1Jz5e.gif" width="300" height="169"></center>');
	},
	'!hehe': true,
	hehe: function (target, room, user) {
		if (!this.runBroadcast()) return;
		return this.sendReply('|raw|<center><img src="https://i.imgur.com/JZHXoJu.gif" width="300" height="169"></center>');
	},
	'!tea': true,
	tea: function (target, room, user) {
		if (!this.runBroadcast()) return;
		return this.sendReply('|raw|<center><img src="https://i.imgur.com/e5hei6e.gif" width="300" height="169"></center>');
	},
	'!cri': true,
	cri: function (target, room, user) {
		if (!this.runBroadcast()) return;
		return this.sendReply('|raw|<center><img src="https://i.imgur.com/foMOnVb.gif" width="300" height="169"></center>');
	},
	'!smile': true,
	smile: function (target, room, user) {
		if (!this.runBroadcast()) return;
		return this.sendReply('|raw|<center><img src="https://i.imgur.com/TJruUuJ.gif" width="300" height="169"></center>');
	},
	'!giflist': true,
	giflist: function (target, room, user) {
		if (!this.canBroadcast('broadcast')) return;
		this.sendReplyBox(
			"<strong>List of Server Gifs</strong><br />" +
			"- /hmm<br />" +
			"- /kicks<br />" +
			"- /nekochan<br />" +
			"- /nono<br />" +
			"- /dafuck<br />" +
			"- /buddies<br />" +
			"- /hehe<br />" +
			"- /tea<br />" +
			"- /hehe<br />" +
			"- /tea<br />" +
			"- /cri<br />" +
			"- /smile<br />" +
			"</div>"
		);
	},
};
