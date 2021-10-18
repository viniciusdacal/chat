import { VercelRequest, VercelResponse } from '@vercel/node';
import { BaseRequest, RequestType } from '@voiceflow/base-types/build/request';
import { AnyTrace } from '@voiceflow/base-types/build/trace';
import axios from 'axios';

const versionID = process.env.VF_VERSION_ID;
const APIKey = process.env.VF_API_KEY;

interface RequestBody {
  userId: string;
  message: string;
  type?: RequestType;
  request?: BaseRequest;
}

const getRequest = (body: RequestBody | null): BaseRequest => {
  if (body.request) {
    return body.request;
  }
  if (!body.message && !body.type) {
    return null;
  }
  const { message, type = RequestType.TEXT } = body as RequestBody;

  return { type, payload: message };
};

export default async function interact(req: VercelRequest, res: VercelResponse): Promise<VercelResponse> {
  const { userId } = req.body;
  const response: { data: AnyTrace } = await axios.post(
    `https://general-runtime.voiceflow.com/state/${versionID}/user/${userId}/interact`,
    { request: getRequest(req.body), config: { tts: true } },
    { headers: { Authorization: APIKey } }
  );

  return res.json(response.data);
}
