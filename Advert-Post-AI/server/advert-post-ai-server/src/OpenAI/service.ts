const { Configuration, OpenAIApi } = require("openai");
import {uniqueKey }from "../../../../../uniqueKey/uniqueKey";

const configuration = new Configuration({
    apiKey: uniqueKey
});
const openai = new OpenAIApi(configuration);

export async function getPostContent(text: string){

    const prompt = "Create ad for" + text;

    console.log(text)
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        max_tokens: 100,
    });
    console.log(response.data.choices[0].text);
    return response.data.choices[0].text;
}
