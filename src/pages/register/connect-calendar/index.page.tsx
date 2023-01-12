import { useRouter } from "next/router";
import { ArrowRight } from "phosphor-react";
import { Button, Heading, MultiStep, Text } from "@ignite-ui/react";
import { signIn, useSession } from "next-auth/react";

import { Container, Header } from "../styles";
import { AuthError, ConnectBox, ConnectItem } from "./styles";

export default function ConnectCalendar() {
  async function handleRegister({ name, username }: any) {}
  const router = useRouter();

  const hasAuthError = router.query.error;

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn("google")}
          >
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>

        {hasAuthError && (
          <AuthError size="sm">
            Falha ao se conectar ao Google, verifique se você habilitou as
            permissões de acesso ao Google Calendar
          </AuthError>
        )}
        <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  );
}
