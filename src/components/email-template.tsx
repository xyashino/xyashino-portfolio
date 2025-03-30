interface Props {
  email: string
  message: string
  name: string
}
export const EmailTemplate = ({ email, name, message }: Props) => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '10px',
        border: '1px solid #e0e0e0',
        backgroundColor: 'blue'
      }}
    >
      <header
        style={{
          textAlign: 'center',
          color: 'white',
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}
      >
        <h2
          style={{
            fontSize: '24px'
          }}
        >
          Nowa wiadomość z formularza kontaktowego
        </h2>
      </header>
      <div
        style={{
          padding: '20px',
          backgroundColor: '#fff',
          border: '1px solid #e0e0e0'
        }}
      >
        <p>
          <strong>Imię:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Wiadomość:</strong>
        </p>
        <p>{message}</p>
      </div>
    </div>
  )
}
