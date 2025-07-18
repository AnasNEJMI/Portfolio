import Image from 'next/image';
import * as React from 'react';
import logo from '@/../public/images/logo.svg'
import { Separator } from '../ui/separator';
import {Body,
        Button,
        Column,
        Container,
        Head,
        Heading,
        Hr,
        Html,
        Img,
        Link,
        Preview,
        pixelBasedPreset,
        Row,
        Section,
        Tailwind,
        Text,} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export function EmailTemplate({ name, email, subject,message }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
        }}
      >
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-[#eaeaea] border-solid p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src='/images/logo.png'
                width="120"
                height="60"
                alt="Portfolio Logo"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center font-secondary font-normal text-[24px] text-black">
              <strong>Formulaire de contact</strong>
            </Heading>
            <Text className="text-[14px] text-black leading-[24px] font-primary mt-[26px  ]">
              <strong>Nom</strong> : {name}
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-[#eaeaea]  border-solid" />
            <Text className="text-[14px] text-black leading-[24px] font-primary">
              <strong>E-Mail</strong> : {email}
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-[#eaeaea] border-solid" />
            <Text className="text-[14px] text-black leading-[24px] font-primary">
              <strong>Sujet</strong> : {subject}
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-[#eaeaea] border-solid" />
            <Text className="text-[14px] text-black leading-[24px] mb-[26px] font-primary">
              <strong>Message</strong> : {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}