import { Get, Route, Query } from "tsoa";

interface ApiResponse {
    message: string;
}

@Route('healthCheck')
export class HealthCheckController {
    @Get('/')
    public async getMessage(@Query() name?: string): Promise<ApiResponse> {
        const greeting = name ? `Hello, ${name}!` : 'Hello, world!';
        return {
            message: greeting
        };
    }
}