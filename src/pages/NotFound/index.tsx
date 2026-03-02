import { Heading } from 'lucide-react';
import { GenericHtml } from '../../components/GenericHtml';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <GenericHtml>
        <Heading>Oops... Page not found!</Heading>
        <p>The page you are looking for does not exist.</p>
        <p>
          Please stay calm and <a href='/'>go back to the home page</a>
        </p>
      </GenericHtml>
    </MainTemplate>
  );
}
