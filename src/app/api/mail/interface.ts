export interface MailOptionsAttributeI {
    to: string;
    from?: string;
    subject: string;
    body?: string;
    templateName?: string;
    replacements?: Record<string, unknown>;
    attachments?: {
      filename: string;
      path: string;
    }[];
  }
  