import * as Yup from 'yup';

const botSchema = Yup.object({
    channelId: Yup.string()
        .notRequired()
        .matches(/^\d{18}$/, 'Channel Id must be 18 digits'),
    targetId: Yup.string()
        .notRequired()
        .matches(/^\d{18}$/, 'Target Id must be 18 digits'),
    server: Yup.string()
        .notRequired()
        .url('Invalid server URL'),
    test: Yup.number()
        .required()
});

const commandsSchema = (commands) => Yup.object({
    commandName: Yup.string()
        .required()
        .oneOf(Object.keys(commands), 'Invalid Command'),
    ...commands.map((command) => Yup[command.type])
});

export { botSchema, commandsSchema };