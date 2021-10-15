import { GeneralTrace, RequestType, TextRequest } from '@voiceflow/general-types';
import axios from 'axios';

const versionID = process.env.REACT_APP_VF_VERSION_ID;
const APIKey = process.env.REACT_APP_VF_API_KEY;

// eslint-disable-next-line import/prefer-default-export
export const interact = async (message: string, userID: string): Promise<GeneralTrace[]> => {
  const request: TextRequest = { type: RequestType.TEXT, payload: message };

  const { data } = await axios.post(
    `https://general-runtime.voiceflow.com/state/${versionID}/user/${userID}/interact`,
    { request, config: { tts: true } },
    { headers: { Authorization: APIKey } }
  );

  return data;
};
