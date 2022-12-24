import { QuotesCreateParamsType } from '@/entities/quotes';
import { http } from '@/shared/api';

const api_type = 'quotes';

export class QuotesApi {
    public static async create(params: QuotesCreateParamsType) {
        return http.post(api_type, params);
    }
}
