import { VercelRequest, VercelResponse } from '@vercel/node';
import { AnyTrace } from '@voiceflow/base-types/build/trace';
import axios from 'axios';

const versionId = process.env.VF_VERSION_ID;
const APIKey = process.env.VF_API_KEY;

interface RequestBody {
  userId: string;
}

export default async function remove(req: VercelRequest, res: VercelResponse): Promise<VercelResponse> {
  const { userId } = req.body as RequestBody;
  const response: { data: AnyTrace } = await axios.delete(`https://general-runtime.voiceflow.com/state/${versionId}/user/${userId}`, {
    headers: { Authorization: APIKey },
  });

  return res.json(response.data);
}
