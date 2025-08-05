import { JsonObject } from 'payload';
import { payloadFetch } from './payloadFetch';

interface CreateLeadInput {
  user_username: string;
  user_email: string;
  user_phone?: string;
  user_message: string;
}

export async function createLead(input: CreateLeadInput) {
  const body: JsonObject = {
    ...input,
  };

  const result = await payloadFetch({
    path: 'leads',
    method: 'POST',
    body,
    tags: ['lead'],
    revalidateTime: 0,
  });

  return result;
}
