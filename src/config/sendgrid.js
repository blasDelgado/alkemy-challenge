import sgMail from "@sendgrid/mail";
import config from "../config/config.js";

sgMail.setApiKey(config.sendgrid_key);

export default sgMail;
