import { VirtualizedList } from 'controllers';
import { botSchema } from 'services/schemas';

export default function BotFormController({
}) {
    return VirtualizedList({ validationSchema: botSchema });
}