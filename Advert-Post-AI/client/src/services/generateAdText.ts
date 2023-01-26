import { axiosInstance } from "./setupApi";

const addTextURL = 'http://localhost:3333/content/text';

export interface GenerateAdTextResponse {
    content: string;
    status: string;
}

export interface GenerateAdTextErrorResponse {
    status: string,
    error: string;
}

export const generateAdText = async (productDescription: string): Promise<GenerateAdTextResponse> => {
    try {
        const { data } = await axiosInstance(addTextURL, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            data: {
                text: productDescription,
            },
            method: 'POST',
        });

        return data as GenerateAdTextResponse;
    }
    catch (error){
        throw error as GenerateAdTextErrorResponse;
    }
}