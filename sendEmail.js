import sgMail from "@sendgrid/mail";
import handlebars from "handlebars";
import fs from "fs";

sgMail.setApiKey(
  "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"
);

const sendMail = async (to, from, subject, text, html) => {
  const msg = { to, from, subject, text, html };
  console.log(msg);
  try {
    await sgMail.send(msg);
  } catch (error) {
    if (error.response) {
      console.error(error.response.body, process.env.SENDGRID_API_KEY);
    }
  }
};
const sendPreviewMail = async (to, otp, template_path) => {
  // Load HBS template
  const source = await fs.readFileSync(
    `./Templates/${template_path}/index.html`,
    "utf-8"
  );
  const template = await handlebars.compile(source);

  const data = {
    otp: otp,
  };

  // Render template as HTML
  const html = await template(data);
  sendMail(to, "info@celebratingday.com", "Verify Email", "Verify Email", html);
};
export { sendMail, sendPreviewMail };
