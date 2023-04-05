import {response} from "express";
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);


export async function getPostContent(text: string) {

    const prompt = "Create ad for" + text;
    try {

        if (!configuration.apiKey) {
            console.log("Error");
            return ({
                status: "500",
                error: "OpenAI API key not configured, please follow instructions from OpenAI API docs"
            })
        }

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.5,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            max_tokens: 100,
        });

        return ({
            content: response.data.choices[0].text,
            status: response.status,
        });
    } catch (error) {
        if (error.response) {
            console.log(error);
            return({
                error: error.response.data,
                status: error.response.status
            });
        } else {
            console.log(response);
            return({
                error: error.message
            });
        }
        ;
    }
}