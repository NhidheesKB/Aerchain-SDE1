import { openRouter } from "../config/openrouter.js";
import { myprompt } from "../utils/prompt.js";

export class GenerateTaskService {
  private async completion(content: string) {
    return await openRouter.chat.send({
      model: "openai/gpt-oss-20b:free",
      messages: [{ role: "user", content:myprompt(content) }],
    });
  }
  async generateField(content: string) {
    const completion=await this.completion(content)
    return completion.choices[0].message.content
  }
}
