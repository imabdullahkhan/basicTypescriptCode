import { IResponse } from "../interfaces/vendors";
import { ResponseMessage, ResponseOrigin } from "./ResponseException";
import { ResponseException } from "./ResponseException";
import { ResponseCode } from "./ResponseException";
export class SuccessfullResponse {
    public Status = ResponseCode.SUCCESS;
    public Response: IResponse;
    public Message: string;
    public ResponseOrigin: ResponseOrigin;
    public Data: object;
    constructor(res: IResponse, message: string, data: object) {
        this.Response = res;
        this.Message = message;
        this.ResponseOrigin = ResponseOrigin.INTERNALSERVER;
        this.Data = data;
    }

    public json() {
        return this.Response.status(200).json({
            data: this.Data,
            message: this.Message,
            status: 200,
            success: true,
        });
    }
}
