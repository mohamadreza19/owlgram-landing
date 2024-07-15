const emails = {
  owlgramSupportEmail: "support@owlgram.com",
  owlgramManagerEmail: "maager@owlgram.com",
  owlgramInfoEmail: "info@owlgram.com",
};

interface IEmail {
  recipientType: "support" | "manager" | "info";
  subject: string;
  body: string;
}

class Email {
  constructor(private params: IEmail) {}

  emailPopUpCaller = () => {
    const { body, subject } = this.params;
    const recipient = this.getRecipientEmailBaseedRecipientType();

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    console.log(mailtoLink);
    window.location.href = mailtoLink;
  };

  private getRecipientEmailBaseedRecipientType = () => {
    switch (this.params.recipientType) {
      case "info":
        return emails.owlgramInfoEmail;
      case "manager":
        return emails.owlgramManagerEmail;
      case "support":
        return emails.owlgramSupportEmail;

      default:
        return emails.owlgramInfoEmail;
    }
  };
}

export default Email;
