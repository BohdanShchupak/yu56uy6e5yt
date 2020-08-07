const { findApp } = require('../../../../helpers');
const { TwilioClientCommand } = require('@twilio/cli-core').baseCommands;

class DeleteCommand extends TwilioClientCommand {
  async run() {
    await super.run();
    const appInfo = await findApp.call(this);

    if (appInfo) {
      await this.twilioClient.serverless.services(appInfo.sid).remove();
      console.log('Successfully deleted app.');
    } else {
      console.log('There is no app to delete.');
    }
  }
}

DeleteCommand.flags = { ...TwilioClientCommand.flags };

DeleteCommand.description = 'Delete a Programmable Video app';

DeleteCommand.examples = [
  `$ twilio rtc:apps:video:delete
Successfully deleted app.`,
];

module.exports = DeleteCommand;
