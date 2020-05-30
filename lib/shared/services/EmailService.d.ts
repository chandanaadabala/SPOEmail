import { IEmailService } from "../interfaces/IEmailService";
export declare class EmailService implements IEmailService {
    private _context;
    constructor(context: any);
    sendEmail(to: string): Promise<void>;
}
//# sourceMappingURL=EmailService.d.ts.map