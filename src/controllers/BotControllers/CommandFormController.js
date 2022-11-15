import { Form } from 'controllers';
import { commandsSchema } from 'services/schemas';

export default function CommandFormController({
}) {
    return Form({ validationSchema: commandsSchema });
}