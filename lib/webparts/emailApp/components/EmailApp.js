var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import styles from './EmailApp.module.scss';
import { PrimaryButton } from 'office-ui-fabric-react';
import { EmailService } from '../../../shared/services/EmailService';
var EmailApp = /** @class */ (function (_super) {
    __extends(EmailApp, _super);
    /**
     *
     */
    function EmailApp(props) {
        var _this = _super.call(this, props) || this;
        _this._onChange = function (event, newValue) {
            _this.setState({
                mailTo: newValue
            });
        };
        _this._sendEmail = function () {
            _this._emailService.sendEmail(_this.state.mailTo);
        };
        _this._emailService = new EmailService(_this.props.context);
        _this.state = {
            mailTo: null
        };
        return _this;
    }
    EmailApp.prototype.render = function () {
        return (React.createElement("div", { className: styles.emailApp },
            React.createElement("div", { className: styles.container },
                React.createElement(TextField, { label: "Email To", value: this.state.mailTo, onChange: this._onChange }),
                React.createElement(PrimaryButton, { text: "Send Mail", onClick: this._sendEmail }))));
    };
    return EmailApp;
}(React.Component));
export default EmailApp;
//# sourceMappingURL=EmailApp.js.map