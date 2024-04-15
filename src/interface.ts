export interface IConfig {
  api?: string;
  openai_api_key?: string;
  model: string;
  chatTriggerRule: string;
  disableGroupMessage: boolean;
  temperature: number;
  blockWords: string[];
  chatgptBlockWords: string[];
  chatPrivateTriggerKeyword: string;
}

export interface User {
  username: string;
  chatMessage: Array<any>; // Assuming you meant to include messages here, but the type isn't defined in the provided code
}
