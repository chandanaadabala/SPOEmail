import { IEmailService } from "../interfaces/IEmailService";
import $ from 'jquery'; 
import { IDigestCache, DigestCache } from '@microsoft/sp-http';



export class EmailService implements IEmailService{

    private _context:any;
    constructor(context:any ) {
        this._context = context;
    }

    public async sendEmail(to:string) {
        var siteurl = this._context.pageContext.web.absoluteUrl;
        var digest:string;
        const digestCache: IDigestCache = this._context.serviceScope.consume(DigestCache.serviceKey);
        await digestCache.fetchDigest(siteurl).then(val=>{
            digest = val;
        });
        
        var urlTemplate = siteurl + "/_api/SP.Utilities.Utility.SendEmail";
        $.ajax({
            contentType: 'application/json',
                                        url: urlTemplate,
                                        type: "POST",
                                        data: JSON.stringify({
                                        'properties': {
                                        '__metadata': { 'type': 'SP.Utilities.EmailProperties' },
                                        'From': this._context.pageContext.user.email,
                                        'To': { 'results': [to] },
                                        'Body': "HI",
                                        'Subject':'New Email From SharePoint Online using RestAPI'
                                        }
                                        }),
            headers:{
                "Accept": "application/json;odata=verbose",
                "content-type": "application/json;odata=verbose",
                "X-RequestDigest":  digest
            },
            success:(data)=>( 
                alert('Email Sent Successfully')
            ),
            error: (err)=>(
                alert('Error in sending Email: ' + JSON.stringify(err))
            )
        });
}
}