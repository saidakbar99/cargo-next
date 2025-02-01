import { useEffect } from 'react';
import { useRouter, usePathname } from '../../../i18n/routing';
import { useAuth } from '../../../lib/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      const locale = pathname.split('/')[0];
      router.replace(`/${locale}/auth/sign-in`);
    }
  }, [isAuthenticated, isLoading, router, pathname]);

  return isAuthenticated ? children : null;
}
