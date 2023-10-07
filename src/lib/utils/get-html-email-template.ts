export interface TemplateData {
  email: string;
  message: string;
  name: string;
}

export const getHtmlEmailTemplate = ({
  email,
  message,
  name,
}: TemplateData) => {
  return `
    <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Nowa wiadomość z formularza kontaktowego</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 18px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 10px;
            border: 1px solid #e0e0e0;
            background-color: blue;
        }
        .header {
            text-align: center;
            color: white;
            text-transform: uppercase;
            margin-bottom: 20px;
        }
        .message-content {
            padding: 20px;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
        }
        h2 {
            font-size: 24px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Nowa wiadomość z formularza kontaktowego</h2>
        </div>
        <div class="message-content">
            <p><strong>Imię:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Wiadomość:</strong></p>
            <p>${message}</p>
        </div>
    </div>
</body>
</html>
    
    `;
};
