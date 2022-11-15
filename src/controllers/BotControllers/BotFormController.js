import { Form } from 'controllers';
import { botSchema } from 'services/schemas';

export default function BotFormController() {
    return Form({ validationSchema: botSchema });
}