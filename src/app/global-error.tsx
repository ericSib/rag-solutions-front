'use client';

import { Button } from '@/components/ui/button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Une erreur critique est survenue
            </h2>
            <p className="text-gray-600">
              Nous nous excusons pour ce désagrément. Notre équipe a été notifiée.
            </p>
            <Button
              onClick={reset}
              className="mt-4"
            >
              Réessayer
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
