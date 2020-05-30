import * as React from 'react';
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import styles from './EmailApp.module.scss';
import { IEmailAppProps } from './IEmailAppProps';
import { IEmailAppState } from './IEmailAppState';
import { PrimaryButton } from 'office-ui-fabric-react';
import { IEmailService } from '../../../shared/interfaces/IEmailService';
import { EmailService } from '../../../shared/services/EmailService';

export default class EmailApp extends React.Component<IEmailAppProps, IEmailAppState> {

  private _emailService:IEmailService;

  /**
   *
   */
  constructor(props:IEmailAppProps) {
    super(props);
    this._emailService = new EmailService(this.props.context);
    this.state = {
      mailTo:null
    };
  }

  private _onChange=(event:React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string)=>{
    this.setState({
      mailTo:newValue
    });
  }

  private _sendEmail=()=>{
    this._emailService.sendEmail(this.state.mailTo);
  }

  public render(): React.ReactElement<IEmailAppProps> {
    return (
      <div className={ styles.emailApp }>
        <div className={ styles.container }>
              <TextField label="Email To" value={this.state.mailTo} onChange={this._onChange}/>
              <PrimaryButton text="Send Mail" onClick={this._sendEmail}/>
            
        </div>
      </div>
    );
  }
}
