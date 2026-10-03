import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Тихо — кофе, выпечка и время для себя', description: 'Современная кофейня в Алматы. Specialty кофе, завтраки весь день и свежая выпечка. Меню и бронирование столика.', icons: { icon: '/icon.svg' } };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="ru"><body>{children}</body></html>; }
