import { createFileRoute } from '@tanstack/react-router';
import { BaristaScreen } from '../components/barista/BaristaScreen';

export const Route = createFileRoute('/barista')({
  component: BaristaScreen,
});
