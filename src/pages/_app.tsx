import { TaskContext } from '@/context/taskContext';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <TaskContext>
      <Component {...pageProps} />
    </TaskContext>
  );
}


