import './globals.css'; import {Nav} from '@/components/Nav';
export const metadata={title:'MirrorLock — Challenge your trade before the market does',description:'An adversarial AI trading copilot that stress-tests trade ideas before paper execution.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Nav/>{children}</body></html>}
