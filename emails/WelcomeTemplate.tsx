import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from '@react-email/components';
import { CSSProperties } from 'react';

export default function WelcomeTemplate({ name }: { name: string }) {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Body style={body}>
        <Container>
          <Text style={heading}>Hello {name}</Text>
          <Link href='https://www.google.com'>www.google.com</Link>
        </Container>
      </Body>
    </Html>
  );
}

const body: CSSProperties = {
  background: '#fff',
};

const heading: CSSProperties = {
  fontSize: '32px',
};
